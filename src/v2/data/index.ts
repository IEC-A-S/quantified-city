import { CITY_DATA } from "../../data/index";
import INDICATORS_DATA from "../../data/indicatorsData.json";
import SENTIMENT_DATA from "../../data/sentimentGraph.json";
import INDICATOR_NEW_VALUES from "../../data/indeicatorsData_newValues.json";
import INDICATOR_DESCRIPTIONS from "../../data/indicatorDescriptionData.json";
import { getCityId } from "../../constants";
import { normalizeAssessment } from "../../utils/assessment";
import { enrichIndicatorData } from "../../utils/indicatorData";
import { getCategoryKey, getCategoryLabel } from "../../utils/categories";
import type {
  V2City,
  V2Dataset,
  V2Indicator,
  V2SentimentCategoryScore,
} from "./types";

const CATEGORY_IDS = [
  "Air pollution",
  "Water pollution",
  "Land use and waste",
  "Natural disaster hazards",
  "Water availability",
  "Food availability",
  "Energy availability",
  "Health",
  "Education",
  "Wealth",
  "Safety",
  "Livability",
  "Transport",
  "Inclusion",
  "Accountability",
  "City budget",
  "SME",
  "Public services",
  "Sustainability commitment",
] as const;

const ASSESSMENT_SCALE = [
  "VERY_LOW",
  "LOW",
  "AVERAGE",
  "STRONG",
  "VERY_STRONG",
] as const;

const getIndicatorMetaRow = (
  city: string,
  indicatorLabel: string,
  index: number
) => {
  const cityRows = INDICATOR_DESCRIPTIONS.filter((row) => row.City === city);

  return (
    cityRows.find((row) => row.Indicator === indicatorLabel) ?? cityRows[index]
  );
};

const buildCities = (): V2City[] =>
  CITY_DATA.map((city) => ({
    id: getCityId(city.City),
    slug: getCityId(city.City),
    label: city.City,
    country: city.Country,
    description: city["Text description"],
    population: city.Population,
    climate: city.Climate,
    urbanIndex: city["Urban Resilience Index"],
    environmental: normalizeAssessment(city.Environmental),
    social: normalizeAssessment(city.Social),
    governmental: normalizeAssessment(city.Governmental),
    transportIndex: normalizeAssessment(city["Transport Resilience Index"]),
    sentimentIndex: normalizeAssessment(city["Urban Sentiment Index"]),
    transportGraph: city.tr_graph,
    images: city.images ?? [],
    pdfName: city.pdfName,
    categoryScores: Object.fromEntries(
      CATEGORY_IDS.map((categoryId) => [
        categoryId,
        normalizeAssessment(city[categoryId as keyof typeof city] as string),
      ])
    ),
  }));

const buildIndicators = (): V2Indicator[] => {
  const mergedIndicators = enrichIndicatorData(
    INDICATORS_DATA as any,
    INDICATOR_NEW_VALUES as any,
    INDICATOR_DESCRIPTIONS as any
  );

  return mergedIndicators.flatMap((cityData) =>
    cityData.data.map((indicator, index) => {
      const meta = getIndicatorMetaRow(cityData.city, indicator.indicator, index);

      return {
      id: `${getCityId(cityData.city)}:${index + 1}`,
      cityId: getCityId(cityData.city),
      categoryId: getCategoryKey(indicator.category),
      categoryLabel: getCategoryLabel(indicator.category),
      label: indicator.indicator,
      unit: meta?.Unit ?? indicator.unit,
      rawValue: indicator.value,
      assessment:
        typeof indicator.natural_value === "number" &&
        indicator.natural_value >= 1 &&
        indicator.natural_value <= 5
          ? ASSESSMENT_SCALE[indicator.natural_value - 1]
          : undefined,
      assessmentScore:
        typeof indicator.natural_value === "number" &&
        indicator.natural_value >= 0 &&
        indicator.natural_value <= 5
          ? indicator.natural_value
          : undefined,
      meta: {
        id: meta?.ID,
        component: meta?.Component,
        categoryLabel: meta?.Category ?? getCategoryLabel(indicator.category),
        scope: meta?.Scope,
        dimension: meta?.Dimension,
        type: meta?.["Type of Variable"],
        unit: meta?.Unit ?? indicator.unit,
        sourceType: meta?.["Source Type"],
        source: meta?.Source,
      },
    };
    })
  );
};

const buildSentiment = (): V2SentimentCategoryScore[] =>
  (SENTIMENT_DATA as Record<string, string | number>[]).flatMap((city) =>
    CATEGORY_IDS.map((categoryId) => ({
      cityId: getCityId(city.City as string),
      categoryId,
      value: Number(city[categoryId]),
    }))
  );

export const V2_DATASET: V2Dataset = {
  cities: buildCities(),
  indicators: buildIndicators(),
  sentiment: buildSentiment(),
};

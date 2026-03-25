import { getCityId } from "../../constants";
import { getCategoryKey } from "../../utils/categories";
import { V2_DATASET } from "./index";

export const getAllV2Cities = () => V2_DATASET.cities;

export const getV2CityById = (cityId?: string | null) =>
  V2_DATASET.cities.find((city) => city.id === cityId);

export const getV2CityByLabel = (label?: string | null) =>
  V2_DATASET.cities.find((city) => city.label === label);

export const getV2CityBySlug = (slug?: string | null) =>
  V2_DATASET.cities.find((city) => city.slug === slug);

export const getV2City = (cityRef?: string | null) => {
  const cityId = getCityId(cityRef);

  return (
    getV2CityById(cityId) ??
    getV2CityByLabel(cityRef) ??
    getV2CityBySlug(cityRef)
  );
};

export const getV2IndicatorsByCity = (cityRef?: string | null) => {
  const cityId = getCityId(cityRef);

  return V2_DATASET.indicators.filter((indicator) => indicator.cityId === cityId);
};

export const getV2IndicatorsByCityAndCategory = (
  cityRef?: string | null,
  categoryRef?: string | null
) => {
  const categoryId = getCategoryKey(categoryRef ?? "");

  return getV2IndicatorsByCity(cityRef).filter(
    (indicator) => indicator.categoryId === categoryId
  );
};

export const getV2IndicatorByCityCategoryAndLabel = (
  cityRef?: string | null,
  categoryRef?: string | null,
  indicatorLabel?: string | null
) =>
  getV2IndicatorsByCityAndCategory(cityRef, categoryRef).find(
    (indicator) => indicator.label === indicatorLabel
  );

export const getV2SentimentByCity = (cityRef?: string | null) => {
  const cityId = getCityId(cityRef);

  return V2_DATASET.sentiment.filter((item) => item.cityId === cityId);
};

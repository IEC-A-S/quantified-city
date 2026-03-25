import type { AssessmentKey } from "../../utils/assessment";

export type CityId = string;
export type CategoryId = string;
export type IndicatorId = string;

export interface V2IndicatorMeta {
  id?: number;
  component?: string;
  categoryLabel: string;
  scope?: number;
  dimension?: string;
  type?: string;
  unit?: string;
  sourceType?: string;
  source?: string;
}

export interface V2City {
  id: CityId;
  slug: string;
  label: string;
  country: string;
  description: string;
  population: string | number;
  climate: string;
  urbanIndex: string;
  environmental?: AssessmentKey;
  social?: AssessmentKey;
  governmental?: AssessmentKey;
  transportIndex?: AssessmentKey;
  sentimentIndex?: AssessmentKey;
  transportGraph: Record<string, number>;
  images: string[];
  pdfName?: string;
  categoryScores: Record<CategoryId, AssessmentKey | undefined>;
}

export interface V2Indicator {
  id: IndicatorId;
  cityId: CityId;
  categoryId: CategoryId;
  categoryLabel: string;
  label: string;
  unit?: string;
  rawValue: number;
  assessment?: AssessmentKey;
  assessmentScore?: number;
  meta: V2IndicatorMeta;
}

export interface V2SentimentCategoryScore {
  cityId: CityId;
  categoryId: CategoryId;
  value: number;
}

export interface V2Dataset {
  cities: V2City[];
  indicators: V2Indicator[];
  sentiment: V2SentimentCategoryScore[];
}

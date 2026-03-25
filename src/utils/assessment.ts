export const ASSESSMENT_COLORS = {
  VERY_LOW: "#FF3B29",
  LOW: "#FF632F",
  AVERAGE: "#FF9B3F",
  STRONG: "#A0DA8B",
  VERY_STRONG: "#35CB00",
} as const;

export type AssessmentKey = keyof typeof ASSESSMENT_COLORS;

const ASSESSMENT_ALIASES: Record<string, AssessmentKey> = {
  "very low": "VERY_LOW",
  "verylow": "VERY_LOW",
  "очень низкий": "VERY_LOW",
  "очень низкая": "VERY_LOW",
  "очень низкое": "VERY_LOW",
  "очень низкие": "VERY_LOW",
  low: "LOW",
  "низкий": "LOW",
  "низкая": "LOW",
  "низкое": "LOW",
  "низкие": "LOW",
  average: "AVERAGE",
  medium: "AVERAGE",
  "средний": "AVERAGE",
  "средняя": "AVERAGE",
  "среднее": "AVERAGE",
  "средние": "AVERAGE",
  strong: "STRONG",
  high: "STRONG",
  "высокий": "STRONG",
  "высокая": "STRONG",
  "высокое": "STRONG",
  "высокие": "STRONG",
  "very strong": "VERY_STRONG",
  "verystrong": "VERY_STRONG",
  "very high": "VERY_STRONG",
  "veryhigh": "VERY_STRONG",
  "очень высокий": "VERY_STRONG",
  "очень высокая": "VERY_STRONG",
  "очень высокое": "VERY_STRONG",
  "очень высокие": "VERY_STRONG",
};

const normalizeValue = (value?: string | null) =>
  value
    ?.replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

export const normalizeAssessment = (
  value?: string | null
): AssessmentKey | undefined => {
  const normalizedValue = normalizeValue(value);

  if (!normalizedValue) {
    return undefined;
  }

  return ASSESSMENT_ALIASES[normalizedValue];
};

export const getAssessmentColor = (
  value?: string | null,
  fallback = "#000"
) => {
  const assessment = normalizeAssessment(value);

  return assessment ? ASSESSMENT_COLORS[assessment] : fallback;
};

export const getAssessmentScore = (value?: string | null) => {
  const assessment = normalizeAssessment(value);

  if (!assessment) {
    return undefined;
  }

  return (
    {
      VERY_LOW: 1,
      LOW: 2,
      AVERAGE: 3,
      STRONG: 4,
      VERY_STRONG: 5,
    } as const
  )[assessment];
};

export const normalizeAssessmentScore = (value?: number | null) => {
  if (typeof value !== "number" || Number.isNaN(value)) {
    return undefined;
  }

  const normalizedValue = Math.round(value);

  if (normalizedValue < 1 || normalizedValue > 5) {
    return undefined;
  }

  return normalizedValue as 1 | 2 | 3 | 4 | 5;
};

export const getAssessmentColorByScore = (
  value?: number | null,
  fallback = "#000"
) => {
  const normalizedValue = normalizeAssessmentScore(value);

  if (!normalizedValue) {
    return fallback;
  }

  return (
    {
      1: ASSESSMENT_COLORS.VERY_LOW,
      2: ASSESSMENT_COLORS.LOW,
      3: ASSESSMENT_COLORS.AVERAGE,
      4: ASSESSMENT_COLORS.STRONG,
      5: ASSESSMENT_COLORS.VERY_STRONG,
    } as const
  )[normalizedValue];
};

export const SCORE_TO_RU_ASSESSMENT: Record<number, string> = {
  1: "Очень низкий",
  2: "Низкий",
  3: "Средний",
  4: "Высокий",
  5: "Очень высокий",
};

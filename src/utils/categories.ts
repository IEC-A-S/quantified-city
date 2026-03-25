export const CATEGORY_LABELS: Record<string, string> = {
  "Air pollution": "Загрязнение воздуха",
  "Water pollution": "Загрязнение воды",
  "Land use and waste": "Землепользование и отходы",
  "Natural disaster hazards": "Риски стихийных бедствий",
  "Water availability": "Доступность воды",
  "Food availability": "Доступность продовольствия",
  "Energy availability": "Доступность энергии",
  Health: "Здравоохранение",
  Education: "Образование",
  Wealth: "Благосостояние",
  Safety: "Безопасность",
  Livability: "Качество городской среды",
  Transport: "Транспорт",
  Inclusion: "Инклюзивность",
  Accountability: "Подотчетность",
  "City budget": "Городской бюджет",
  SME: "МСП",
  "Public services": "Государственные услуги",
  "Sustainability commitment": "Приверженность устойчивому развитию",
};

const CATEGORY_KEYS_BY_LABEL = Object.fromEntries(
  Object.entries(CATEGORY_LABELS).map(([key, label]) => [label, key])
);

export const getCategoryLabel = (category: string) =>
  CATEGORY_LABELS[category] ?? category;

export const getCategoryKey = (category: string) =>
  CATEGORY_KEYS_BY_LABEL[category] ?? category;

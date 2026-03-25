export const CITIES = {
  DUBAI: "Dubai",
  EXPO_CITY_DUBAI: "Expo City Dubai",
  VALPARAISO: "Valparaiso",
  DAR_ES_SALAAM: "Dar es Salaam",
  ADONI: "Adoni",
  NATAL: "Natal",
  BRAZZAVILLE: "Brazzaville",
  ALMATY: "Almaty",
  CAPE_TOWN: "Cape Town",
  MEXICO_CITY: "Mexico City",
  JAKARTA: "Jakarta",
  PANAMA: "Panama",
  AMMAN: "Amman",
  BANGKOK: "Bangkok",
  COLOMBO: "Colombo",
};

export const CITY_LABELS: Record<string, string> = {
  Dubai: "Дубай",
  "Expo City Dubai": "Экспо-сити Дубай",
  Valparaiso: "Вальпараисо",
  "Dar es Salaam": "Дар-эс-Салам",
  Adoni: "Адони",
  Natal: "Натал",
  Brazzaville: "Браззавиль",
  Almaty: "Алматы",
  "Cape Town": "Кейптаун",
  "Mexico City": "Мехико",
  Jakarta: "Джакарта",
  Panama: "Панама",
  Amman: "Амман",
  Bangkok: "Бангкок",
  Colombo: "Коломбо",
  Astana: "Астана",
  Lahore: "Лахор",
  Nairobi: "Найроби",
};

export const getCityLabel = (cityId?: string | null) =>
  (cityId && CITY_LABELS[cityId]) || cityId || "";

export const getCityId = (cityLabel?: string | null) =>
  Object.entries(CITY_LABELS).find(([, label]) => label === cityLabel)?.[0] ||
  cityLabel ||
  "";

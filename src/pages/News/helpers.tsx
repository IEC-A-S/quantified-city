import { NEWS_DATA } from "./data";

export const getUniqueCategories = () => {
  return new Set(NEWS_DATA.map((item) => item.category));
};

export const getUniqueTitles = () => {
  return new Set(NEWS_DATA.map((item) => item.title));
};

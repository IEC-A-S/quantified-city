import { PROJECTS_INFO } from "./data";

export const getUniqueCategories = () => {
  const uniqueCategories = [
    ...new Set(PROJECTS_INFO.map((item) => item.Category)),
  ];
  const categories = uniqueCategories.map((item) => item.split(", ")).flat();

  return new Set(categories);
};

export const getUniqueSearchFor = () => {
  const getAllSearchFor = PROJECTS_INFO.map((item) => item["Searching for"]);

  return new Set(getAllSearchFor.filter((item) => item));
};

export const getUniqueStatuses = () => {
  const getAllStatus = PROJECTS_INFO.map((item) => item.Status);

  return new Set(getAllStatus.filter((item) => item));
};

export const getUniqueCountries = () => {
  const getAllCountries = PROJECTS_INFO.map((item) => item.Country);

  return new Set(getAllCountries.filter((item) => item));
};

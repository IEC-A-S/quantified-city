import { FilterRow } from "./FilterRow";
import { useMarketplaceStyles } from "./styles";
import { PROJECTS_INFO } from "../data";
import { FC, useEffect, useState } from "react";
import type { IProject } from "./ProjectItem";
import {
  getUniqueCategories,
  getUniqueCountries,
  getUniqueSearchFor,
  getUniqueStatuses,
} from "../helpers";

interface FiltersProps {
  setFilteredProjects: (projects: IProject[]) => void;
}
export const Filters: FC<FiltersProps> = ({ setFilteredProjects }) => {
  const { classes } = useMarketplaceStyles();

  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  // init filters
  const searchFor: Set<string> = getUniqueSearchFor();
  const statuses: Set<string> = getUniqueStatuses();
  const categories: Set<string> = getUniqueCategories();
  const countries: Set<string> = getUniqueCountries();

  const [filters, setFilters] = useState({
    categories: new Set<string>(),
    searchFor: new Set<string>(),
    statuses: new Set<string>(),
    countries: new Set<string>(),
  });

  useEffect(() => {
    // console.log("filters", filters);
    if (
      !filters.categories.size &&
      !filters.searchFor.size &&
      !filters.statuses.size &&
      !filters.countries.size
    ) {
      setFilteredProjects(PROJECTS_INFO);
      return;
    } else {
      let filteredProjects = PROJECTS_INFO;

      if (filters.categories.size) {
        filteredProjects = filteredProjects.filter((item) =>
          Array.from(filters.categories).some((category) =>
            item.Category.includes(category)
          )
        );
      }
      if (filters.searchFor.size) {
        // console.log("filters.searchFor", filters.searchFor);
        filteredProjects = filteredProjects.filter((item) => {
          return Array.from(filters.searchFor).some((category) => {
            if (!item["Searching for"]) {
              return false;
            }
            return item["Searching for"].includes(category);
          });
        });
      }
      if (filters.statuses.size) {
        filteredProjects = filteredProjects.filter((item) =>
          Array.from(filters.statuses).some((category) =>
            item.Status.includes(category)
          )
        );
      }
      if (filters.countries.size) {
        filteredProjects = filteredProjects.filter((item) =>
          Array.from(filters.countries).some((category) =>
            item.Country.includes(category)
          )
        );
      }
      setFilteredProjects(filteredProjects);
    }
  }, [filters]);

  const handleCategoryChange = (key: string, filter: string) => {
    if (filters[filter].has(key)) {
      filters[filter].delete(key);
    } else {
      filters[filter].add(key);
    }
    setFilters({ ...filters });
  };

  return (
    <div>
      <div className={classes.filterGroupHeader}>Searching for</div>
      <div className={classes.filterList}>
        {Array.from(searchFor).map((item) => (
          <FilterRow
            key={item}
            title={item}
            checked={filters.searchFor.has(item)}
            onChange={(key) => handleCategoryChange(key, "searchFor")}
          />
        ))}
      </div>
      <div className={classes.filterGroupHeader}>Status</div>
      <div className={classes.filterList}>
        {Array.from(statuses).map((item) => (
          <FilterRow
            key={item}
            title={item}
            checked={filters.statuses.has(item)}
            onChange={(key) => handleCategoryChange(key, "statuses")}
          />
        ))}
      </div>
      <div className={classes.filterGroupHeader}>Category</div>
      <div className={classes.filterList}>
        {Array.from(categories)
          .slice(0, categoriesExpanded ? categories.size : 3)
          .map((item) => (
            <FilterRow
              title={item}
              key={item}
              checked={filters.categories.has(item)}
              onChange={(key) => handleCategoryChange(key, "categories")}
            />
          ))}
        <div
          className={classes.moreFiltersBtn}
          onClick={() => setCategoriesExpanded(!categoriesExpanded)}
        >
          {categoriesExpanded ? "Show less" : "More categories"}
        </div>
      </div>
      <div className={classes.filterGroupHeader}>Country</div>
      <div className={classes.filterList}>
        {Array.from(countries).map((item) => (
          <FilterRow
            title={item}
            key={item}
            checked={filters.countries.has(item)}
            onChange={(key) => handleCategoryChange(key, "countries")}
          />
        ))}
        {/*<div className={classes.moreFiltersBtn}>More countries</div>*/}
      </div>
    </div>
  );
};

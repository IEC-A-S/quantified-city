import { FilterRow } from "./FilterRow";
import { NEWS_DATA } from "../data";
import { FC, useEffect, useState } from "react";
import { getUniqueCategories } from "../helpers";
import { useNewsStyles } from "./styles";
import { TextField } from "@mui/material";
import type { INewsItem } from "./NewsItem";

interface FiltersProps {
  setFilteredNews: (newsItem: INewsItem[]) => void;
}
export const Filters: FC<FiltersProps> = ({ setFilteredNews }) => {
  const { classes } = useNewsStyles();

  const [categoriesExpanded, setCategoriesExpanded] = useState(false);
  const categories: Set<string> = getUniqueCategories();

  const [filters, setFilters] = useState({
    categories: new Set<string>(),
    searchFor: new Set<string>(),
    statuses: new Set<string>(),
    countries: new Set<string>(),
  });

  useEffect(() => {
    if (!filters.categories.size) {
      setFilteredNews(NEWS_DATA);
      return;
    } else {
      let filteredProjects = NEWS_DATA;

      if (filters.categories.size) {
        filteredProjects = filteredProjects.filter((item) =>
          Array.from(filters.categories).some((category) =>
            item.category.includes(category)
          )
        );
      }
      setFilteredNews(filteredProjects);
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
      <div className={classes.filterGroupHeader}>Category</div>
      <div className={classes.filterList}>
        {Array.from(categories).map((item) => (
          <FilterRow
            key={item}
            title={item}
            checked={filters.searchFor.has(item)}
            onChange={(key) => handleCategoryChange(key, "categories")}
          />
        ))}
      </div>
      <div className={classes.filterGroupHeader}>Level</div>
      <div className={classes.filterList}></div>
      <div className={classes.filterGroupHeader}>Date</div>
      <div className={classes.filterList}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            // marginBottom: "20px",
          }}
        >
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>
      <div className={classes.filterGroupHeader}>Source</div>
      <div className={classes.filterList}>
        {/*<div className={classes.moreFiltersBtn}>More countries</div>*/}
      </div>
      <div className={classes.filterGroupHeader}>New type</div>
      <div className={classes.filterList}></div>
    </div>
  );
};

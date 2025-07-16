import type { SelectChangeEvent } from "@mui/material";
import { useContentStyles } from "../styles";
import { useCallback, useState } from "react";
import { CustomSelect } from "../common/CustomSelect";
import { Button } from "@mui/material";

export const FilterButtons = () => {
  const { classes } = useContentStyles();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [country, setCountry] = useState("Country");
  const [climate, setClimate] = useState("Climate");
  const [riskExposure, setRiskExposure] = useState("Risk exposure");
  const [incomeGroup, setIncomeGroup] = useState("Income group");
  const [populationGroup, setPopulationGroup] = useState("Population group");
  const [rating, setRating] = useState("Rating");

  const onCountryChange = useCallback((event: SelectChangeEvent) => {
    setCountry(event.target.value);
  }, []);

  const onClimateChange = useCallback((event: SelectChangeEvent) => {
    setClimate(event.target.value);
  }, []);

  const onRiskExposureChange = useCallback((event: SelectChangeEvent) => {
    setRiskExposure(event.target.value);
  }, []);

  const onIncomeGroupChange = useCallback((event: SelectChangeEvent) => {
    setIncomeGroup(event.target.value);
  }, []);

  const onPopulationGroupChange = useCallback((event: SelectChangeEvent) => {
    setPopulationGroup(event.target.value);
  }, []);

  const onRatingChange = useCallback((event: SelectChangeEvent) => {
    setRating(event.target.value);
  }, []);

  return (
    <div className={classes.filterButtonsWrapper}>
      {filtersOpen ? (
        <div>
          <div
            onClick={() => setFiltersOpen(false)}
            className={classes.blurAll}
          ></div>
          <CustomSelect
            value={country}
            label="Country"
            options={["Country", "Canada"]}
            onChange={onCountryChange}
          />
          <CustomSelect
            value={climate}
            label="Climate"
            options={["Climate", "Tropical"]}
            onChange={onClimateChange}
          />
          <CustomSelect
            value={riskExposure}
            label="Risk exposure"
            options={["Risk exposure", "Low"]}
            onChange={onRiskExposureChange}
          />
          <CustomSelect
            value={incomeGroup}
            label="Income group"
            options={["Income group", "High"]}
            onChange={onIncomeGroupChange}
          />
          <CustomSelect
            value={populationGroup}
            label="Population group"
            options={["Population group", "High"]}
            onChange={onPopulationGroupChange}
          />
          <CustomSelect
            value={rating}
            label="Rating"
            options={["Rating", "High"]}
            onChange={onRatingChange}
          />
          <Button
            style={{
              color: "white",
              background: "#2D67FF",
              gap: "10px",
            }}
            className={classes.filterButton}
            variant="outlined"
            onClick={() => setFiltersOpen(false)}
          >
            Close
            <img style={{height: "1.1vh"}} src="assets/closeIcon.svg" alt="close" />
          </Button>
        </div>
      ) : (
        <Button
          className={classes.filterButton}
          variant="outlined"
          onClick={() => {
            setFiltersOpen(true);
          }}
        >
          Filter by
        </Button>
      )}
    </div>
  );
};

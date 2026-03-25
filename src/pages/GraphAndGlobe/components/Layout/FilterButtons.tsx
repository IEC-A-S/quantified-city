import type { SelectChangeEvent } from "@mui/material";
import { useContentStyles } from "../styles";
import { useCallback, useState } from "react";
import { CustomSelect } from "../common/CustomSelect";
import { Button } from "@mui/material";

export const FilterButtons = () => {
  const { classes } = useContentStyles();

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [country, setCountry] = useState("Страна");
  const [climate, setClimate] = useState("Климат");
  const [riskExposure, setRiskExposure] = useState("Риск");
  const [incomeGroup, setIncomeGroup] = useState("Доход");
  const [populationGroup, setPopulationGroup] = useState("Население");
  const [rating, setRating] = useState("Рейтинг");

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
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
        }}>
          <div
            onClick={() => setFiltersOpen(false)}
            className={classes.blurAll}
          ></div>
          <CustomSelect
            value={country}
            label="Страна"
            options={["Страна", "Канада"]}
            onChange={onCountryChange}
          />
          <CustomSelect
            value={climate}
            label="Климат"
            options={["Климат", "Тропический"]}
            onChange={onClimateChange}
          />
          <CustomSelect
            value={riskExposure}
            label="Риск"
            options={["Риск", "Низкий"]}
            onChange={onRiskExposureChange}
          />
          <CustomSelect
            value={incomeGroup}
            label="Доход"
            options={["Доход", "Высокий"]}
            onChange={onIncomeGroupChange}
          />
          <CustomSelect
            value={populationGroup}
            label="Население"
            options={["Население", "Высокое"]}
            onChange={onPopulationGroupChange}
          />
          <CustomSelect
            value={rating}
            label="Рейтинг"
            options={["Рейтинг", "Высокий"]}
            onChange={onRatingChange}
          />
          <Button
            style={{
              color: "white",
              background: "transparent",
              gap: "10px",
            }}
            className={classes.filterButton}
            variant="outlined"
            onClick={() => setFiltersOpen(false)}
          >
            Закрыть
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
          Фильтр
        </Button>
      )}
    </div>
  );
};

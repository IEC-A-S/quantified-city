import { Button, Typography } from "@mui/material";
import { StyledToggleButton, StyledToggleButtonGroup } from "../../../theme";
import { Graph3D } from "../../../../pages/GraphAndGlobe/components/Graph3D";
import { BlueMap } from "../../../../pages/GraphAndGlobe/components/Map";
import { type FC, useCallback, useState } from "react";
import { useUrbanStyles } from "../index";
import type mapboxgl from "mapbox-gl";
import { HowTheRatingWorks } from "../../../components/HowTheRatingWorks";

interface IContentProps {
  map: mapboxgl.Map | null;
  currentView: "graph" | "map";
  selectedCity: string | null;
  setMap(map: mapboxgl.Map | null): void;
  setCurrentView(view: "graph" | "map"): void;
  setSelectedCity(city: string | null): void;
}
export const Content: FC<IContentProps> = ({
  map,
  currentView,
  selectedCity,
  setMap,
  setCurrentView,
  setSelectedCity,
}) => {
  const { classes } = useUrbanStyles();
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);

  const onMapButtonClick = useCallback(() => {
    setCurrentView("map");
  }, []);

  const onGraphButtonClick = useCallback(() => {
    setCurrentView("graph");
  }, []);

  return (
    <div>
      <Typography
        variant="h1"
        style={{
          marginTop: "14px",
        }}
      >
        Выберите город и <br /> посмотрите его{" "}
        <span className={classes.span}>оценку</span>
      </Typography>
      <div className={classes.toggleButtonGroupWrapper}>
        <StyledToggleButtonGroup>
          <StyledToggleButton
            value="map"
            selected={currentView === "map"}
            onClick={onMapButtonClick}
          >
            Карта
          </StyledToggleButton>
          <StyledToggleButton
            value="graph"
            selected={currentView === "graph"}
            onClick={onGraphButtonClick}
          >
            График
          </StyledToggleButton>
        </StyledToggleButtonGroup>
        <div className={classes.bottomRatingLegend}>
          <div
            style={{
              marginBottom: "32px",
            }}
          >
            <HowTheRatingWorks size="large" />
          </div>
          <img
            src={"/assets/rating_legend.svg"}
            alt="urban page icon"
            className={classes.bottomRatingLegendImage}
          />
        </div>
      </div>
      <div className={classes.filterButtonsWrapper}>
        {!isFilterVisible ? (
          <Button variant="text" onClick={() => setIsFilterVisible(true)}>
            Фильтр
          </Button>
        ) : (
          <>
            <div className={classes.blurWrapper}></div>
            <Button
              onClick={() => setIsFilterVisible(false)}
              variant="contained"
            >
              Закрыть <img src={"./assets/closeIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Страна <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Климат <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Риск{" "}
              <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Доход{" "}
              <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Население{" "}
              <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Рейтинг <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
          </>
        )}
      </div>
      <div className={classes.graphAndMapWrapper}>
        {currentView === "graph" && !selectedCity && (
          <div className={classes.graphWrapper}>
            <Graph3D setSelectedCity={setSelectedCity} isMobile={true} />
          </div>
        )}
        {currentView === "map" && !selectedCity && (
          <BlueMap setMap={setMap} setSelectedCity={setSelectedCity} />
        )}
      </div>
    </div>
  );
};

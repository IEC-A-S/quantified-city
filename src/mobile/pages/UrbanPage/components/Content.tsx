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
        Choose a city and <br /> view its{" "}
        <span className={classes.span}>score</span>
      </Typography>
      <div className={classes.toggleButtonGroupWrapper}>
        <StyledToggleButtonGroup>
          <StyledToggleButton
            value="map"
            selected={currentView === "map"}
            onClick={onMapButtonClick}
          >
            Map
          </StyledToggleButton>
          <StyledToggleButton
            value="graph"
            selected={currentView === "graph"}
            onClick={onGraphButtonClick}
          >
            Graph
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
            Filter by
          </Button>
        ) : (
          <>
            <div className={classes.blurWrapper}></div>
            <Button
              onClick={() => setIsFilterVisible(false)}
              variant="contained"
            >
              Close <img src={"./assets/closeIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Country <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Climate <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Risk exposure{" "}
              <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Income group{" "}
              <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Population group{" "}
              <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
            </Button>
            <Button variant="text">
              Rating <img src={"./assets/arrowDownIcon.svg"} alt="arrow" />
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

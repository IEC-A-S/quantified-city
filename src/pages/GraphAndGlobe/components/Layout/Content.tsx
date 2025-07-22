import { Typography } from "@mui/material";
import {
  StyledToggleButton,
  StyledToggleButtonGroup,
  useContentStyles,
} from "../styles";
import { useCallback, type FC, useState } from "react";
import { ZoomButtons } from "./ZoomButtons";
import type mapboxgl from "mapbox-gl";
import { FilterButtons } from "./FilterButtons";

const i18nObject = {
  firstRow: "Choose a city",
  secondRow: "to",
  score: "explore",
  howRatingWorks: "How the rating works",
  map: "Map",
  graph: "Graph",
  filterBy: "Filter by",
  smallTextGraph1:
    "Urban Resilience Index (URI) is a tool to measure environmental (E), social (S), and governmental (G) performance of urban areas as well as their ability & willingness to achieve better practices.",
  smallTextGraph2:
    "URI shows whether the basic needs of residents are satisfied, how vulnerable the place is to crises and how it impacts the world around.",
  smallTextGraph3:
    "At the graph color represents the cities' overall ratings (see right scale) while position against E, S and G axes reflects respective component scoring.",
};

interface ContentProps {
  map: mapboxgl.Map | null;
  currentView: "graph" | "map";
  isZoomButtonsVisible?: boolean;
  setCurrentView(view: "graph" | "map"): void;
}

export const Content: FC<ContentProps> = ({
  map,
  currentView,
  setCurrentView,
  isZoomButtonsVisible,
}) => {
  const t = (key: keyof typeof i18nObject) => i18nObject[key];
  const { classes } = useContentStyles();

  const onMapButtonClick = useCallback(() => {
    setCurrentView("map");
  }, []);

  const onGraphButtonClick = useCallback(() => {
    setCurrentView("graph");
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.topLineWrapper}>
        <div className={classes.textAndToggleWrapper}>
          <Typography className={classes.bigText}>
            {t("firstRow")} <br />
            {t("secondRow")}&nbsp;
            <span className={classes.bigTextBlue}>{t("score")}</span>
          </Typography>

          {/*<StyledToggleButtonGroup>*/}
          {/*  <StyledToggleButton*/}
          {/*    value="map"*/}
          {/*    selected={currentView === "map"}*/}
          {/*    onClick={onMapButtonClick}*/}
          {/*  >*/}
          {/*    {t("map")}*/}
          {/*  </StyledToggleButton>*/}
          {/*  <StyledToggleButton*/}
          {/*    value="graph"*/}
          {/*    selected={currentView === "graph"}*/}
          {/*    onClick={onGraphButtonClick}*/}
          {/*  >*/}
          {/*    {t("graph")}*/}
          {/*  </StyledToggleButton>*/}
          {/*</StyledToggleButtonGroup>*/}
          {!isZoomButtonsVisible && (
            <Typography className={classes.bigTextSubtitle}>
              {t("smallTextGraph1")} <br />
              <br />
              {t("smallTextGraph2")} <br />
              <br />
              {t("smallTextGraph3")}
            </Typography>
          )}
        </div>
      </div>
      <FilterButtons />
      {/*<img*/}
      {/*  className={classes.legendLine}*/}
      {/*  src="/assets/legendLine.svg"*/}
      {/*  alt="legend"*/}
      {/*/>*/}
      <div className={classes.bottomWrapper}>
        <div
          className={classes.smallTextWrapper}
          onClick={() => {
            const fileName = "Methodology_v05_AP_BK_v2.pdf";
            const link = document.createElement("a");
            link.href = `/pdf/${fileName}`;
            link.download = fileName;
            link.click();
          }}
        >
          {/*<Typography className={classes.smallText}>*/}
          {/*  {t("howRatingWorks")}*/}
          {/*</Typography>*/}
          {/*<img src="/assets/hintQuestionIcon.svg" alt="hint" />*/}
        </div>
        {isZoomButtonsVisible && <ZoomButtons map={map} />}
      </div>
    </div>
  );
};

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
  firstRow: "Выберите город",
  secondRow: "для",
  score: "изучения",
  howRatingWorks: "Как работает рейтинг",
  map: "Карта",
  graph: "График",
  filterBy: "Фильтр",
  smallTextGraph1:
    "Индекс городской устойчивости (URI) измеряет экологические (E), социальные (S) и управленческие (G) показатели городских территорий, а также их способность и готовность внедрять лучшие практики.",
  smallTextGraph2:
    "URI показывает, удовлетворены ли базовые потребности жителей, насколько территория уязвима к кризисам и как она влияет на окружающий мир.",
  smallTextGraph3:
    "На графике цвет показывает общий рейтинг города, а положение относительно осей E, S и G отражает оценки по соответствующим компонентам.",
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

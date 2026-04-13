import { FC, useEffect, useState } from "react";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import { Button } from "@mui/material";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { NewCube } from "./components/NewCube";
import { getCityId } from "../../../../constants";
import { getCompatiblePolicyHints } from "../../../../v2/data/compat";
import { CATEGORY_DATA } from "./components/Cube/data";

interface BlueCubeSectionProps {
  clickedCategory: string | null;
  setClickedCategory: (category: string | null) => void;
  setTablePopupOpen: (open: boolean) => void;
}

export const BlueCubeSection: FC<BlueCubeSectionProps> = ({
  clickedCategory,
  setClickedCategory,
  setTablePopupOpen,
}) => {
  const { classes } = useImageSectionStyles();
  const [hoveredSide, setHoveredSide] = useState<string | null>(null);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const cityData = useSelectedCityData();
  const cityId = getCityId(cityData.City);
  const hasCategoryData = CATEGORY_DATA.some(
    (item) => getCityId(item.City) === cityId
  );

  useEffect(() => {
    const hints = getCompatiblePolicyHints(cityId);
    if (!hints) {
      setActiveHint(null);
      return;
    }

    if (hoveredSide === "left") {
      setActiveHint(hints.E);
      return;
    }

    if (hoveredSide === "top") {
      setActiveHint(hints.S);
      return;
    }

    if (hoveredSide === "right") {
      setActiveHint(hints.G);
      return;
    }

    setActiveHint(null);
  }, [cityId, hoveredSide]);

  void clickedCategory;

  if (!hasCategoryData) {
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        padding: "0 15%",
        background: "#F0EAD6",
      }}
    >
      <div
        className={classes.root}
        style={{
          padding: 0,
        }}
      >
        <NewCube
          setHoveredSide={setHoveredSide}
          setClickedCategory={setClickedCategory}
        />
        <div className={classes.contentWrapper}>
          <div
            style={{
              position: "absolute",
              top: "12%",
              left: "15%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "5vh",
                fontWeight: 400,
                color: "#121212",
                zIndex: 1,
              }}
            >
              {cityData.City}: <br />
              Профиль <span style={{ color: "#00C8B5" }}>города</span>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "45%",
              lineHeight: "1.5",
              right: "20%",
              width: "40vh",
              fontSize: "1.8vh",
            }}
          >
            {hoveredSide ? "Ключевые выводы" : ""}
            <br />
            <br />
            {activeHint}
          </div>
          <div className={classes.pageContainer}>
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
              />
              <Button
                onClick={() => {
                  setTablePopupOpen(true);
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  pointerEvents: "all",
                  color: "#121212",
                  border: "1px solid #121212",
                  backgroundColor: "transparent",
                  borderRadius: 50,
                  padding: "1vh 2.5vh",
                  textTransform: "none",
                  fontSize: "1.7vh",
                  display: "flex",
                  flexDirection: "row",
                  gap: "1.2vh",
                }}
              >
                <div>Таблица</div>
              </Button>
              <Button
                style={{
                  pointerEvents: "all",
                  color: "#121212",
                  backgroundColor: "#00C8B5",
                  borderRadius: 50,
                  padding: "1vh 2.5vh",
                  textTransform: "none",
                  fontSize: "1.7vh",
                  display: "flex",
                  flexDirection: "row",
                  gap: "1.2vh",
                }}
                onClick={() => {
                  const fileName = cityData.pdfName;
                  const link = document.createElement("a");
                  link.href = `/pdf/${fileName}`;
                  link.download = fileName;
                  link.click();
                }}
              >
                <div>Скачать отчет</div>
                <img src="/assets/downloadIcon.svg" alt="arrow down" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

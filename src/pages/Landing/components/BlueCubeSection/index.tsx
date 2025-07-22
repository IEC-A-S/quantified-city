import { FC, useEffect, useState } from "react";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import { SmallStatItem } from "../../../GraphAndGlobe/components/SmallStatItem";
import { Button, Typography } from "@mui/material";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { NewCube } from "./components/NewCube";
import { POLICY_HINTS } from "../../../../data";
import { STATUS_COLORS } from "../../../GraphAndGlobe/components/BigStatItem";

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

  useEffect(() => {
    const hints = POLICY_HINTS.find((hint) => hint.city === cityData.City);
    const eHint = hints.E;
    const sHint = hints.S;
    const gHint = hints.G;

    if (hoveredSide === "left") {
      setActiveHint(eHint);
    } else if (hoveredSide === "top") {
      setActiveHint(sHint);
    } else if (hoveredSide === "right") {
      setActiveHint(gHint);
    } else {
      setActiveHint(null);
    }
  }, [hoveredSide]);

  return (
    <>
      <div
        style={{
          position: "relative",
          padding: "0 15%",
          background: "#F0EAD6",
        }}
      >
        <div className={classes.root} style={{
          padding: 0,
        }}>
          <NewCube
            setHoveredSide={setHoveredSide}
            setClickedCategory={setClickedCategory}
          />
          <div className={classes.contentWrapper}>
            <div
              style={{
                position: "absolute",
                // position: "relative",
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
                {cityData.City}: {""}
                <br />
                City <span style={{
                  color: "#00C8B5"
              }}>profile</span>
                <br />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "25vh",
                  paddingLeft: "2vh",
                  height: "auto",
                  transform: "scale(1.2)",
                }}
              >
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
                // fontSize: "18px",
              }}
            >
              {hoveredSide === "left"
                ? "Key insights"
                : hoveredSide === "top"
                ? "Key insights"
                : hoveredSide === "right"
                ? "Key insights"
                : ""}
              <br />
              <br />
              {activeHint}
            </div>
            <div className={classes.pageContainer}>
              {/*<CubePOC*/}
              {/*  setHoveredSide={setHoveredSide}*/}
              {/*  setClickedCategory={setClickedCategory}*/}
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
                  {/*  How the rating works*/}
                  {/*</Typography>*/}
                  {/*<img*/}
                  {/*  src="/assets/questionGray.svg"*/}
                  {/*  alt="hint"*/}
                  {/*  style={{*/}
                  {/*    opacity: 0.6,*/}
                  {/*  }}*/}
                  {/*/>*/}
                </div>
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
                  <div>Table view</div>
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
                  <div>Download report</div>
                  <img src="/assets/downloadIcon.svg" alt="arrow down" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

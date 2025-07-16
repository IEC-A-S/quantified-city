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
          backgroundImage: "url(/assets/new_bg_cube.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className={classes.root}>
          <NewCube
            setHoveredSide={setHoveredSide}
            setClickedCategory={setClickedCategory}
          />
          <div className={classes.contentWrapper}>
            <div
              style={{
                position: "absolute",
                top: "15.5%",
                left: "9vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "SuisseIntl-Light",
                  fontSize: "6.25vh",
                  color: "#fff",
                  zIndex: 1,
                }}
              >
                {cityData.City}: {""}
                <br />
                Urban <b>resilience</b>
                <br />
                index
                <span
                  style={{
                    paddingTop: "-1.5vh",
                    verticalAlign: "middle",
                    marginLeft: "1.2vh",
                    fontFamily: "SuisseIntl-Light",
                    fontSize: "3vh",
                    fontWeight: 400,
                    marginTop: "1.45vh",
                    textAlign: "center",
                    padding: "1vh 3vh",
                    backgroundColor:
                      STATUS_COLORS[
                        cityData["Urban Resilience Index"].replace("-", "")
                      ],
                    color: "#fff",
                    borderRadius: 50,
                    width: "fit-content",
                  }}
                >
                  {cityData["Urban Resilience Index"]}
                </span>
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
                <div className={classes.smallItemsListWrapper}>
                  <SmallStatItem
                    label="Environmental"
                    status={cityData.Environmental}
                    style={{ fontSize: "2.1vh" }}
                  />
                  <SmallStatItem
                    label="Social"
                    status={cityData.Social}
                    style={{ fontSize: "2.1vh" }}
                  />
                  <SmallStatItem
                    label="Governmental"
                    status={cityData.Governmental}
                    style={{ fontSize: "2.1vh" }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "25%",
                lineHeight: "1.5",
                right: "5vh",
                width: "30vh",
                fontFamily: "SuisseIntl-Light",
                fontSize: "2.1vh",
              }}
            >
              {hoveredSide === "left"
                ? "Policy hints"
                : hoveredSide === "top"
                ? "Policy hints"
                : hoveredSide === "right"
                ? "Policy hints"
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
                  <Typography className={classes.smallText}>
                    How the rating works
                  </Typography>
                  <img
                    src="/assets/questionGray.svg"
                    alt="hint"
                    style={{
                      opacity: 0.6,
                    }}
                  />
                </div>
                <Button
                  onClick={() => {
                    setTablePopupOpen(true);
                  }}
                  style={{
                    pointerEvents: "all",
                    color: "#fff",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: 50,
                    padding: "1vh 2.5vh",
                    textTransform: "none",
                    fontFamily: "SuisseIntl-Light",
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
                    color: "#fff",
                    backgroundColor: "#2D67FF",
                    borderRadius: 50,
                    padding: "1vh 2.5vh",
                    textTransform: "none",
                    fontFamily: "SuisseIntl-Light",
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

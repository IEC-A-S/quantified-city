import { useFirstSectionStyles } from "./components/styles";
import { Layout } from "./components/Layout";
import { CityName } from "./components/CityName";
import { BigSmallStatItem } from "./components/BigStatItem";
import { Button, Typography } from "@mui/material";
import type { FC } from "react";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { SelectedLandingMap } from "./components/SelectedLandingMap";
import { useState } from "react";
import { ZoomButtons } from "./components/ZoomButtons";

interface IFirstSection {
  setActiveSection(sectionIndex: number): void;
}

export const FirstSection: FC<IFirstSection> = ({ setActiveSection }) => {
  const { classes } = useFirstSectionStyles();
  const [map, setMap] = useState<mapboxgl.Map | null>(null); // [1

  const cityData = useSelectedCityData();

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SelectedLandingMap setMap={setMap} selectedCityName={cityData.City} />
      <Layout>
        <div className={classes.pageContainer}>
          <CityName cityName={cityData.City} countryName={cityData.Country} />
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "2vh",
              borderLeft: "1px solid #fff",
              paddingLeft: "2vh",
              height: "auto",
              transform: "scale(1.2)",
            }}
          >
          </div>
          <div
            style={{
              position: "absolute",
              top: "27%",
              right: "0vh",
              display: "flex",
              flexDirection: "column",
              gap: "3.2vh",
              height: "43.5vh",
            }}
          >
            {/*<div*/}
            {/*  style={{*/}
            {/*    fontWeight: 100,*/}
            {/*    fontSize: "3vh",*/}
            {/*    textAlign: "center",*/}
            {/*    color: "#121212",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Related indices*/}
            {/*</div>*/}
            <div>
              <BigSmallStatItem
                isFirst={true}
                label="Basic needs"
                subLabel="Scope 0"
                status={cityData["Basic needs Scope"]}
              />
            </div>
            {(cityData.City !== "Lahore") ? (
              <div
                onClick={() => {
                  const landing = document.getElementById("landing");
                  landing.scrollTo({
                    top: landing.clientHeight * 3,
                    behavior: "smooth",
                  });
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <BigSmallStatItem
                  label="Social sentiment index"
                  status={cityData["Urban Sentiment Index"]}
                  filled={true}
                />
              </div>
              ) : (
            <BigSmallStatItem
              label="Social sentiment index"
              status={cityData["Urban Sentiment Index"]}
              filled={true}
            />
            )}
            <BigSmallStatItem
              label="Natural risk exposure index"
              status={cityData["Natural Risk Exposure"]}
            />
            <div
              onClick={() => {
                const landing = document.getElementById("landing");
                landing.scrollTo({
                  top: landing.clientHeight * 4,
                  behavior: "smooth",
                });
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <BigSmallStatItem
                label="Transport resilience index"
                status={cityData["Transport Resilience Index"]}
                filled={true}
              />
            </div>
            {/*<BigSmallStatItem*/}
            {/*  label="Corporate resilience"*/}
            {/*  status={cityData["Corporate Resilience Index"]}*/}
            {/*/>*/}
          </div>
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

            <div>
              {(cityData.City === "Dubai" ||
                cityData.City === "Dar es Salaam" ||
                cityData.City === "Astana" ||
                cityData.City === "Lahore") && (
                  <Button
                    onClick={() => {
                      const landing = document.getElementById("landing");

                      landing.scrollTo({
                        top: landing.clientHeight * 5,
                        behavior: "smooth",
                      });
                    }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      bottom: "7vh",
                      backgroundColor: "transparent",
                      border: "1px solid #121212",
                      color: "#121212",
                      borderRadius: 50,
                      padding: "1vh 2.5vh",
                      textTransform: "none",
                      pointerEvents: "all",
                      cursor: "pointer",
                      fontSize: "1.7vh",
                      alignItems: "center",
                    }}
                  >
                    Geoanalytics
                  </Button>
                )}
              <div
                onClick={() => {
                  const landing = document.getElementById("landing");

                  landing.scrollTo({
                    top: landing.clientHeight,
                    behavior: "smooth",
                  });
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: "0vh",
                  pointerEvents: "all",
                  cursor: "pointer",
                  color: "#121212",
                  fontSize: "1.7vh",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2vh",
                  alignItems: "center",
                }}
              >
                <div>Scroll down</div>
                <img
                  src="/assets/arrowDown.svg"
                  alt="arrow down"
                  style={{
                    animation: "bounce 2s infinite",
                  }}
                />
              </div>
            </div>
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
        <div
          style={{
            position: "absolute",
            
            fontWeight: 400,
            fontSize: "1.4vh",
            color: "#121212",
            bottom: "18vh",
            right: "50%",
            transform: "translateX(65%)",
            width: "30%",
          }}
        >
          The height of a bar represents the total number of people in a grid
          cell.
        </div>
        {/*<ZoomButtons map={map} />*/}
      </Layout>
    </div>
  );
};

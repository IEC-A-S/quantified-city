import { useFirstSectionStyles } from "./components/styles";
import { Layout } from "./components/Layout";
import { CityName } from "./components/CityName";
import { BigStatItem } from "../../../GraphAndGlobe/components/BigStatItem";
import { SmallStatItem } from "../../../GraphAndGlobe/components/SmallStatItem";
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
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                const landing = document.getElementById("landing");
                landing.scrollTo({
                  top: landing.clientHeight * 2,
                  behavior: "smooth",
                });
              }}
            >
              <BigStatItem
                label="Urban resilience index"
                status={cityData["Urban Resilience Index"]}
                isFirst={true}
              />
            </div>
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
            <div
              className={classes.smallItemsListWrapper}
              style={{
                marginTop: "2.7vh",
              }}
            >
              {/*<SmallStatItem label="Current state" status={cityData["Current state"]} />*/}
              <SmallStatItem
                label="Ability & Willingness"
                status={cityData["Ability & Willingness"]}
                style={{ fontSize: "2.1vh" }}
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "27%",
              right: "9vh",
              display: "flex",
              flexDirection: "column",
              gap: "3.2vh",
              height: "43.5vh",
            }}
          >
            <div
              style={{
                fontFamily: "SuisseIntl-Light",
                fontWeight: 100,
                fontSize: "3vh",
                textAlign: "center",
              }}
            >
              Related indices
            </div>
            <div>
              <BigSmallStatItem
                isFirst={true}
                label="Basic needs index"
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
                      marginBottom: "5vh",
                      backgroundColor: "#3752BA",
                      color: "#fff",
                      borderRadius: 50,
                      padding: "1vh 2.5vh",
                      textTransform: "none",
                      pointerEvents: "all",
                      cursor: "pointer",
                      fontFamily: "SuisseIntl-Light",
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
                  pointerEvents: "all",
                  cursor: "pointer",
                  fontFamily: "SuisseIntl-Light",
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
        <div
          style={{
            position: "absolute",
            fontFamily: "SuisseIntl-Light",
            fontWeight: 100,
            fontSize: "1.4vh",
            color: "rgba(255, 255, 255, 0.4)",
            bottom: "22vh",
            right: "50%",
            transform: "translateX(65%)",
            width: "30%",
          }}
        >
          The height of a bar represents the total number of people in a grid
          cell.
        </div>
        <ZoomButtons map={map} />
      </Layout>
    </div>
  );
};

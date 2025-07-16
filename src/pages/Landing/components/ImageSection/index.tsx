import { useImageSectionStyles } from "./components/styles";
import type { FC } from "react";
import { Button, Typography } from "@mui/material";
import { StatusItem } from "./components/StatusItem";
import { Cirlce } from "./components/Circle";
import { ImageGallery } from "./components/ImageGallery";
import { useState } from "react";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";

interface IImageSection {
  setActiveSection(sectionIndex: number): void;
}

const imagesUrls = [
  "/assets/cityBg.png",
  "/assets/bg2.jpg",
  "/assets/bg3.jpg",
  "/assets/bg2.jpg",
  "/assets/bg2.jpg",
  "/assets/bg3.jpg",
];

export const ImageSection: FC<IImageSection> = ({ setActiveSection }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { classes } = useImageSectionStyles();

  const cityData = useSelectedCityData();
  //const climate = cityData["Climate"].replace(/,/g, "/");
  const climate = cityData["Climate"]

  const proverty =
    (
      cityData["Poverty headcount ratio at national poverty lines"] * 100
    ).toFixed(1) + "% ";

  const litercyRate =
    (cityData["Literacy rate among population"] * 100).toFixed(1) + "% ";

  const numberWithSpaces = (number: number | string) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ImageGallery
        imagesUrls={cityData.images}
        activeImageIndex={activeImageIndex}
      />
      <div className={classes.root}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0.5))",
          }}
        ></div>
        <div className={classes.contentWrapper}>
          <div className={classes.pageContainer}>
            <div
              style={{
                position: "absolute",
                top: "15vh",
                justifyContent: "center",
                width: "100%",
                margin: "0 auto",
                gap: "4vh",
                textAlign: "center",
                fontFamily: "SuisseIntl-Light",
                fontWeight: 300,
                lineHeight: "9vh",
                letterSpacing: "-0.5vh",
                fontSize: "8vh",
                color: "#fff",
              }}
            >
              {cityData.City} in Pictures and Numbers
            </div>
            <div
              style={{
                position: "absolute",
                top: "28vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                margin: "0 auto",
                gap: "4vh",
              }}
            >
              <StatusItem
                label={<div>Population in urban cluster </div>}
                // value={cityData["Population"]} // cityData["Population"] is 0.193 should be percentage like 19.3%
                value={numberWithSpaces(cityData["Population"])}
                status={cityData["Population description"]}
                color="#FF3B29"
              />
              <StatusItem
                label={<div>Population city proper</div>}
                // value={cityData["Population"]} // cityData["Population"] is 0.193 should be percentage like 19.3%
                value={numberWithSpaces(cityData["Population city proper"])}
                status={cityData["Population description"]}
                color="#FF3B29"
              />
              <StatusItem
                label={<div>Population density</div>}
                value={cityData["Population density"] + " people/ha"}
                status={cityData["Population density description"]}
                color="#FF3B29"
              />
              <StatusItem
                label={<div>Mean salary</div>}
                value={cityData["Mean salary"] + " PPP$"}
                status={cityData["Mean salary description"]}
                color="#FF3B29"
              />
              <StatusItem
                label={
                  <div>
                    Poverty headcount ratio <br /> at national poverty lines
                  </div>
                }
                value={proverty + "of population"}
                status={
                  cityData[
                  "Poverty headcount ratio at national poverty lines description"
                  ]
                }
                color="#A0DA8B"
              />
              <StatusItem
                label={
                  <div>
                    Literacy rate among <br />
                    population (15-24 Years)
                  </div>
                }
                value={litercyRate}
                status={cityData["Literacy rate among population description"]}
                color="#A0DA8B"
              />
              <StatusItem
                label={<div>Climate</div>}
                //value={cityData["Climate"]}
                value={climate}
                status={cityData["Climate description"]}
                color="#2D67FF"
              />
            </div>
            <div className={classes.bottomWrapper}>
              <div></div>
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "1.6vh",
                }}
              >
                {/*  Draw a circle*/}
                {cityData.images.map((url, index) => (
                  <Cirlce
                    key={index}
                    bgUrl={url}
                    onClick={() => {
                      setActiveImageIndex(index);
                    }}
                    isActive={activeImageIndex === index}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10vh",
                  fontSize: "1.7vh",
                  fontFamily: "SuisseIntl-Light",
                }}
              >
                <a>
                  <div
                    style={{
                      pointerEvents: "all",
                      // background: "#000",
                      color: "#fff",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Become our reporter
                    <br />
                    Suggest another image
                  </div>
                </a>
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
                    justifyContent: "center",
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
    </div>
  );
};

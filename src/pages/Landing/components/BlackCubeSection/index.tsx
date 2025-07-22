import { useState } from "react";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import { SmallStatItem } from "../../../GraphAndGlobe/components/SmallStatItem";
import { Button, Typography } from "@mui/material";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { NewCube } from "./components/NewCube";

export const BlackCubeSection = () => {
  const [hoveredSide, setHoveredSide] = useState<string | null>(null);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const { classes } = useImageSectionStyles();

  const cityData = useSelectedCityData();

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: "url(/assets/black_bg_cube.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={classes.root}>
        <NewCube />
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
                fontSize: "6.25vh",
                color: "#fff",
              }}
            >
              Urban <b>sentiment</b>
              <br />
              index
              <span
                style={{
                  paddingTop: "-1.5vh",
                  verticalAlign: "middle",
                  marginLeft: "1.2vh",
                  fontSize: "3vh",
                  fontWeight: 400,
                  marginTop: "1.45vh",
                  textAlign: "center",
                  padding: "1vh 3vh",
                  backgroundColor: "#FF632F",
                  color: "#fff",
                  borderRadius: 50,
                  width: "fit-content",
                }}
              >
                {cityData["Urban Sentiment Index"]}
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                top: "22vh",
                paddingLeft: "2vh",
                height: "auto",
                transform: "scale(1.2)",
              }}
            >
              <div className={classes.smallItemsListWrapper}>
                <SmallStatItem
                  label="Environmental"
                  status={cityData.Environmental}
                />
                <SmallStatItem label="Social" status={cityData.Social} />
                <SmallStatItem
                  label="Governmental"
                  status={cityData.Governmental}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "33%",
              lineHeight: "1.5",
              right: "5vh",
              width: "30vh",
              fontSize: "1.9vh",
            }}
          >
            <img
              src="/assets/infoIcon.svg"
              alt="info "
              style={{
                position: "absolute",
                left: "-4vh",
                width: "2.8vh",
              }}
            />
            Environmental
            <br />
            <br />
            Policy on treatment of drinking water sources: high average of pH
            concentration in water (8,5) and high toxins metrics, including
            modernisation of sewerage and construction of treatment plants,
            improvement of financial management. <br /> <br />
            Attracting investments of development institutions in water supply
            and sewage systems
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
              {/*<Button*/}
              {/*  style={{*/}
              {/*    pointerEvents: "all",*/}
              {/*    color: "#fff",*/}
              {/*    backgroundColor: "transparent",*/}
              {/*    border: "1px solid rgba(255, 255, 255, 0.3)",*/}
              {/*    borderRadius: 50,*/}
              {/*    padding: "1vh 2.5vh",*/}
              {/*    textTransform: "none",*/}
              {/*    */}
              {/*    fontSize: "1.7vh",*/}
              {/*    display: "flex",*/}
              {/*    flexDirection: "row",*/}
              {/*    gap: "1.2vh",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <div>Table view</div>*/}
              {/*</Button>*/}
              <Button
                style={{
                  pointerEvents: "all",
                  color: "#fff",
                  backgroundColor: "#2D67FF",
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
  );
};

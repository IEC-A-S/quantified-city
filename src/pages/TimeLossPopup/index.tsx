import { usePopupStyles } from "./components/styles";
import { FC, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { IndicatorChart } from "../GraphAndGlobe/components/IndicatorChart";
import triLine from "../../data/transport/TransportResiliensPopupData.json";
import { BoxPlot } from "./components/BoxPlot";

const yLabels = ["Very low", "Low", "Average", "Strong", "Very strong"];
const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface TimeLossPopupProps {
  city: string;
  isMobile?: boolean;
  onClose(): void;
}
export const TimeLossPopup: FC<TimeLossPopupProps> = ({
  city,
  isMobile,
  onClose,
}) => {
  const { classes } = usePopupStyles();

  const indicatorsDataByCurrentCityAndCategory = triLine.find(
    (cityData) => cityData.city === city
  )!.data;

  const [currentIndicator, setCurrentIndicator] = useState(0);

  const handleClickOnToggler = (direction: boolean) => {
    if (
      direction &&
      currentIndicator + 1 === indicatorsDataByCurrentCityAndCategory.length
    ) {
      setCurrentIndicator(0);
    } else if (direction) {
      setCurrentIndicator(currentIndicator + 1);
    } else if (!direction && currentIndicator - 1 < 0) {
      setCurrentIndicator(indicatorsDataByCurrentCityAndCategory.length - 1);
    } else {
      setCurrentIndicator(currentIndicator - 1);
    }
  };

  return (
    <div className={classes.backgroundWrapper}>
      <div
        onClick={() => {
          onClose();
          const landing = document.getElementById("landing");
          landing.scrollTo({
            top: landing.clientHeight * 3,
          });
        }}
        className={classes.returnBack}
      >
        <img
          className={classes.returnBackIcon}
          src="/assets/returnBackIcon.svg"
          alt="return back"
        />
        <Typography className={classes.returnBackText}>
          Back to Urban resilience index
        </Typography>
      </div>
      <div className={classes.content}>
        <div
          className={classes.blueSection}
          style={{
            backgroundColor: "#121212",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "4vh",
              left: "8vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "left",
              gap: "1vw",
              height: "5vh",
            }}
          >
            <img
              src="/assets/circle_arrow_transparent.svg"
              alt="arrow"
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => handleClickOnToggler(false)}
            />
            <img
              src="/assets/circle_arrow_transparent.svg"
              alt="arrow"
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                transform: "rotate(180deg)",
              }}
              onClick={() => handleClickOnToggler(true)}
            />
          </div>
          <Typography
            style={{
              position: "absolute",
              top: "5vh",
              left: "12vw",
              
              fontSize: "2vh",
              color: "#fff",
              alignSelf: "center",
            }}
          >
            {/*Browse indicators for the category*/}
          </Typography>
          <div
            style={{
              position: "absolute",
              top: "10vh",
              left: "8vh",
            }}
          >
            <div className={classes.title} style={{ fontSize: "6vh" }}>
              {
                indicatorsDataByCurrentCityAndCategory[currentIndicator]
                  .indicator
              }
              <br />
              <span
                style={{
                  fontSize: "3vh",
                  
                  letterSpacing: "0",
                }}
              >
                {indicatorsDataByCurrentCityAndCategory[currentIndicator].unit}
              </span>
            </div>
          </div>
          {currentIndicator === 0 ? (
            <BoxPlot city={city} isMobile={false} />
          ) : (
            <IndicatorChart
              indicatorDataByCitiesArr={triLine}
              currentCity={city}
              category={"Transport"}
              indicator={
                indicatorsDataByCurrentCityAndCategory[currentIndicator]
                  .indicator
              }
              yLabels={yLabels}
              yColors={yColors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

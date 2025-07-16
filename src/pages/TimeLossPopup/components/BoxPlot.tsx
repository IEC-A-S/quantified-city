import { Button, Typography } from "@mui/material";
import { TimeLossInTrafficChart } from "../../GraphAndGlobe/components/TimeLossInTrafficChart";
import timeLossInTrafficData from "../../../data/transport/timeLossInTrafficData.json";
import timeLossInTrafficStatuses from "../../../data/transport/TransportResiliensPopupData.json";
import { usePopupStyles } from "../../BlueCubePopup/components/styles";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { CITY_DATA } from "../../../data";
import type { FC } from "react";

interface IBoxPlotProps {
  city: string;
  isMobile?: boolean;
}

export const BoxPlot: FC<IBoxPlotProps> = ({ city, isMobile }) => {
  const { classes } = usePopupStyles();
  const cityData = useSelectedCityData();

  const statusChangeNumberToString = (status: number) => {
    switch (status) {
      case 1:
        return "Very low";
      case 2:
        return "Low";
      case 3:
        return "Average";
      case 4:
        return "Strong";
      case 5:
        return "Very strong";
      default:
        throw new Error("Invalid status index");
    }
  }

  const statuses = timeLossInTrafficStatuses.map((item) => ({
    city: item.city,
    status: statusChangeNumberToString(item.data[0].value)
  }));
  // const statuses = CITY_DATA.map((item) => ({
  //   city: item.City,
  //   status: item["Transport Resilience Index"],
  // }));

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "#000",
        padding: "8vh",
        paddingTop: "25vh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        className={classes.title}
        style={{
          color: "#fff",
          fontSize: "6vh",
          lineHeight: "9vh",
          letterSpacing: "-0.2vh",
        }}
      >
        {/*{city}: Time loss in traffic <br />*/}
      </Typography>
      <div
        className="chart"
        style={{
          boxSizing: "border-box",
        }}
      >
        <TimeLossInTrafficChart
          isMobile={isMobile}
          dataArr={timeLossInTrafficData}
          currentCity={city}
          statuses={statuses}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <img
          src="assets/timeLossInTrafficLegend.svg"
          style={{
            width: "60vw",
          }}
        />
        <Button
          onClick={() => {}}
          // onClick={() => {
          //   const fileName = cityData.pdfName;
          //   const link = document.createElement("a");
          //   link.href = `/pdf/${fileName}`;
          //   link.download = fileName;
          //   link.click();
          // }}
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
            width: "fit-content",
            minWidth: "fit-content",
            gap: "1.2vh",
          }}
        >
          <div
            style={{
              textTransform: "none",
              // no word wrap
              whiteSpace: "nowrap",
            }}
          >
            Download report
          </div>
          <img src="/assets/downloadIcon.svg" alt="arrow down" />
        </Button>
      </div>
    </div>
  );
};

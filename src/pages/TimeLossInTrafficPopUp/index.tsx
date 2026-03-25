import type { FC } from "react";
import timeLossInTrafficData from "../../data/transport/timeLossInTrafficData.json";
import timeLossInTrafficStatuses from "../../data/transport/TransportResiliensPopupData.json";
import { Button, Typography } from "@mui/material";
import { usePopupStyles } from "../BlueCubePopup/components/styles";
import { useSelectedCityData } from "../../hooks/useSelectedCityData";
import { TimeLossInTrafficChart } from "../GraphAndGlobe/components/TimeLossInTrafficChart";
import { CITY_DATA } from "../../data";
import { sizing } from "@mui/system";
import { SCORE_TO_RU_ASSESSMENT } from "../../utils/assessment";

interface ITimeLossInTrafficPopUpProps {
  city: string;
  isMobile?: boolean;
  onClose(): void;
}


export const TimeLossInTrafficPopUp: FC<ITimeLossInTrafficPopUpProps> = ({
  city,
  isMobile,
  onClose,
}) => {
  const statusChangeNumberToString = (status: number) => {
    const assessment = SCORE_TO_RU_ASSESSMENT[status];

    if (!assessment) {
      throw new Error("Invalid status index");
    }

    return assessment;
  };

  const { classes } = usePopupStyles();
  const cityData = useSelectedCityData();
  const statuses = timeLossInTrafficStatuses.map((item) => ({
    city: item.city,
    status: statusChangeNumberToString(item.data[0].value),
  }));

  return (
    <div className={classes.backgroundWrapper}>
      <div className={classes.returnBack} onClick={onClose}>
        <img
          className={classes.returnBackIcon}
          src="/assets/returnBackIcon.svg"
          alt="return back"
        />
        <Typography className={classes.returnBackText}>
          Назад
        </Typography>
      </div>
      <div className={classes.content}>
        <div
          className={classes.blueSection}
          style={{
            backgroundColor: "#000",
            padding: "8vh",
            paddingTop: "4vh",
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
            {city}: Потери времени в пробках <br />
            <span style={{
              color: "#fff",
              
              fontSize: "3vh",
              lineHeight: "4vh",
              letterSpacing: "0",
            }}>Сравнение с сопоставимыми городами</span>
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
            <img src="assets/timeLossInTrafficLegend.svg" style={{
              width: "60vw"
            }} />
            <Button
              onClick={() => { }}
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
                Скачать отчет
              </div>
              <img src="/assets/downloadIcon.svg" alt="arrow down" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

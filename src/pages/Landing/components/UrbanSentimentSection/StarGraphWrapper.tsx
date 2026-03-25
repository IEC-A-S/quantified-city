import { Button, Typography, styled } from "@mui/material";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import type { ReactNode, FC } from "react";
import { useState } from "react";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { getCityId } from "../../../../constants";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "30vw",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

interface StarGraphWrapperProps {
  children: ReactNode;
  setSentimentPopupOpen: (open: boolean) => void;
}

export const StarGraphWrapper: FC<StarGraphWrapperProps> = ({
  children,
  setSentimentPopupOpen,
}) => {
  const { classes } = useImageSectionStyles();
  const selectedCityData = useSelectedCityData();
  const [hintHovered, setHintHovered] = useState(false);
  const cityId = getCityId(selectedCityData?.City);

  const hideExploreTopics =
    cityId === "Mexico City" ||
    cityId === "Panama City" ||
    cityId === "Cape Town" ||
    cityId === "Amman" ||
    cityId === "Colombo" ||
    cityId === "Bangkok" ||
    cityId === "Jakarta" ||
    cityId === "Astana" ||
    cityId === "Lahore" ||
    cityId === "Nairobi";

  void HtmlTooltip;
  void hintHovered;
  void setHintHovered;

  return (
    <div className={classes.contentWrapper}>
      <div
        style={{
          position: "absolute",
          top: "15.5%",
          left: "0vh",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            fontSize: "5vh",
            color: "#121212",
          }}
        >
          {selectedCityData?.City}: <br />
          <span
            style={{
              color: "#00C8B5",
            }}
          >
            Индекс социальных настроений
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5vh",
            marginTop: "30vh",
          }}
        >
          {children}
        </div>
      </div>
      <Typography
        style={{
          position: "absolute",
          top: "35vh",
          left: "0vh",
          width: "20vw",
          color: "#121212",
          fontSize: "1.8vh",
        }}
      >
        График показывает восприятие разных тем жителями и посетителями.
        Чем дальше вершины фигуры от центра диаграммы, тем лучше
        воспринимается соответствующая тема в городе. Чем больше площадь
        фигуры, тем выше общее восприятие устойчивости города.
      </Typography>
      <div className={classes.pageContainer}>
        <div className={classes.bottomWrapper}>
          <div className={classes.smallTextWrapper}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2vh",
              marginTop: "1vh",
            }}
          >
            <Button
              onClick={() => {
                setSentimentPopupOpen(true);
              }}
              style={{
                pointerEvents: "all",
                color: "#121212",
                backgroundColor: "transparent",
                border: "1px solid #121212",
                borderRadius: 50,
                padding: "1vh 2.5vh",
                textTransform: "none",
                fontSize: "1.7vh",
                fontWeight: 400,
                display: hideExploreTopics ? "none" : "flex",
                flexDirection: "row",
                gap: "1.2vh",
                zIndex: 2,
              }}
            >
              <div>Изучить темы</div>
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
                const fileName = selectedCityData.pdfName;
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
  );
};

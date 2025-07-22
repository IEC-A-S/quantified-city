import { Button, Grid, styled } from "@mui/material";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { Colors } from "../../../GraphAndGlobe/components/SmallStatItem";
import { Typography } from "@mui/material";
import type { ReactNode } from "react";
import { useState } from "react";
import type { FC } from "react";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";

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

  const hideExploreTopics =
    selectedCityData?.City === "Mexico City" ||
    selectedCityData?.City === "Panama City" ||
    selectedCityData?.City === "Cape Town" ||
    selectedCityData?.City === "Amman" ||
    selectedCityData?.City === "Colombo" ||
    selectedCityData?.City === "Bangkok" ||
    selectedCityData?.City === "Jakarta" ||
    selectedCityData?.City === "Astana" ||
    selectedCityData?.City === "Lahore" ||
    selectedCityData?.City === "Nairobi";

  const hintHeader = 5;
  const hintText = 7;

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
            // fontSize: "48px",
            color: "#121212",
          }}
        >
          {selectedCityData?.City}: <br />
          <span style={{
            color: "#00C8B5"
          }}>Social Sentiment </span>
          Index
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
        The graph highlights the perception of different topics by citizens and
        visitors. The further the vertices of the shape are from the center of
        the diagram, the better the topic perception is in the city. The larger
        the area of the shape, the higher the overall perception of city's
        resilience.
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
                // filter: "invert(1)",
                zIndex: 2,
              }}
            >
              <div>Explore topics</div>
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
              <div>Download report</div>
              <img src="/assets/downloadIcon.svg" alt="arrow down" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

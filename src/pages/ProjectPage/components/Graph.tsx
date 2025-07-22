import { FC, React, useState } from "react";
import { useGraphStyles } from "../styles";
import { Typography } from "@mui/material";
import { Title } from "./UI/Title";
import { styled } from "@mui/material/styles";
import { Button } from "./UI/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

interface GraphProps {
  city: string;
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "rgba(0, 0, 0, 0)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}));

export const Graph: FC<GraphProps> = ({ city }) => {
  const { classes } = useGraphStyles();

  let svgURL = "";
  switch (city) {
    case "Almaty":
      svgURL = "/assets/pm_schemes/Almaty.svg";
      break;
    case "Dar es Salaam":
      svgURL = "/assets/pm_schemes/Dar_es_Salaam.svg";
      break;
    default:
      svgURL = "/assets/pm_schemes/Almaty.svg";
      break;
  }

  const [toolTipData, setToolTipData] = useState({ city: "", category: "" } as {
    city: string;
    category: string;
  });

  const mouseOverHandler = (city: string, category: string) => {
    // console.log(city, category)
    setToolTipData({ city, category });
  };

  return (
    <div className={classes.root}>
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          
          fontWeight: 400,
          fontSize: "8vh",
          lineHeight: "9vh",
          color: "#fff",
          margin: "0",
        }}
      >
        Project impact
      </div>
      <div className={classes.svgBox}>
        <img src={svgURL} className={classes.svg} alt="project impact" />
        {city === "Almaty" ? (
          <>
            <HtmlTooltip
              title={
                <>
                  <img
                    src="/assets/tooltip/SME.svg"
                    alt="SME data"
                    className={classes.toolTip}
                  />
                </>
              }
            >
              <div
                style={{
                  position: "absolute",
                  width: "4.4vh",
                  height: "4.4vh",
                  top: "42.2vh",
                  right: "47.4vh",
                  borderRadius: "50%",
                }}
              ></div>
            </HtmlTooltip>
            <HtmlTooltip
              title={
                <>
                  <img
                    src="/assets/tooltip/Inclusion.svg"
                    alt="Inclusion data"
                    className={classes.toolTip}
                  />
                </>
              }
            >
              <div
                style={{
                  position: "absolute",
                  width: "5vh",
                  height: "5vh",
                  left: "45.9vh",
                  borderRadius: "50%",
                  top: "42.3vh",
                }}
              ></div>
            </HtmlTooltip>
          </>
        ) : (
          <>
            <HtmlTooltip
              title={
                <>
                  <img
                    src="/assets/tooltip/Water_availability.svg"
                    alt="Water_availability data"
                    className={classes.toolTip}
                  />
                </>
              }
            >
              <div
                style={{
                  position: "absolute",
                  width: "5vh",
                  height: "5vh",
                  top: "37.5vh",
                  right: "47.5vh",
                  borderRadius: "50%",
                }}
              ></div>
            </HtmlTooltip>
            <HtmlTooltip
              title={
                <>
                  <img
                    src="/assets/tooltip/Water_pollution.svg"
                    alt="Water_pollution data"
                    className={classes.toolTip}
                  />
                </>
              }
            >
              <div
                style={{
                  position: "absolute",
                  width: "6vh",
                  height: "6vh",
                  left: "45.5vh",
                  borderRadius: "50%",
                  top: "37.5vh",
                }}
              ></div>
            </HtmlTooltip>
          </>
        )}
      </div>
      <Button
        title="Add project to Portfolio"
        variant="icon"
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
          
          fontWeight: 400,
          fontSize: "8vh",
          lineHeight: "9vh",
          color: "#fff",
          margin: "0",
        }}
      />
    </div>
  );
};

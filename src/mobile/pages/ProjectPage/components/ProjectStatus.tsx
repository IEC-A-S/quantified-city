//props Status, Resilience impact, Direct impact, Indirect impact
import React from "react";
import { Typography } from "@mui/material";
import { useConetnsStyles } from "../styles";
import { RaitingBubble } from "./UI/RatingBubble";
import { getAssessmentColor } from "../../../../utils/assessment";

interface IRatingBubleObject {
  title: string;
  value?: string;
}

interface ProjectStatusProps {
  status: IRatingBubleObject;
  resilienceImpact: string;
  directImpact: IRatingBubleObject[];
  indirectImpact: IRatingBubleObject[];
}

export const ProjectStatus: React.FC<ProjectStatusProps> = ({
  status,
  resilienceImpact,
  directImpact,
  indirectImpact,
}) => {
  const { classes } = useConetnsStyles();

  const bubbleColor = getAssessmentColor(resilienceImpact);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        paddingTop: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div className={classes.statusRow}>
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Status
          </Typography>
          <RaitingBubble title={status.title} value={status.value} />
        </div>
        <div className={classes.statusRow}>
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Resilience impact
          </Typography>
          <RaitingBubble
            title={resilienceImpact}
            style={{
              borderColor: bubbleColor,
              color: bubbleColor,
            }}
          />
        </div>
        <div className={classes.statusRow}>
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Direct impact
          </Typography>
          {directImpact.map((item, index) => (
            <RaitingBubble key={index} title={item.title} value={item.value} />
          ))}
        </div>
        <div className={classes.statusRow}>
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Indirect impact
          </Typography>
          {indirectImpact.map((item, index) => (
            <RaitingBubble key={index} title={item.title} value={item.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

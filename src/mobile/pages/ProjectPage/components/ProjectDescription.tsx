import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useConetnsStyles } from "../styles";

interface ProjectDescriptionProps {
  parametrs: string;
  investment: string | number;
  newJobs: string | number;
  startYear: string | number;
  contractType: string;
}

export const ProjectDescription: FC<ProjectDescriptionProps> = ({
  parametrs,
  investment,
  newJobs,
  startYear,
  contractType,
}) => {
  const { classes } = useConetnsStyles();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingTop: "64px",
          paddingLeft: "16px",
          paddingRight: "16px",
          textAlign: "right",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Parameters
          </Typography>
          <Typography variant={"h3"} style={{ color: "#000" }}>
            {parametrs}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Investment, $USD M
          </Typography>
          <Typography variant={"h3"} style={{ color: "#000" }}>
            {investment}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            New jobs
          </Typography>
          <Typography variant={"h3"} style={{ color: "#000" }}>
            {newJobs}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Start, year
          </Typography>
          <Typography variant={"h3"} style={{ color: "#000" }}>
            {startYear}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            Contract type
          </Typography>
          <Typography variant={"h3"} style={{ color: "#000" }}>
            {contractType}
          </Typography>
        </div>
      </div>
    </div>
  );
};

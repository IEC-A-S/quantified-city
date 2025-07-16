import type { FC, React } from "react";
import { Typography } from "@mui/material";
import { useConetnsStyles } from "../styles";
import { Title } from "./UI/Title";
import { ProjectImage } from "./UI/ProjectImage";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectStatus } from "./ProjectStatus";
import { Line } from "./UI/Line";
import { ContentRow } from "./ContentRow";
import { RaitingBubble } from "./UI/RatingBubble";
import { PROJECTS_INFO } from "../data/data";

interface ContentProps {
  projectID: string;
}

const Content: React.FC<ContentProps> = ({ projectID }) => {
  let projectData = PROJECTS_INFO[0];

  if (projectID === "8") {
    projectData = PROJECTS_INFO[0];
  } else if (projectID === "15") {
    projectData = PROJECTS_INFO[1];
  }

  let implementationStatus;
  switch (projectData.Status) {
    case "Suspended":
      implementationStatus = "Very low";
      break;
    case "Planning":
      implementationStatus = "Low";
      break;
    case "Implementation":
      implementationStatus = "Average";
      break;
    case "Completed":
      implementationStatus = "Very strong";
      break;
    default:
      implementationStatus = "Very low";
      break;
  }

  const directImpact = projectData.Direct_Impact.split(", ").map((item) => {
    return { title: item };
  });
  const indirectImpact = projectData.Indirect_Impact.split(", ").map((item) => {
    return { title: item };
  });

  const { classes } = useConetnsStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          paddingLeft: "16px",
          paddingRight: "16px",
          boxSizing: "border-box",
        }}
      >
        <ProjectImage
          imageURL={projectData.url}
          style={{
            flex: 5,
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography
          variant={"h2"}
          style={{
            fontFamily: "SuisseIntl-Regular",
            color: "#000",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#2D67FF",
            }}
          >
            {projectData.Project}
          </span>
          {projectData.TitleBlue}
        </Typography>
        <Typography
          variant={"h3"}
          style={{
            fontFamily: "SuisseIntl-Light",
            color: "#000",
            textAlign: "center",
          }}
        >
          {projectData.Country}{" "}
          <span
            style={{
              fontFamily: "SuisseIntl-Light",
              color: "#DADADA",
            }}
          >
            / {projectData.City}
          </span>
        </Typography>
      </div>
      <div
        style={{
          paddingBottom: "16px",
        }}
      >
        <ProjectStatus
          status={{
            title: projectData.Status,
            value: implementationStatus,
          }}
          resilienceImpact={projectData.Resilience_Impact}
          directImpact={directImpact}
          indirectImpact={indirectImpact}
        />
        <ProjectDescription
          parametrs={projectData.Parametres}
          investment={projectData.Investment}
          newJobs={projectData.New_Jobs}
          startYear={projectData.Start_Date}
          contractType={projectData.Contract_type}
        />
      </div>
      <Line />
      <ContentRow name="Initiator">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "right",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant={"h3"}
            style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
          >
            {projectData.Initiator}
          </Typography>
          <RaitingBubble
            title="Contact initiator"
            style={{
              color: "#ffffff",
              backgroundColor: "#000000",
              width: "fit-content",
              padding: "1.2vh 3vh",
            }}
          />
        </div>
      </ContentRow>
      <ContentRow name="Financial partners">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "right",
            alignItems: "flex-end",
          }}
        >
          {projectData.Financial_Partners.split(", ").map((item) => {
            return (
              <div className={classes.textWrapper} style={{ maxWidth: "100%" }}>
                <Typography
                  variant={"h3"}
                  style={{ fontFamily: "SuisseIntl-Regular", color: "#000" }}
                >
                  {item}
                </Typography>
                {/* <a href="https://google.com" target='_blank'>
                                        <img src="/assets/projects_link_icon.svg" className={classes.link} />
                                    </a> */}
              </div>
            );
          })}
        </div>
      </ContentRow>
      <Line />
      <ContentRow name="Participation options">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "2vh",
            flexWrap: "wrap",
            maxWidth: "50vw",
          }}
        >
          {projectData.Participation_options.split(", ").map((item) => {
            return (
              <RaitingBubble
                title={item}
                style={{
                  color: "#000000",
                  border: "1px solid #000000",
                  backgroundColor: "#FFFFFF",
                  width: "fit-content",
                  padding: "1.2vh 3vh",
                }}
              />
            );
          })}
        </div>
      </ContentRow>
      <ContentRow name="Project description">
        <div
          className={classes.textWrapper}
          style={{
            flexDirection: "column",
            maxWidth: "100%",
            gap: "4vh",
          }}
        >
          <Typography
            variant={"h3"}
            style={{
              fontFamily: "SuisseIntl-Regular",
              color: "#000",
              textAlign: "right",
            }}
          >
            {projectData.Desciption}
          </Typography>
        </div>
      </ContentRow>
      <RaitingBubble
        title="Download project"
        style={{
          color: "#ffffff",
          backgroundColor: "#000000",
          width: "fit-content",
          padding: "1.2vh 3vh",
          display: "flex",
          alignSelf: "center",
        }}
      >
        <img
          src="/assets/projects_download_icon.svg"
          style={{
            width: "2vh",
            height: "2vh",
            marginLeft: "1vh",
          }}
        />
      </RaitingBubble>
      <div style={{ height: "1vh" }}></div>
    </div>
  );
};

export default Content;

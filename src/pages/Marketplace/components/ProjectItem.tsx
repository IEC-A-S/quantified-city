import type { FC } from "react";
import { useMarketplaceStyles } from "./styles";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Colors } from "../../GraphAndGlobe/components/SmallStatItem";
import { useNavigate } from "react-router-dom";

enum RESILIENCE_IMPACT_ENUM {
  VERY_LOW = "Very Low",
  LOW = "Low",
  AVERAGE = "Average",
  STRONG = "Strong",
  VERY_STRONG = "Very Strong",
}

const colorMatch = {
  [RESILIENCE_IMPACT_ENUM.VERY_LOW]: Colors.VERY_LOW,
  [RESILIENCE_IMPACT_ENUM.LOW]: Colors.LOW,
  [RESILIENCE_IMPACT_ENUM.AVERAGE]: Colors.AVERAGE,
  [RESILIENCE_IMPACT_ENUM.STRONG]: Colors.STRONG,
  [RESILIENCE_IMPACT_ENUM.VERY_STRONG]: Colors.VERY_STRONG,
};

const statusMatch = {
  Suspended: Colors.VERY_LOW,
  Planning: Colors.LOW,
  Implementation: Colors.AVERAGE,
  Completed: Colors.VERY_STRONG,
};

export interface IProject {
  id: number;
  Country: string;
  City: string;
  Category: string;
  "Searching for": string;
  "Status for": string;
  Status: string;
  Project: string;
  Description: string;
  "Resilience Impact": RESILIENCE_IMPACT_ENUM;
  url: string;
}

interface ProjectItemProps {
  project: IProject;
  isLiked?: boolean;
  setLikedProjects: (projects: IProject[]) => void;
}

export const ProjectItem: FC<ProjectItemProps> = ({
  project,
  isLiked,
  setLikedProjects,
}) => {
  const { classes } = useMarketplaceStyles();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const handleLike = () => {
    setLiked(!liked);
    setLikedProjects((prev) => {
      if (liked) {
        return prev.filter((p) => p.id !== project.id);
      } else {
        return [...prev, project];
      }
    });
    const projects = localStorage.getItem("grp:likedProjects");
    // check if project is already liked
    if (projects) {
      const parsedProjects = JSON.parse(projects);
      if (liked) {
        const filteredProjects = parsedProjects.filter(
          (p: IProject) => p.id !== project.id
        );
        localStorage.setItem(
          "grp:likedProjects",
          JSON.stringify(filteredProjects)
        );
      } else {
        localStorage.setItem(
          "grp:likedProjects",
          JSON.stringify([...parsedProjects, project])
        );
      }
    } else {
      localStorage.setItem("grp:likedProjects", JSON.stringify([project]));
    }
  };

  return (
    <div
      className={classes.projectItem}
      style={{
        opacity: project.id == 8 || project.id == 15 ? 1 : 0.6,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "1.2vh",
          top: "1.2vh",
          backgroundColor: "#fff",
          padding: "0.5vh 1vh 0.5vh 1vh",
          borderRadius: "2vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5vh",
          
          fontWeight: 600,
          fontSize: "1.4vh",
        }}
      >
        {project.Status}
        <div
          style={{
            width: "1.2vh",
            height: "1.2vh",
            borderRadius: "50%",
            backgroundColor:
              statusMatch[project.Status as keyof typeof statusMatch],
          }}
        ></div>
      </div>
      <div
        className={classes.projectImageWrapper}
        style={{
          backgroundImage: `url(${project.url})`,
        }}
      ></div>
      <div className={classes.projectInfoWrapper}>
        <div
          style={{
            
            fontWeight: 600,
            fontSize: "1.4vh",
            marginTop: "2vh",
          }}
        >
          {project.City}, {project.Country}
        </div>
        <div
          className={classes.projectTitle}
          onClick={() => {
            if (project.id == 8 || project.id == 15) {
              navigate(`/project_page/${project.id}`);
            }
          }}
        >
          {project.Project}{" "}
          <img src={"/assets/arrowRightIcon.svg"} alt="arrowRightIcon" />
        </div>
        <div className={classes.projectSubTitle}>{project.Description}</div>
        {/*<div className={classes.projectStatsWrapper}>*/}
        {/*  <div className={classes.impactLabel}>Impact</div>*/}
        {/*  <div*/}
        {/*    className={classes.statItem}*/}
        {/*    style={{*/}
        {/*      color: colorMatch[project["Resilience Impact"]],*/}
        {/*      borderColor: `${colorMatch[project["Resilience Impact"]]}30`,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    {project["Resilience Impact"]}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          height: "10vh",
        }}
      >
        <Button
          onClick={handleLike}
          className={classes.likeBtn}
          style={{
            marginBottom: "2vh",
          }}
        >
          <img
            src={liked ? "/assets/likeIconFill.svg" : "/assets/likeIcon.svg"}
            alt="likeIcon"
            style={{
              width: "1.8vh",
              height: "1.8vh",
            }}
          />
          Add to Portfolio
        </Button>
        <div
          className={classes.projectStatsWrapper}
          style={{
            marginBottom: "2vh",
          }}
        >
          <div className={classes.impactLabel}>Impact</div>
          <div
            className={classes.statItem}
            style={{
              color: colorMatch[project["Resilience Impact"]],
              borderColor: `${colorMatch[project["Resilience Impact"]]}30`,
            }}
          >
            {project["Resilience Impact"]}
          </div>
        </div>
      </div>
    </div>
  );
};

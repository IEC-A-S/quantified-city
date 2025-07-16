import type { FC, React } from "react";
import { useProjectPageStyles } from "./styles";
import { Header } from "./components/Header";
import Content from "./components/Content";
import { useEffect, useState } from "react";
import { MainMenu } from "../../components/MainMenu";
import { useParams } from "react-router-dom";
import { Graph } from "./components/Graph";

export const ProjectPage = () => {
  //take project id from url
  // const projectID = window.location.pathname.split("/")[2];
  const { projectID } = useParams();

  const [menuVisible, setMenuVisible] = useState(false);

  const { classes } = useProjectPageStyles();

  let city = "Almaty";
  if (projectID === "8") {
    city = "Almaty"
  } else if (projectID === "15") {
    city = "Dar es Salaam"
  }

  return (
    <>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <div className={classes.root}>
        <Header invertColors={true} setMenuVisible={setMenuVisible} />
        <Content projectID={projectID} />
        <Graph city={city} />
      </div>
    </>
  );
};

export default ProjectPage;

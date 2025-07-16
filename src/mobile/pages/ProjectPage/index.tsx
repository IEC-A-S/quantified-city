import type { React } from "react";
import { useProjectPageStyles } from "./styles";
import Content from "./components/Content";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Graph } from "./components/Graph";
import { Header } from "../../components/Header";
import { MainMenu } from "../../../components/MainMenu";

export const ProjectPage = () => {
  //take project id from url
  // const projectID = window.location.pathname.split("/")[2];
  const { projectID } = useParams();

  const [menuVisible, setMenuVisible] = useState(false);

  const { classes } = useProjectPageStyles();

  let city = "Almaty";
  if (projectID === "8") {
    city = "Almaty";
  } else if (projectID === "15") {
    city = "Dar es Salaam";
  }

  return (
    <>
      {menuVisible && <MainMenu setVisible={setMenuVisible} isMobile={true} />}
      <div className={classes.root}>
        <div
          style={{
            filter: "invert(1)",
            padding: "16px",
            paddingBottom: "0px",
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#000",
          }}
        >
          <Header setMenuVisible={setMenuVisible} />
        </div>
        <Content projectID={projectID} />
        <Graph city={city} />
      </div>
    </>
  );
};

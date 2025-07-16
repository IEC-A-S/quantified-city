import { ReactNode, useState } from "react";
import { MainMenu } from "../../components/MainMenu";
import { Header } from "../Landing/components/Header";
import { useMainPageStyles } from "./components/styles";
import { Title } from "./components/Title";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { classes } = useMainPageStyles();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={classes.root}>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <Header
        setMenuVisible={setMenuVisible}
        displayBackButton={true}
        marginLogo="15vh"
      />
      <Title />
      <div className={classes.content}>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

interface LeftSectionTexts {
  first: ReactNode;
  second: ReactNode;
  third: ReactNode;
}

const leftSectionTexts = {
  title: (
    <>
      <b>Ratings & monitoring</b>
      <br /> tool for cities and <br /> corporates
    </>
  ),
  first: (
    <div>
      Reimagining ESG <br />
      metrics through the <br /> lens of Resilience
    </div>
  ),
  second: (
    <div>
      Focusing on basic <br /> needs satisfaction <br /> and human’s dignity
    </div>
  ),
  third: (
    <div>
      Introducing <br />
      transparent <br />
      methodology & AI-
      <br />
      driven data handling
    </div>
  ),
};

const LeftSection = () => {
  const { classes } = useMainPageStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.sectionTitle}>{leftSectionTexts.title}</div>
      <div className={classes.smallTextGroupWrapper}>
        <div className={classes.smallTextWrapper}>
          <CirclePoint />
          {leftSectionTexts.first}
        </div>
        <div className={classes.smallTextWrapper}>
          <CirclePoint />
          {leftSectionTexts.second}
        </div>
        <div className={classes.smallTextWrapper}>
          <CirclePoint />
          {leftSectionTexts.third}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2vh",
          marginTop: "5vh",
        }}
      >
        <Button
          className={classes.whiteButton}
          onClick={() => navigate("/urban")}
        >
          Urban
          <img
            src={"assets/arrowRightIcon.svg"}
            alt="arrowRightIcon"
            style={{
              width: "2.5vh",
              height: "2.5vh",
            }}
          />
        </Button>
        <Button
          className={classes.whiteButton}
          disabled={true}
          style={{
            opacity: 0.5,
          }}
        >
          Corporate
          <img
            src={"assets/arrowRightIcon.svg"}
            alt="arrowRightIcon"
            style={{
              width: "2.5vh",
              height: "2.5vh",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

const rightSectionTexts = {
  title: (
    <>
      Projects <br />
      <b>marketplace</b>
    </>
  ),
  first: (
    <div>
      Evaluating the <br /> resilience impact of <br />
      investment projects
    </div>
  ),
  second: (
    <div>
      Promoting the better <br /> impact investment <br /> opportunities
    </div>
  ),
  third: (
    <div>
      Bridging the gap between <br /> impact investment <br /> demand and supply
    </div>
  ),
};

const RightSection = () => {
  const { classes } = useMainPageStyles();
  const navigate = useNavigate();

  return (
    <div
      className={classes.sectionWrapper}
      style={{
        paddingLeft: 0,
      }}
    >
      <div
        className={classes.sectionTitle}
        style={{
          marginTop: "5vh",
        }}
      >
        {rightSectionTexts.title}
      </div>
      <div className={classes.smallTextGroupWrapper}>
        <div className={classes.smallTextWrapper}>
          <CirclePoint />
          {rightSectionTexts.first}
        </div>
        <div className={classes.smallTextWrapper}>
          <CirclePoint />
          {rightSectionTexts.second}
        </div>
        <div className={classes.smallTextWrapper}>
          <CirclePoint />
          {rightSectionTexts.third}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2vh",
          marginTop: "7.5vh",
        }}
      >
        <Button
          className={classes.whiteButton}
          onClick={() => navigate("/marketplace")}
        >
          Project marketplace
          <img
            src={"assets/arrowRightIcon.svg"}
            alt="arrowRightIcon"
            style={{
              width: "2.5vh",
              height: "2.5vh",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export const CirclePoint = () => {
  return (
    <div
      style={{
        width: "1vh",
        height: "1vh",
        backgroundColor: "#fff",
        borderRadius: "50%",
      }}
    ></div>
  );
};

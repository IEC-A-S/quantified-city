import { MainMenu } from "../../../components/MainMenu";
import { useState } from "react";
import { Header } from "../../components/Header";
import { makeStyles } from "tss-react/mui";
import { Typography } from "@mui/material";
import { FirstSection } from "./FirstSection";
import { SecondSection } from "./SecondSection";

export const useMainPageStyles = makeStyles()({
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    backgroundColor: "rgba(21, 52, 175, 1)",
    overflow: "scroll",
  },
  statusColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },
  statusRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "32px",
    alignItems: "center",
    flexWrap: "wrap",
  },
});
export const MainPage = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const { classes } = useMainPageStyles();
  const [invertColors, setInvertColors] = useState(false);

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} isMobile={true} />}
      <div className={classes.root} id="landing">
        <div
          style={{
            height: "fit-content",
            padding: "16px",
            position: "sticky",
            top: "0",
            zIndex: 10,
          }}
        >
          <div
            style={{
              filter: invertColors ? "invert(1)" : "invert(0)",
            }}
          >
            <Header setMenuVisible={setMenuVisible} />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "fit-content",
            top: "0",
          }}
        >
          <FirstSection />
          <SecondSection />
        </div>
      </div>
    </div>
  );
};

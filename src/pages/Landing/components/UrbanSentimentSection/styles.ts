import { makeStyles } from "tss-react/mui";

export const useLandingStyles = makeStyles()({
  root: {
    position: "absolute",
    overflowY: "scroll",
    backgroundColor: "#203CBF",
    width: "100vw",
    height: "100vh",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
  },
  sectionWrapper: {
    position: "relative",
    height: "100%",
    width: "100%",
  },
  sticky: {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

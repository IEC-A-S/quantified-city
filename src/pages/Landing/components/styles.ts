import { makeStyles } from "tss-react/mui";

export const useLandingStyles = makeStyles()({
  root: {
    fontFamily: "Roboto, sans-serif !important",
    position: "absolute",
    overflowY: "scroll",
    backgroundColor: "#F0EAD6",
    width: "100vw",
    height: "100vh",
    color: "#121212 !important",
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

import { makeStyles } from "tss-react/mui";

export const useGraphStyles = makeStyles()({
  root: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(21, 52, 175, 1)",
  },
  svgBox: {
    position: "absolute",
    bottom: "5vh",
    left: "50%",
    transform: "translateX(-50%)",
    height: "80vh",
    width: "100vw",
  },
  svg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  toolTip: {
    width: "15vw",
  },
});

export const useProjectPageStyles = makeStyles()({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
});

export const useConetentRowStyles = makeStyles()({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    gap: "8vw",
  },
  textWrapper: {
    maxWidth: "40vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "left",
    lineHeight: "5vh",
    gap: "1vh",
  },
  name: {
    width: "10vw",
    fontFamily: "SuisseIntl-Regular",
    fontWeight: 400,
    fontSize: "4vh",
    color: "#000000",
    opacity: 0.2,
    margin: "0",
  },
  text: {
    fontFamily: "SuisseIntl-Light",
    fontWeight: 400,
    fontSize: "4vh",
    color: "#000000",
    margin: "0",
  },
});

export const useConetnsStyles = makeStyles()({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    boxSizing: "border-box",
    padding: "0 z",
    // gap: "6vh",
  },
  smallText: {
    fontFamily: "SuisseIntl-Regular",
    fontWeight: 400,
    fontSize: "2vh",
    color: "#000000",
    margin: "0",
  },
  statusRow: {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "SuisseIntl-Regular",
    fontWeight: 400,
    fontSize: "4vh",
    color: "#000000",
    margin: "0",
  },
  link: {
    height: "3vh",
    width: "3vh",
  },
  textWrapper: {
    maxWidth: "40vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "left",
    lineHeight: "5vh",
    gap: "1vh",
  },
});

export const useHeaderStyles = makeStyles()({
  root: {
    zIndex: 2,
    position: "sticky",
    display: "flex",
    borderBottom: "1px solid #fff",
    height: "10.3vh",
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
    backgroundColor: "#fff",
    padding: "0 10vh 0 10vh",
    boxSizing: "border-box",
  },
  menuIconWrapper: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  buttonsWrapper: {
    display: "flex",
    gap: "8px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  whiteText: {
    fontFamily: "SuisseIntl-Light",
    fontWeight: 400,
    color: "#fff",
    textTransform: "none",
    fontSize: "1.8vh",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  signUpButton: {
    fontFamily: "SuisseIntl-Light",
    fontWeight: 600,
    color: "#fff",
    textTransform: "none",
    fontSize: "1.8vh",
    height: "4.6vh",
    backgroundColor: "rgba(45, 103, 255, 1)",
    borderRadius: "50px",
    padding: "0.5rem 1.3rem",
    "&:hover": {
      backgroundColor: "rgba(45, 103, 255, 0.85)",
    },
  },
});

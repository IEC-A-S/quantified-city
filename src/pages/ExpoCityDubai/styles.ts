import { makeStyles } from "tss-react/mui";

export const useExpoCityStyles = makeStyles()({
  root: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
  },
  headerWrapper: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
  },
  contentWrapper: {
    position: "absolute",
    overflowY: "scroll",
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
  title: {
    
    fontWeight: 100,
    fontSize: "6vh",
    color: "#fff",
  },
  textWrapper: {
    position: "relative",
    zIndex: 1,
    marginLeft: "10vh",
    paddingTop: "15vh",
  },
  description: {
    paddingTop: "4vh",
    
    fontWeight: 100,
    fontSize: "3vh",
    color: "#fff",
    width: "40vw",
  },
  bottomWrapper: {
    position: "absolute",
    bottom: "0",
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "4vh",
    pointerEvents: "none",
    width: "100%",
  },
});

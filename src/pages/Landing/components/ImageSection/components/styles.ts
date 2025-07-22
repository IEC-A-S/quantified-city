// contentWrapper: {
//   boxSizing: "border-box",
//   position: "absolute",
//   left: 70,
//   top: 250,
// },
import { makeStyles } from "tss-react/mui";

export const useImageSectionStyles = makeStyles()({
  root: {
    padding: 0,
    margin: 0,
    color: "#121212",
    height: "100vh",
  },
  contentWrapper: {
    height: "100%",
    width: "100%",
    margin: "0 auto",
    padding: "0 5%",
    boxSizing: "border-box",
  },
  pageContainer: {
    position: "relative",
    display: "block",
    float: "left",
    width: "100%",
    height: "100vh",
  },
  titleWrapper: {
    position: "absolute",
    top: "11vh",
    textAlign: "center",
    width: "100%",
  },
  bigText: {
    paddingTop: "18px",
    
    fontWeight: 300,
    lineHeight: "9vh",
    letterSpacing: "-0.5vh",
    fontSize: "10.7vh",
    color: "#fff",
  },
  bigTextSubtitle: {
    paddingTop: "18px",
    
    fontWeight: 400,
    lineHeight: "2",
    letterSpacing: "0",
    fontSize: "2vh",
    color: "#fff",
  },
  smallItemsListWrapper: {
    marginTop: "4vh",
    display: "flex",
    flexDirection: "column",
    gap: "1.1vh",
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
  smallTextWrapper: {
    pointerEvents: "all",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  smallText: {
    
    fontSize: "1.8vh",
    color: "#fff",
    opacity: "0.6",
    cursor: "pointer",
  },
});

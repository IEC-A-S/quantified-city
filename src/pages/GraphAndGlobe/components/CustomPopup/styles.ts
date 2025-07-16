import { makeStyles } from "tss-react/mui";

export const usePopupStyles = makeStyles()({
  closeBtn: {
    background: "#2D67FF",
    width: 45,
    height: 45,
    position: "absolute",
    top: 0,
    left: 70,
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 300,
    // lineHeight: 25.2,
    position: "absolute",
    top: 85,
    right: 70,
    width: 710,
  },
  fat: {
    fontWeight: "500 !important",
  },
  content: {
    padding: 70,
    border: "1px solid #000",
    position: "relative",
    width: 1335,
    "& h2": {
      fontSize: 60,
      fontWeight: 300,
      letterSpacing: "-1.2px",
      position: "absolute",
      top: 70,
      left: 70,
      lineHeight: "70px",
    },
  },
  blue: {
    backgroundColor: "#1433AE",
    color: "#FFF",
  },
  white: {
    backgroundColor: "#FFF",
    color: "#000",
  },
});

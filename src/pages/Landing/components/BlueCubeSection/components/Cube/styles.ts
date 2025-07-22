import { makeStyles } from "tss-react/mui";

export const useCubeStyles = makeStyles()({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "800px",
  },
  card: {
    padding: "20px",
    borderRadius: "5px",
    background: "rgba(0,0,0,0.04)",
    opacity: "0.7",
  },
});

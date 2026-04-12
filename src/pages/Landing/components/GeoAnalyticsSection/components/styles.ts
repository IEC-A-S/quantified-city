import { makeStyles } from "tss-react/mui";

export const useGeoPageStyles = makeStyles()({
  title: {
    
    fontSize: "6.25vh",
    color: "#000",
  },
  subTitle: {
    
    fontSize: "2vh",
    color: "#000",
    maxWidth: "30vh",
    marginTop: "3vh",
  },
});

export const useToggleButtonListStyles = makeStyles()({
  root: {
    backgroundColor: "#fff",
    padding: "2vh 2vh",
    borderRadius: 20,
    marginTop: "3vh",
    gap: "2vh",
    width: "340px",
  },
  columnWrapper: {
    position: "relative",
    display: "flex",
    gap: 8,
    flexDirection: "column",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
  },
  populationWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

/* eslint-disable max-lines */
import { makeStyles } from "tss-react/mui";
import { styled, ToggleButton, ToggleButtonGroup } from "@mui/material";

export const useAppStyles = makeStyles()({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(240, 234, 214, 1)",
    color: "#fff",
    height: "100vh",
  },
  contentWrapper: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "0 15%",
  },
  gradient: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundImage:
      "radial-gradient(53.6% 37.94% at 49.21% 62.06%, rgba(33, 63, 178, 0) 0%, #1424A2 100%)",
  },
  graph3dWrapper: {
    backgroundColor: "transparent",
    zIndex: 1,
    position: "absolute",
    top: "-30%",
    left: "8%",
    width: "100%",
    height: "130%",
  },
});

export const useSelectedCityStyles = makeStyles()({
  root: {
    position: "absolute",
    marginTop: "1.5vh",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "5vh",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cityNameAndCountryNameWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  cityName: {
    
    fontWeight: 400,
    fontSize: "10.8vh",
    marginLeft: "-1vh",
  },
  cityDescription: {
    
    fontWeight: 400,
    fontSize: "1.6vh",
    opacity: "0.5",
  },
  countryName: {
    
    fontWeight: 400,
    fontSize: "2vh",
    marginTop: "-0.95vh",
  },
  statWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "3.5vh",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "2vh",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
    justifyContent: "flex-end",
  },
  statTitle: {
    fontWeight: 100,
    fontSize: "1.40vh",
    opacity: "0.5",
  },
  statValue: {
    
    fontWeight: 200,
    fontSize: "1.95vh",
    marginTop: "-0.40vh",
  },
  statStatus: {
    
    fontWeight: 300,
    width: "fit-content",
    fontSize: "1.4vh",
    color: "#2D67FF",
    border: "1px solid #2D67FF",
    borderRadius: "50px",
    padding: "0.6rem .9rem",
    marginTop: "0vh",
  },
  statsContainer: {
    width: "63.5vh",
    marginTop: "5.5vh",
    marginLeft: "-2vh",
    padding: 0,
    paddingLeft: "2vh",
    borderLeft: "1px solid #fff",
  },
  statStatusBig: {
    
    fontWeight: 300,
    width: "fit-content",
    fontSize: "2vh",
    borderRadius: "50px",
    marginTop: "0vh",
  },
  statItemBigWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1vh",
    justifyContent: "flex-end",
  },
  smallRowWrapper: {
    position: "relative",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lowOpacityLabel: {
    
    fontWeight: 100,
    fontSize: "1.40vh",
    opacity: "0.5",
  },
  statsBigText: {
    
    fontWeight: 200,
    fontSize: "2.5vh",
    width: "22vh",
  },
  statsSmallText: {
    
    fontWeight: 100,
    fontSize: "1.5vh",
  },
  smallItemsListWrapper: {
    marginTop: "4vh",
    display: "flex",
    flexDirection: "column",
    gap: "1.1vh",
  },
  bottomWrapper: {
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "29vh",
    pointerEvents: "none",
    height: "5vh",
    marginLeft: "0vh",
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

export const useHeaderStyles = makeStyles()({
  root: {
    zIndex: 9998,
    position: "relative",
    display: "flex",
    borderBottom: "2px solid rgba(18, 18, 18, 1)",
    height: "10vh",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconWrapper: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
  },
  buttonsWrapper: {
    display: "flex",
    gap: "8px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  whiteText: {
    fontWeight: 400,
    color: "rgba(18, 18, 18, 1)",
    textTransform: "none",
    fontSize: "2vh",
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  signUpButton: {
    
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

export const useContentStyles = makeStyles()({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "90vh",
  },
  bigText: {
    paddingTop: "32px",
    fontWeight: 400,
    fontSize: "6vh",
    lineHeight: "6vh",
    color: "rgba(18, 18, 18, 1)",
  },
  bigTextSubtitle: {
    position: "absolute",
    top: "48%",
    width: "40%",
    paddingTop: "18px",
    
    lineHeight: "3vh",
    letterSpacing: "0vh",
    fontSize: "2vh",
    color: "#fff",
    pointerEvents: "none",
  },
  bigTextBlue: {
    color: "rgba(0, 200, 181, 1)",
  },
  textAndToggleWrapper: {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    pointerEvents: "none",
  },
  filterButtonAndScaleWrapper: {
    zIndex: 1,
    minWidth: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  filterSelect: {
    zIndex: 2,
    borderRadius: "50px",
    background: "white",
    minWidth: "unset",
    minHeight: "unset",
    height: "60px",
    fontSize: "1.8vh",
    padding: "0px 0px 0px 5px",
    "& .MuiSelect-select": {
      padding: "0px 0px 0px 15px",
      "&:focus": {
        backgroundColor: "transparent",
      },
    },
  },
  filterButton: {
    minWidth: "unset",
    minHeight: "unset",
    height: "60px",
    width: "133px",
    fontWeight: 400,
    color: "#000000",
    textTransform: "none",
    fontSize: "24px",
    zIndex: 2,
    backgroundColor: "transparent",
    border: "2px solid rgba(18, 18, 18, 1)",
    borderRadius: "50px",
    padding: "0.5rem 1rem",
    opacity: "1",
    // "&:hover": {
    //   backgroundColor: "rgba(255, 255, 255, 0.85)",
    // },
  },
  topLineWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bottomWrapper: {
    zIndex: 9998,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "40px",
    pointerEvents: "none",
    height: "10vh",
  },
  smallTextWrapper: {
    pointerEvents: "all",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    cursor: "pointer",
    zIndex: 9999,
  },
  smallText: {
    
    fontSize: "17px",
    color: "#7386CA",
    cursor: "pointer",
  },
  legendLine: {
    position: "absolute",
    height: "51.5vh",
    top: "50%",
    right: "5%",
    transform: "translate(0, -45%)",
    pointerEvents: "none",
    zIndex: "1",
  },
  filterButtonsWrapper: {
    // position: "absolute",
    // marginTop: "66px",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: "-73vh",
    alignSelf: "end",
  },
  blurAll: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 2,
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
  },
});

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  "& .MuiToggleButtonGroup-grouped": {
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
    textTransform: "none",
    pointerEvents: "all",
  },
}));

export const StyledToggleButton = styled(ToggleButton)({
  "&.MuiToggleButton-root": {
    
    fontSize: "4vh",
    textTransform: "none",
    borderRadius: "50px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    backgroundColor: "transparent",
    padding: "0.2rem 1.5rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
  },
  "&.Mui-selected": {
    backgroundColor: "#fff",
    color: "#000",
  },
});

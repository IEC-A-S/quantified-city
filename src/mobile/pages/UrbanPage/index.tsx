import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { MainMenu } from "../../../components/MainMenu";
import { Content } from "./components/Content";
import type mapboxgl from "mapbox-gl";
import { SelectedCity } from "./components/SelectedCity";

export const useUrbanStyles = makeStyles()({
  root: {
    position: "absolute",
    width: "100%",
    height: "auto",
    padding: "16px",
    boxSizing: "border-box",
    overflow: "scroll",
    pointerEvents: "none",
  },
  span: {
    fontFamily: "SuisseIntl-Regular",
    color: "#2D67FF",
  },
  toggleButtonGroupWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "14px",
  },
  bottomRatingLegend: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "132px",
    background:
      "linear-gradient(0deg, #2429B5 63.09%, rgba(36, 41, 181, 0) 99.48%)",
  },
  bottomRatingLegendImage: {
    userSelect: "none",
    width: "90%",
    maxWidth: "450px",
  },
  graphAndMapWrapper: {
    pointerEvents: "all",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    backgroundColor: "rgba(21, 52, 175, 1)",
    zIndex: -1,
  },
  graphWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    overflow: "hidden",
  },
  blurWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    zIndex: 1,
  },
  filterButtonsWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: "16px",
    gap: "16px",
  },
});

export const UrbanPage = () => {
  const { classes } = useUrbanStyles();
  const [currentView, setCurrentView] = useState<"graph" | "map">("map");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [invertColors, setInvertColors] = useState(false);

  useEffect(() => {
    const selectedCity = document.getElementById("selectedCity")!;

    if (!selectedCity) return;

    selectedCity.addEventListener("scroll", (e) => {
      const pagePos = selectedCity.scrollTop;

      if (pagePos > 0) {
        setInvertColors(true);
      } else {
        setInvertColors(false);
      }
    });
  }, [selectedCity]);

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} isMobile={true} />}
      <div
        id={"selectedCity"}
        className={classes.root}
        style={{
          height: selectedCity ? "100%" : "100vh",
          backgroundColor: selectedCity ? "#1433AE" : "transparent",
          overflow: selectedCity ? "scroll" : "hidden",
          pointerEvents: selectedCity ? "all" : "none",
        }}
      >
        <div
          style={{
            filter: invertColors ? "invert(1)" : "unset",
            margin: invertColors ? "-16px -16px -16px -16px" : "0",
            padding: invertColors ? "16px 16px 0px 16px" : "0",
            background: invertColors ? "#000" : "transparent",
            position: "sticky",
            top: invertColors ? "-16px" : "unset",
            zIndex: 10,
          }}
        >
          <Header
            setMenuVisible={setMenuVisible}
            isBackArrowShown={!!selectedCity}
            onBackClick={() => setSelectedCity(null)}
          />
        </div>

        {selectedCity ? (
          <SelectedCity selectedCityName={selectedCity} />
        ) : (
          <Content
            map={map}
            setMap={setMap}
            currentView={currentView}
            setCurrentView={setCurrentView}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />
        )}
      </div>
    </div>
  );
};

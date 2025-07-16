import { useState } from "react";
import { Layout } from "./components/Layout";
import { Header } from "./components/Layout/Header";
import { Content } from "./components/Layout/Content";
import { Graph3D } from "./components/Graph3D";
import { BlueMap } from "./components/Map";
import type mapboxgl from "mapbox-gl";
import { SelectedCity } from "./SelectedCity";
import { MainMenu } from "../../components/MainMenu";

export const GraphAndGlobe = () => {
  const [currentView, setCurrentView] = useState<"graph" | "map">("map");
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <Layout backgroundColor={selectedCity ? "#2429B5" : "#2429B5"}>
        <Header
          isCitySelected={!!selectedCity}
          setSelectedCity={setSelectedCity}
          setMenuVisible={setMenuVisible}
        />
        {selectedCity ? (
          <SelectedCity selectedCityName={selectedCity} />
        ) : (
          <Content
            map={map}
            currentView={currentView}
            setCurrentView={setCurrentView}
            isZoomButtonsVisible={currentView === "map"}
          />
        )}
        {currentView === "graph" && !selectedCity && (
          <Graph3D setSelectedCity={setSelectedCity} />
        )}
        {currentView === "map" && !selectedCity && (
          <BlueMap setMap={setMap} setSelectedCity={setSelectedCity} />
        )}
      </Layout>
    </div>
  );
};

import { GeoMapDubai } from "./components/GeoMap/GeoMapDubai";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { PageWrapper } from "./components/PageWrapper";
import { ContentWrapper } from "./components/ContentWrapper";
import { useGeoPageStyles } from "./components/styles";
import { LayersToggleList } from "./components/LayersToggleList";
import { useEffect, useState } from "react";
import type mapboxgl from "mapbox-gl";
import { ZoomButtons } from "./components/ZoomButtons";
import { GeoMapDeSalam } from "./components/GeoMap/GeoMapDeSalam";
import { GeoMapAstana } from "./components/GeoMap/GeoMapAstana";
import { GeoMapLahore } from "./components/GeoMap/GeoMapLahore";
import { GeoMapNairobi } from "./components/GeoMap/GeoMapNairobi";
import { useParams } from "react-router-dom";
import { CITY_DATA } from "../../../../data";

export const GeoAnalyticsSection = () => {
  const { classes } = useGeoPageStyles();
  const selectedCity = useSelectedCityData();
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [legend, setLegend] = useState<string | null>(null);

  const cityData = useSelectedCityData();
  const cityName = cityData.City;
  //const { cityName } = useParams();
  //const cityData = CITY_DATA.find((city) => city.City === cityName)!;

  // =================================================================
  // Временная заглушка для разработки геоаналитики для Астаны
  // let cityData;
  // if (cityName === "Astana") {
  //   cityData = CITY_DATA.find((city) => city.City === "Dubai")!;
  // } else {
  //   cityData = CITY_DATA.find((city) => city.City === cityName)!;
  // }
  //================================================================

  useEffect(() => {
    // console.log(legend);
    // console.log(cityName);
  }, [legend]);

  return (
    <PageWrapper>
      <ContentWrapper>
        <div className={classes.title}>{selectedCity?.City}: Geoanalytics</div>
        {/*<div className={classes.subTitle}>*/}
        {/*  Some short text about borders that we show on the map*/}
        {/*</div>*/}
        <img
          src={"/legends/bordersLegend.svg"}
          style={{
            marginTop: "3vh",
            width: "30vh",
          }}
        />
        <LayersToggleList map={map} setLegend={setLegend} />
      </ContentWrapper>
      {cityName === "Dubai" && <GeoMapDubai setMap={setMap} />}
      {cityName === "Dar es Salaam" && <GeoMapDeSalam setMap={setMap} />}
      {cityName === "Astana" && <GeoMapAstana setMap={setMap} />}
      {cityName === "Lahore" && <GeoMapLahore setMap={setMap} />}
      {cityName === "Nairobi" && <GeoMapNairobi setMap={setMap} />}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vh",
          zIndex: 1000,
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
          gap: "4vh",
          alignItems: "center",
        }}
      >
        <ZoomButtons map={map} />
        {legend && legend.includes("/") ? (
          <img src={legend} />
        ) : (
          legend && (
            <div
              style={{
                
                fontSize: "1.8vh",
                width: "10vw",
              }}
            >
              {legend}
            </div>
          )
        )}
      </div>
    </PageWrapper>
  );
};

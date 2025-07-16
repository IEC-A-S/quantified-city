import { Typography } from "@mui/material";
import { useState } from "react";
import type mapboxgl from "mapbox-gl";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { GeoMapDubai } from "../../../pages/Landing/components/GeoAnalyticsSection/components/GeoMap/GeoMapDubai";
import { GeoMapDeSalam } from "../../../pages/Landing/components/GeoAnalyticsSection/components/GeoMap/GeoMapDeSalam";
import { LayersToggleList } from "../../../pages/Landing/components/GeoAnalyticsSection/components/LayersToggleList";
import { GeoMapAstana } from "../../../pages/Landing/components/GeoAnalyticsSection/components/GeoMap/GeoMapAstana";
import { GeoMapLahore } from "../../../pages/Landing/components/GeoAnalyticsSection/components/GeoMap/GeoMapLahore";
import { GeoMapNairobi } from "../../../pages/Landing/components/GeoAnalyticsSection/components/GeoMap/GeoMapNairobi";
export const GeoAnalytics = () => {
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [legend, setLegend] = useState<string | null>(null);
  const selectedCity = useSelectedCityData();

  const cityData = useSelectedCityData();
  const cityName = cityData.City;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Typography
        variant="h1"
        style={{
          padding: "16px",
          paddingTop: "80px",
          position: "relative",
          color: "#000",
          zIndex: "4",
        }}
      >
        {selectedCity?.City}: Geoanalytics
      </Typography>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          padding: "16px",
          boxSizing: "border-box",
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            src={"/legends/bordersLegend.svg"}
            style={{
              marginTop: "3vh",
              width: "180px",
            }}
          />
          {legend && legend.includes("/") ? (
            <img
              src={legend}
              style={{
                width: "78px",
              }}
            />
          ) : (
            legend && (
              <div
                style={{
                  fontFamily: "SuisseIntl-Light",
                  fontSize: "1.8vh",
                  width: "10vw",
                }}
              >
                {legend}
              </div>
            )
          )}
        </div>
        <LayersToggleList map={map} setLegend={setLegend} isMobile={true} />
      </div>
      {cityName === "Dubai" && <GeoMapDubai setMap={setMap} isMobile={true} />}
      {cityName === "Dar es Salaam" && (
        <GeoMapDeSalam setMap={setMap} isMobile={true} />
      )}
      {cityName === "Astana" && (
        <GeoMapAstana setMap={setMap} isMobile={true} />
      )}
      {cityName === "Lahore" && (
        <GeoMapLahore setMap={setMap} isMobile={true} />
      )}
      {cityName === "Nairobi" && (
        <GeoMapNairobi setMap={setMap} isMobile={true} />
      )}
    </div>
  );
};

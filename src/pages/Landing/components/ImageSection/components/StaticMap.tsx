import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const StaticMap = () => {
  //Init params for map
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3RhbnJvbnpoaW4iLCJhIjoiY2xvaGF3ZmFzMWdodDJxbjByeHMzanE2dCJ9.3uz_EG8N_d7isS1h5wV46w";

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>(null);

  useEffect(() => {
    if (map.current || !mapContainerRef.current) {
      return;
    } // initialize map only once

    map.current = new mapboxgl.Map({
      attributionControl: false,
      container: mapContainerRef.current,
      style: "mapbox://styles/stanronzhin/clp2oipbp00fc01qu0xvx3mlr",
      center: [55.30384, 25.20339],
      zoom: 9,
      bearing: 0,
      pitch: 60,
    });

    map.current.on("load", () => {
      if (!map.current) {
        return;
      }

      map.current.addSource("pop_cicrle", {
        type: "geojson",
        data: "data/MVP_Pop_Dubai_1km_square_NoROADS_Clipped2Circle.geojson",
      });

      map.current.addLayer({
        id: "Population circle",
        type: "fill-extrusion",
        source: "pop_cicrle",
        paint: {
          "fill-extrusion-height": ["get", "Population"],
          "fill-extrusion-vertical-scale": 1, //3,
          "fill-extrusion-color": [
            "interpolate",
            ["linear"],
            ["get", "Population"],
            2,
            "#2d43cd",
            1000,
            "#5173e0",
            35373,
            "#b7c5f0",
            // 2,
            // "#738cce",
            // 1000,
            // "#e1e6f5",
            // 35373,
            // "#fefbfb"
          ],
          "fill-extrusion-opacity": 1, //0.69
        },
      });
    });
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

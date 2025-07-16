import { FC, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface GeoMapProps {
  isMobile?: boolean;
  setMap: (map: mapboxgl.Map) => void;
}

export const GeoMapAstana: FC<GeoMapProps> = ({ setMap, isMobile }) => {
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
      style: "mapbox://styles/stanronzhin/cloycy6uc012f01qye3qz7lc4", //light
      center: [71.436664997192452, 51.160220893455033],
      zoom: isMobile ? 9 : 9.8,
      bearing: 0,
      pitch: 63,
    });

    // Wait until the map has finished loading.
    map.current.on("load", () => {
      //Population Group

      //disable zoom on scroll
      map.current.scrollZoom.disable();

      //Build Up
      map.current.addSource("build_up", {
        type: "raster",
        url: "mapbox://stanronzhin.bjbnweqh",
      });

      map.current.addLayer(
        {
          id: "Build up",
          source: "build_up",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
        },
        "land-structure-line"
      );

      //Population 2D
      map.current.addSource("pop_raster", {
        type: "raster",
        url: "mapbox://stanronzhin.8k52pnek",
      });

      map.current.addLayer(
        {
          id: "Population 2D",
          source: "pop_raster",
          type: "raster",
          paint: {
            "raster-opacity": 1,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
        },
        "land-structure-line"
      );

      //Population 3D
      map.current.addSource("pop_bars", {
        type: "vector",
        url: "mapbox://stanronzhin.7mrebn7x",
      });

      map.current.addLayer(
        {
          id: "Population 3D",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Astana_Population_Bars_NO2_SO-6uqpz8",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 1.5,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "Population"],
              1,
              "#fefefe",
              4197,
              "#828282",
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        "expo-city-dubai-label"
      );

      //Population 3D x Pollution Group

      //Population 3D x SO2
      map.current.addLayer(
        {
          id: "Population 3D x SO2",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Astana_Population_Bars_NO2_SO-6uqpz8",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 1.5,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "SO2_mean"],
              3.17,
              "#ffffff",
              7.9,
              "#570f6e",
              12.6,
              "#bb3755",
              17.4,
              "#f98d0a",
              22.1,
              "#fcffa4",
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        "expo-city-dubai-label"
      );

      //Population 3D x NO2
      map.current.addLayer(
        {
          id: "Population 3D x NO2",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Astana_Population_Bars_NO2_SO-6uqpz8",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 1.5,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "NO2_mean"],
              3.3,
              "#440154",
              3.86,
              "#3b528b",
              4.42,
              "#21908d",
              4.98,
              "#5dc962",
              5.54,
              "#fde725",
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        "expo-city-dubai-label"
      );

      //Population 3D x O3
      map.current.addLayer(
        {
          id: "Population 3D x O3",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Astana_Population_Bars_NO2_SO-6uqpz8",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 1.5,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "O3_mean"],
              7231,
              "#edf8fb",
              7237,
              "#b2e2e2",
              7243,
              "#66c2a4",
              7249,
              "#2ca25f",
              7254,
              "#006d2c",
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        "expo-city-dubai-label"
      );

      //Population 3D x CO
      map.current.addLayer(
        {
          id: "Population 3D x CO",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Astana_Population_Bars_NO2_SO-6uqpz8",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 1.5,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "CO_mean"],
              916,
              "#f6eff7",
              926,
              "#bdc9e1",
              936,
              "#67a9cf",
              946,
              "#1c9099",
              956,
              "#016c59",
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        "expo-city-dubai-label"
      );

      //Population 3D x PM10

      map.current.addLayer(
        {
          id: "Population 3D x PM10",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Astana_Population_Bars_NO2_SO-6uqpz8",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 1.5,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "PM10_mean"],
              -0.353595,
              "#ffffff",
              -0.3,
              "#f0f0f0",
              -0.25,
              "#7d7c78",
              -0.2,
              "#beaf6f",
              -0.148967,
              "#ffea46",
            ],
            "fill-extrusion-opacity": 0.9,
          },
        },
        "expo-city-dubai-label"
      );

      //Pollution 2D Group

      //SO2 2D
      map.current.addSource("SO2", {
        type: "raster",
        url: "mapbox://stanronzhin.4ogo12pq",
      });

      map.current.addLayer(
        {
          id: "SO2 2D",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
          source: "SO2",
        },
        "land-structure-line"
      );

      //NO2 2D
      map.current.addSource("NO2", {
        type: "raster",
        url: "mapbox://stanronzhin.dy2k9rcp",
      });

      map.current.addLayer(
        {
          id: "NO2 2D",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
          source: "NO2",
        },
        "land-structure-line"
      );

      //O3 2D
      map.current.addSource("O3", {
        type: "raster",
        url: "mapbox://stanronzhin.0jkjgkvm",
      });

      map.current.addLayer(
        {
          id: "O3 2D",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
          source: "O3",
        },
        "land-structure-line"
      );

      //CO 2D
      map.current.addSource("CO", {
        type: "raster",
        url: "mapbox://stanronzhin.7khhct92",
      });

      map.current.addLayer(
        {
          id: "CO 2D",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
          source: "CO",
        },
        "land-structure-line"
      );

      //PM10 2D
      map.current.addSource("PM10", {
        type: "raster",
        url: "mapbox://stanronzhin.2a33iqyl",
      });

      map.current.addLayer(
        {
          id: "PM10 2D",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
          source: "PM10",
        },
        "land-structure-line"
      );

      //Accessibility Group
      
      // Police stations
      map.current.addSource("police_stations", {
        type: "vector",
        url: "mapbox://stanronzhin.6b3e58b0",
      });

      map.current.addLayer({
        id: "Police stations",
        source: "police_stations",
        "source-layer": "Astana_Police_Stations-1nssz3",
        minzoom: 0,
        maxzoom: 22,
        type: "circle",
        layout: {
          visibility: "none",
        },
        paint: {
          "circle-color": "#a32bf3",
          "circle-radius": 2,
          "circle-stroke-color": "#5058f1",
          "circle-stroke-width": 1,
        },
      });
      
      // Police service areas
      map.current.addSource("police_sa", {
        type: "vector",
        url: "mapbox://stanronzhin.czcg7oth",
      });

      map.current.addLayer(
        {
          id: "Police service areas",
          source: "police_sa",
          "source-layer": "Astana_Police_Stations_Servic-7ugwyc",
          minzoom: 0,
          maxzoom: 22,
          type: "fill",
          paint: {
            "fill-outline-color": "rgba(255, 255, 255, 0)",
            "fill-color": "#a32bf3",
            "fill-opacity": 0.5,
          },
          layout: {
            visibility: "none",
          },
        },
        "Police stations"
      );
      
      // Ambulance stations
      map.current.addSource("ambulance_stations", {
        type: "vector",
        url: "mapbox://stanronzhin.0sjv21qp",
      });

      map.current.addLayer({
        id: "Ambulance stations",
        source: "ambulance_stations",
        "source-layer": "Astana_Ambulance_Stations-3kq2d3",
        minzoom: 0,
        maxzoom: 22,
        type: "circle",
        layout: {
          visibility: "none",
        },
        paint: {
          "circle-color": "#f32b2b",
          "circle-radius": 2,
          "circle-stroke-color": "#f15089",
          "circle-stroke-width": 1,
        },
      });

      // Ambulance service areas
      map.current.addSource("ambulance_sa", {
        type: "vector",
        url: "mapbox://stanronzhin.ccri5jwo",
      });

      map.current.addLayer(
        {
          id: "Ambulance service areas",
          source: "ambulance_sa",
          "source-layer": "Astana_Ambulance_Service_Area-5vz882",
          minzoom: 0,
          maxzoom: 22,
          type: "fill",
          paint: {
            "fill-outline-color": "rgba(255, 255, 255, 0)",
            "fill-color": "#f15089",
            "fill-opacity": 0.5,
          },
          layout: {
            visibility: "none",
          },
        },
        "Police stations"
      );
      
      //Schools
      map.current.addSource("schools", {
        type: "vector",
        url: "mapbox://stanronzhin.btfm2wlk",
      });

      map.current.addLayer({
        id: "Schools",
        source: "schools",
        "source-layer": "Schools_Astana-2ipykr",
        minzoom: 0,
        maxzoom: 22,
        type: "circle",
        layout: {
          visibility: "none",
        },
        paint: {
          "circle-color": "#00ff91",
          "circle-radius": 2,
          "circle-stroke-color": "#75ffd6",
          "circle-stroke-width": 1,
        },
      });

      //School Service Areas
      map.current.addSource("sa_schools", {
        type: "vector",
        url: "mapbox://stanronzhin.28zmer3x",
      });

      map.current.addLayer(
        {
          id: "School service areas",
          source: "sa_schools",
          "source-layer": "Schools_Service_Areas_Astana-3b42rb",
          minzoom: 0,
          maxzoom: 22,
          type: "fill",
          paint: {
            "fill-outline-color": "rgba(255, 255, 255, 0)",
            "fill-color": "#00ffda",
            "fill-opacity": 0.5,
          },
          layout: {
            visibility: "none",
          },
        },
        "Schools"
      );

      //Transport stops
      map.current.addSource("transport_stops", {
        type: "vector",
        url: "mapbox://stanronzhin.1wyixi92",
      });

      map.current.addLayer({
        id: "Transport stops",
        source: "transport_stops",
        "source-layer": "Transport_stops_Astana-724dad",
        minzoom: 0,
        maxzoom: 22,
        type: "circle",
        layout: {
          visibility: "none",
        },
        paint: {
          "circle-color": "#ff00f6",
          "circle-radius": 2,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 1,
        },
      });

      //Transport service areas
      map.current.addSource("sa_transport", {
        type: "vector",
        url: "mapbox://stanronzhin.be2rm9kl",
      });

      map.current.addLayer({
        id: "Transport service areas",
        source: "sa_transport",
        "source-layer": "Transport_stops_Service_Areas-bqqqcb",
        minzoom: 0,
        maxzoom: 22,
        type: "fill",
        paint: {
          "fill-outline-color": "rgba(255, 255, 255, 0)",
          "fill-color": "#e684dc",
          "fill-opacity": 0.5,
        },
        layout: {
          visibility: "none",
        },
      });

      //Parks
      map.current.addSource("parks", {
        type: "vector",
        url: "mapbox://stanronzhin.9trz9onw",
      });

      map.current.addLayer({
        id: "Parks",
        source: "parks",
        "source-layer": "Parks_Astana-5sotgs",
        minzoom: 0,
        maxzoom: 22,
        type: "fill",
        paint: {
          "fill-color": "#00db63",
        },
        layout: {
          visibility: "none",
        },
      });

      //Park service areas
      map.current.addSource("sa_parks", {
        type: "vector",
        url: "mapbox://stanronzhin.9h3kukhh",
      });

      map.current.addLayer(
        {
          id: "Parks service area",
          source: "sa_parks",
          "source-layer": "Parks_Service_Areas_Astana-5ft5ov",
          minzoom: 0,
          maxzoom: 22,
          type: "fill",
          paint: {
            "fill-color": "#00ddd0",
          },
          layout: {
            visibility: "none",
          },
        },
        "Parks"
      );

      //Landcover Group

      //Fresh Water Bodies
      map.current.addSource("water", {
        type: "raster",
        url: "mapbox://stanronzhin.69tm1bi7",
      });

      map.current.addLayer(
        {
          id: "Fresh water",
          source: "water",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
        },
        'land-structure-line'
      );

      //Damaged Land
      map.current.addSource("damagedLand", {
        type: "raster",
        url: "mapbox://stanronzhin.211bql0k",
      });

      map.current.addLayer(
        {
          id: "Damaged land",
          source: "damagedLand",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
        },
        'land-structure-line'
      );

      //Green areas
      map.current.addSource("green_areas", {
        type: "raster",
        url: "mapbox://stanronzhin.5mc3pfmo",
      });

      map.current.addLayer(
        {
          id: "Green areas",
          type: "raster",
          paint: {
            "raster-opacity": 0.8,
            "raster-fade-duration": 500,
          },
          layout: {
            visibility: "none",
          },
          source: "green_areas",
        },
        "land-structure-line"
      );

      //map.current.addSource('city_clusters', {
      //     type: 'geojson',
      //     data: 'data/esg_urban_clusters.geojson'
      // });
      //
      //map.current.addLayer({
      //     id: 'urban cluster',
      //     source: 'city_clusters',
      //     type: 'fill',
      //     paint: {
      //         "fill-color": "#000000",
      //         "fill-opacity": [
      //             "interpolate",
      //             [
      //                 "linear"
      //             ],
      //             [
      //                 "zoom"
      //             ],
      //             0,
      //             0,
      //             8,
      //             0,
      //             10,
      //             0.2,
      //             22,
      //             0.2
      //         ]
      //     }
      // });
    });

    // After the last frame rendered before the map enters an "idle" state.
    map.current.on("idle", () => {
      // If these layers were not added to the map, abort
      if (
        !map.current.getLayer("Build up") ||
        !map.current.getLayer("Population 2D") ||
        !map.current.getLayer("Population 3D x SO2") ||
        !map.current.getLayer("Population 3D x NO2") ||
        !map.current.getLayer("Population 3D x O3") ||
        !map.current.getLayer("Population 3D x CO") ||
        !map.current.getLayer("Population 3D x PM10") ||
        !map.current.getLayer("SO2 2D") ||
        !map.current.getLayer("NO2 2D") ||
        !map.current.getLayer("O3 2D") ||
        !map.current.getLayer("CO 2D") ||
        !map.current.getLayer("PM10 2D") ||
        !map.current.getLayer("Police stations") ||
        !map.current.getLayer("Police service areas") || 
        !map.current.getLayer("Ambulance stations") ||
        !map.current.getLayer("Ambulance service areas") ||
        !map.current.getLayer("Schools") ||
        !map.current.getLayer("School service areas") ||
        !map.current.getLayer("Transport stops") ||
        !map.current.getLayer("Transport service areas") ||        
        !map.current.getLayer("Parks") ||
        !map.current.getLayer("Parks service area") ||
        !map.current.getLayer("Fresh water") ||
        !map.current.getLayer("Damaged land") ||
        !map.current.getLayer("Green areas") ||
        // !map.current.getLayer('urban cluster') ||
        !map.current.getLayer("Population 3D")
      ) {
        return;
      }

      // console.log('A idle event occurred.');
      // console.log("Center - " + map.current.getCenter());
      // console.log("Zoom - " + map.current.getZoom());
      // console.log("Bearing - " + map.current.getBearing());
      // console.log("Pitch - " + map.current.getPitch());

      // Enumerate ids of the layers.
      const toggleableLayerIds = [
        "Build up",
        "Population 2D",
        "Population 3D",
        "Population 3D x SO2",
        "Population 3D x NO2",
        "Population 3D x O3",
        "Population 3D x CO",
        "Population 3D x PM10",
        "SO2 2D",
        "NO2 2D",
        "O3 2D",
        "CO 2D",
        "PM10 2D",
        "Police stations",
        "Police service areas",
        "Ambulance stations",
        "Ambulance service areas",
        "Schools",
        "School service areas",
        "Transport stops",
        "Transport service areas",
        "Parks",
        "Parks service area",
        "Fresh water",
        "Damaged land",
        "Green areas",
        // 'urban cluster'
      ];

      // Set up the corresponding toggle button for each layer.
      for (const id of toggleableLayerIds) {
        // Skip layers that already have a button set up.
        if (document.getElementById(id)) {
          continue;
        }

        // Create a link.
        const link = document.createElement("a");
        link.id = id;
        link.href = "#";
        link.textContent = id;
        link.className = "active";

        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          const clickedLayer = this.textContent;
          e.preventDefault();
          e.stopPropagation();

          const visibility = map.current.getLayoutProperty(
            clickedLayer,
            "visibility"
          );

          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === "none") {
            map.current.setLayoutProperty(
              clickedLayer,
              "visibility",
              "visible"
            );
            this.className = "";
          } else {
            this.className = "active";
            map.current.setLayoutProperty(clickedLayer, "visibility", "none");
          }
        };

        const layers = document.getElementById("menu");
        layers.appendChild(link);
      }
    });

    setMap(map.current);
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        // pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

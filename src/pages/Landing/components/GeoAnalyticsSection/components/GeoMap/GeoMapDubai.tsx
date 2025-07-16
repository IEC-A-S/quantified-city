import { FC, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface GeoMapProps {
  isMobile?: boolean;
  setMap: (map: mapboxgl.Map) => void;
}

export const GeoMapDubai: FC<GeoMapProps> = ({ setMap, isMobile }) => {
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
      // style: 'mapbox://styles/stanronzhin/cloljo68r007q01qy361s5ac4', //blue
      style: "mapbox://styles/stanronzhin/cloycy6uc012f01qye3qz7lc4", //light
      center: [55.28314923749909, 25.02940197161118],
      zoom: isMobile ? 9 : 10.5,
      bearing: 0,
      pitch: 60,
    });

    // Wait until the map has finished loading.
    map.current.on("load", () => {
      //Population Group

      //disable zoom on scroll
      map.current.scrollZoom.disable();

      //Build Up
      map.current.addSource("build_up", {
        type: "raster",
        url: "mapbox://stanronzhin.bly9vkw2",
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
        url: "mapbox://stanronzhin.3wcn7mfu",
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
        url: "mapbox://stanronzhin.6j7olk89",
      });

      map.current.addLayer(
        {
          id: "Population 3D",
          type: "fill-extrusion",
          source: "pop_bars",
          "source-layer": "Dubai_Population_Bars_NO2_SO2-cpdzjb",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 2,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "Population"],
              1,
              "#fefefe",
              12196,
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
          "source-layer": "Dubai_Population_Bars_NO2_SO2-cpdzjb",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 2,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "SO2_mean"],
              2.109820365905762,
              "#000004",
              5.94,
              "#50127b",
              9.78,
              "#b6377a",
              13.62,
              "#fb8761",
              17.892879486083984,
              "#fcfdbf",
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
          "source-layer": "Dubai_Population_Bars_NO2_SO2-cpdzjb",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 2,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "No2_mean"],
              1.002105474472046,
              "#440154",
              4,
              "#3b528b",
              7,
              "#21908d",
              10,
              "#5dc963",
              12.314108322964207,
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
          "source-layer": "Dubai_Population_Bars_NO2_SO2-cpdzjb",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 2,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "O3_mean"],
              5989.198242187499,
              "#edf8fb",
              6005,
              "#b2e2e2",
              6021,
              "#66c2a4",
              6037.02,
              "#2ca25f",
              6053.04296875,
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
          "source-layer": "Dubai_Population_Bars_NO2_SO2-cpdzjb",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 2,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "CO_mean"],
              781,
              "#f6eff7",
              862.3,
              "#d0d6e8",
              925.4,
              "#a0bedb",
              939,
              "#67a9cf",
              953,
              "#3598ab",
              965,
              "#138484",
              998.3495483398436,
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
          "source-layer": "Dubai_Population_Bars_NO2_SO2-cpdzjb",
          layout: {
            visibility: "none",
          },
          paint: {
            "fill-extrusion-height": ["get", "Population"],
            "fill-extrusion-vertical-scale": 2,
            "fill-extrusion-color": [
              "interpolate",
              ["linear"],
              ["get", "UV_mean"],
              0.703,
              "#cfcfcf",
              0.85,
              "#b1b0af",
              1.1,
              "#a79e75",
              1.16,
              "#c5b56c",
              1.32,
              "#e5d05a",
              1.479856308970643,
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
        url: "mapbox://stanronzhin.45878sao",
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
        url: "mapbox://stanronzhin.cazbwhrj",
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
        url: "mapbox://stanronzhin.cbntwjd4",
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
        url: "mapbox://stanronzhin.446ij1ot",
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
        url: "mapbox://stanronzhin.a1bmhhk8",
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

      //Schools
      map.current.addSource("schools", {
        type: "vector",
        url: "mapbox://stanronzhin.862v1tre",
      });

      map.current.addLayer({
        id: "Schools",
        source: "schools",
        "source-layer": "Schools_Dubai_DarEsSalaam_shp-2dp8hn",
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
        url: "mapbox://stanronzhin.db4zco7s",
      });

      map.current.addLayer(
        {
          id: "School service areas",
          source: "sa_schools",
          "source-layer": "Schools_Service_Areas_Dubai_D-dcr4b6",
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
        url: "mapbox://stanronzhin.baw4ssp1",
      });

      map.current.addLayer({
        id: "Transport stops",
        source: "transport_stops",
        "source-layer": "Transport_stops_Dubai_DarEsSa-2e5jzv",
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
        url: "mapbox://stanronzhin.ayut4ft2",
      });

      map.current.addLayer({
        id: "Transport service areas",
        source: "sa_transport",
        "source-layer": "Transport_Service_Areas_Dubai-8rypml",
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
        url: "mapbox://stanronzhin.bberinf0",
      });

      map.current.addLayer({
        id: "Parks",
        source: "parks",
        "source-layer": "Parks_Dubai_DarEsSalaam_shp-4ar5jy",
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
        url: "mapbox://stanronzhin.5g64w2gy",
      });

      map.current.addLayer(
        {
          id: "Parks service area",
          source: "sa_parks",
          "source-layer": "Parks_Service_Areas_Dubai_Dar-3u1qpp",
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
        url: "mapbox://stanronzhin.87imwe7u",
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
        }
        // 'land-structure-line'
      );

      //Damaged Land
      map.current.addSource("damagedLand", {
        type: "raster",
        url: "mapbox://stanronzhin.ddx873qu",
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
        }
        // 'land-structure-line'
      );

      //Green areas
      map.current.addSource("green_areas", {
        type: "raster",
        url: "mapbox://stanronzhin.d77lnwg2",
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

      // map.current.addSource("city_clusters", {
      //   type: "geojson",
      //   data: "data/esg_urban_clusters.geojson",
      // });
      //
      // map.current.addLayer({
      //   id: "urban cluster",
      //   source: "city_clusters",
      //   type: "fill",
      //   paint: {
      //     "fill-color": "#000000",
      //     "fill-opacity": [
      //       "interpolate",
      //       ["linear"],
      //       ["zoom"],
      //       0,
      //       0,
      //       8,
      //       0,
      //       10,
      //       0.2,
      //       22,
      //       0.2,
      //     ],
      //   },
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
        !map.current.getLayer("Schools") ||
        !map.current.getLayer("School service areas") ||
        !map.current.getLayer("Transport stops") ||
        !map.current.getLayer("Transport service areas") ||
        !map.current.getLayer("Parks") ||
        !map.current.getLayer("Parks service area") ||
        !map.current.getLayer("Fresh water") ||
        !map.current.getLayer("Damaged land") ||
        !map.current.getLayer("Green areas") ||
        !map.current.getLayer("urban cluster") ||
        !map.current.getLayer("Population 3D")
      ) {
        return;
      }

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
        "Schools",
        "School service areas",
        "Transport stops",
        "Transport service areas",
        "Parks",
        "Parks service area",
        "Fresh water",
        "Damaged land",
        "Green areas",
        "urban cluster",
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

          const visibility = map.getLayoutProperty(clickedLayer, "visibility");

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

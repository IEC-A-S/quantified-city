import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface BlueMapProps {
  setMap(map: mapboxgl.Map): void;
  setSelectedCity(city: string): void;
}

export const BlueMap: FC<BlueMapProps> = ({ setMap, setSelectedCity }) => {
  //Init params for map
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3RhbnJvbnpoaW4iLCJhIjoiY2xvaGF3ZmFzMWdodDJxbjByeHMzanE2dCJ9.3uz_EG8N_d7isS1h5wV46w";

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>(null);

  const [onEnter, setOnEnter] = useState(false);

  let hoveredPolygonId: string | number | null | undefined = null;

  useEffect(() => {
    if (map.current || !mapContainerRef.current) {
      return;
    } // initialize map only once

    map.current = new mapboxgl.Map({
      attributionControl: false,
      container: mapContainerRef.current,
      style: "mapbox://styles/stanronzhin/clok1b9my006901o4gkfc25b2",
      center: [30, 40],
      zoom: 2,
      pitch: 25,
    });

    map.current.on("load", () => {
      if (!map.current) {
        return;
      }

      map.current
        .addSource("city_points", {
          type: "geojson",
          data: "data/esg_city_points.geojson",
          cluster: true,
          clusterMaxZoom: 7, // Max zoom to cluster points on
          clusterRadius: 20, // Radius of each cluster when clustering points (defaults to 50)
        })
        .addSource("city_clusters", {
          type: "geojson",
          data: "data/esg_urban_clusters.geojson",
        });

      map.current.addLayer({
        id: "city_point_clusters",
        type: "circle",
        source: "city_points",
        filter: ["has", "point_count"],
        paint: {
          // Use step expressions (https://docs.mapbox.com/style-spec/reference/expressions/#step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#f7f7f7",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            15,
            100,
            30,
            750,
            40,
          ],
        },
      });

      map.current.addLayer({
        id: "city_point_cluster-count",
        type: "symbol",
        source: "city_points",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["Suisse Intl Regular", "Arial Unicode MS Bold"],
          "text-size": 20,
        },
      });

      map.current.addLayer(
        {
          id: "city_point_points",
          type: "symbol",
          source: "city_points",
          paint: {},
          layout: {
            "icon-image": [
              "match",
              ["get", "Category"],
              ["C1"],
              "esg_point_C1",
              ["C3"],
              "esg_point_C3",
              ["B2"],
              "esg_point_B2",
              ["B3"],
              "esg_point_B3",
              ["C2"],
              "esg_point_C2",
              ["A1"],
              "esg_point_A1",
              ["A2"],
              "esg_point_A2",
              ["A3"],
              "esg_point_A3",
              ["B1"],
              "esg_point_B1",
              "esg_point_new",
            ],
            "icon-size": [
              "interpolate",
              ["linear"],
              ["zoom"],
              1,
              0.35,
              2,
              0.5,
              3,
              0.6,
              6,
              0.7,
              10,
              0.8,
              22,
              0.7,
            ],
          },
          filter: ["!", ["has", "point_count"]],
        },
        "city_point_cluster-count"
      );

      map.current.addLayer({
        id: "city_point_labels",
        type: "symbol",
        source: "city_points",
        layout: {
          "text-line-height": 0,
          "text-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            12,
            1,
            15,
            2,
            20,
            3,
            25,
            6,
            30,
            10,
            35,
            22,
            25,
          ],
          "text-radial-offset": 0,
          "symbol-avoid-edges": true,
          "text-font": ["Suisse Intl Regular", "Arial Unicode MS Regular"],
          "text-offset": [0, -1.2],
          "text-anchor": "bottom",
          "text-field": ["to-string", ["get", "City_Name"]],
        },
        paint: {
          "text-color": "#ffffff",
        },
      });

      map.current.addLayer({
        id: "city_cluster_hover",
        source: "city_clusters",
        type: "fill",
        paint: {
          "fill-color": "#ffffff",
          "fill-opacity": [
            "case",
            ["boolean", ["feature-state", "hover"], false],
            0,
            0.07,
          ],
        },
      });

      map.current.addLayer({
        id: "city_cluster_line",
        source: "city_clusters",
        type: "line",
        paint: {
          "line-color": "#ffffff",
          "line-opacity": [
            "interpolate",
            ["linear"],
            ["zoom"],
            0,
            0,
            8,
            0,
            10,
            1,
            22,
            1,
          ],
        },
      });

      // inspect a cluster on click
      map.current.on("click", "city_point_clusters", (e) => {
        const features = map.current.queryRenderedFeatures(e.point, {
          layers: ["city_point_clusters"],
        });
        const clusterId = features[0].properties.cluster_id;

        const cityName = e.features[0].properties.City_Name;

        // setSelectedCity(cityName);

        map.current
          .getSource("city_points")
          .getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
              return;
            }

            map.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom + 3.2,
              duration: 3000,
            });
          });
      });

      // Center the map on the coordinates of any clicked label from the "city_point_labels" layer.
      map.current.on("click", "city_point_labels", (e) => {
        if (!map.current) {
          return;
        }

        map.current.flyTo({
          center: JSON.parse(e.features[0].properties.center),
          zoom: e.features[0].properties.zoom,
          bearing: e.features[0].properties.bearing,
          pitch: e.features[0].properties.pitch,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });

      map.current.on("click", "city_point_points", (e) => {
        if (!map.current) {
          return;
        }

        //point click
        //console.log("e.point", e.features[0].properties);
        const cityName = e.features[0].properties.City_Name;
        // console.log("cityName =>", cityName === "Mexico City");

        setSelectedCity(cityName);

        map.current.flyTo({
          center: JSON.parse(e.features[0].properties.center),
          zoom: e.features[0].properties.zoom,
          bearing: e.features[0].properties.bearing,
          pitch: e.features[0].properties.pitch,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
      });

      // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
      map.current.on("mouseenter", "city_point_labels", () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = "pointer";
      });

      map.current.on("mouseenter", "city_point_points", () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.current.on("mouseleave", "city_point_labels", () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = "";
      });

      map.current.on("mouseleave", "city_point_points", () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = "";
      });

      map.current.on("mouseenter", "city_point_clusters", () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = "pointer";
      });

      map.current.on("mouseleave", "city_point_clusters", () => {
        if (!map.current) {
          return;
        }

        map.current.getCanvas().style.cursor = "";
      });

      map.current.on("click", "city_cluster_hover", (e) => {
        if (!map.current) {
          return;
        }

        const cityName = e.features[0].properties.City_Name;

        // setSelectedCity(cityName);
      });

      // When the user moves their mouse over the state-fill layer, we'll update the
      // feature state for the feature under the mouse.
      map.current.on("mousemove", "city_cluster_hover", (e) => {
        if (e.features.length > 0) {
          if (!map.current) {
            return;
          }
          if (hoveredPolygonId !== null) {
            map.current.setFeatureState(
              { source: "city_clusters", id: hoveredPolygonId },
              { hover: false }
            );
          }

          hoveredPolygonId = e.features[0].id;
          // console.log(hoveredPolygonId);

          map.current.setFeatureState(
            { source: "city_clusters", id: hoveredPolygonId },
            { hover: true }
          );
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.current.on("mouseleave", "city_cluster_hover", () => {
        if (hoveredPolygonId !== null) {
          if (!map.current) {
            return;
          }

          map.current.setFeatureState(
            { source: "city_clusters", id: hoveredPolygonId },
            { hover: false }
          );
        }

        hoveredPolygonId = null;
      });
    });

    setMap(map.current);
  }, []);

  useEffect(() => {
    if (!map.current) {
      return;
    }

    map.current.easeTo({
      center: [55, 25],
      duration: 5000,
      zoom: 2.5,
      pitch: 15,
      easing: (n) => n,
    });
  }, [onEnter]);

  return (
    <div
      ref={mapContainerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        //animation: "globeAnimation 2s",
      }}
    />
  );
};

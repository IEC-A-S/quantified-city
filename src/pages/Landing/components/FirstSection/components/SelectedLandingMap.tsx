import { FC, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { initCitiesData } from "../../../../GraphAndGlobe/components/SelectedMap";

interface ISelectedMapProps {
  selectedCityName: string;
  setMap: (map: mapboxgl.Map) => void;
}

export const SelectedLandingMap: FC<ISelectedMapProps> = ({
  selectedCityName,
  setMap,
}) => {
  
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>(null);

  useEffect(() => {
    if (map.current || !mapContainerRef.current) return; // initialize map only once

    const initData = initCitiesData.find(
      (city) => city.properties.City_Name === selectedCityName
    )?.properties;

    map.current = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoidHNrbm9mZiIsImEiOiJjbGNxZDlxMnowNHV4M3JwZHp0ZTlvM2NiIn0.Tz-_y_F7EwR2NkPNA-Xlkw",
      attributionControl: true,
      container: mapContainerRef.current,
      style: "mapbox://styles/tsknoff/cmd8m8r45000601sahfyi9p6x",
      center: initData?.center,
      zoom: initData?.zoom - 0.5,
      bearing: initData?.bearing,
      pitch: initData?.pitch,
    });

    // map.current.addControl(new mapboxgl.NavigationControl());

    // map.current.scrollZoom.disable();

    map.current.on("load", () => {
      if (!map.current) return;

      map.current.resize();
      //Animation is based on increasing fill-extrusion-vertical-scale property from 0 to 1 based on a timestamp

      let start, previousTimeStamp;
      let done = false;

      function animatebars(timeStamp) {
        if (start === undefined) {
          start = timeStamp;
        }
        const elapsed = timeStamp - start;

        if (previousTimeStamp !== timeStamp) {
          // Math.min() is used here to make sure the element stops at exactly 1
          const count = Math.min(
            (initData?.vscale / 2500) * elapsed,
            initData?.vscale
          );

          map.current.setPaintProperty(
            "bars-2cl5je",
            "fill-extrusion-vertical-scale",
            count
          );

          if (count === 1) done = true;
        }

        if (elapsed < 2500) {
          // Stop the animation after 1 seconds
          previousTimeStamp = timeStamp;
          if (!done) {
            requestAnimationFrame(animatebars);
          }
        }
      }
      animatebars(0);
    });

    setMap(map.current);
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: "10vh",
        width: "100%",
        height: "90vh",
      }}
    ></div>
  );
};

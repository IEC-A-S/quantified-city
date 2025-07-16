import type { FC } from "react";
import type mapboxgl from "mapbox-gl";

interface IZoomButtons {
  map: mapboxgl.Map | null;
}

export const ZoomButtons: FC<IZoomButtons> = ({ map }) => {
  return (
    <div
      style={{
        userSelect: "none",
        position: "relative",
        zIndex: 2,
        height: "10.5vh",
        width: "4.7vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "50px",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        pointerEvents: "all",
      }}
    >
      <div
        onClick={() => {
          if (!map) {
            return;
          }

          map.zoomIn();
        }}
        style={{
          userSelect: "none",

          cursor: "pointer",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "50px",
          overflow: "hidden",
          padding: 0,
          margin: 0,
        }}
      >
        <img
          style={{
            userSelect: "none",
          }}
          src="/assets/plusIcon.svg"
          width={"45%"}
          alt="zoom in"
        />
      </div>
      <div
        onClick={() => {
          if (!map) {
            return;
          }

          // get zoom level
          const zoom = map.getZoom();
          if (zoom > 10.5) {
            map.zoomOut();
          }
        }}
        style={{
          cursor: "pointer",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "50px",
          overflow: "hidden",
          padding: 0,
          margin: 0,
          userSelect: "none",
        }}
      >
        <img src="/assets/minusIcon.svg" width={"45%"} alt="zoom out" />
      </div>
    </div>
  );
};

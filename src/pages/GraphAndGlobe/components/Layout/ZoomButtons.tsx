import type { FC } from "react";
import type mapboxgl from "mapbox-gl";

interface IZoomButtons {
  map: mapboxgl.Map | null;
}

export const ZoomButtons: FC<IZoomButtons> = ({ map }) => {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 2,
        marginRight: "15px",
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
        <img src="/assets/plusIcon.svg" width={"45%"} alt="zoom in" />
      </div>
      <div
        onClick={() => {
          if (!map) {
            return;
          }

          map.zoomOut();
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
        }}
      >
        <img src="/assets/minusIcon.svg" width={"45%"} alt="zoom out" />
      </div>
    </div>
  );
};

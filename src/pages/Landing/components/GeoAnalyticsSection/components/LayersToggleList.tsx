import { TextToggleButton } from "./TextToggleButton";
import { FC, useState } from "react";
import { useToggleButtonListStyles } from "./styles";
import type { Map } from "mapbox-gl";
import { useSelectedCityData } from "../../../../../hooks/useSelectedCityData";
import { getLayerData, getMapLayers } from "../helpers";
import type { Mode } from "../interfaces";
import { Switch } from "@mui/material";

interface ToggleButtonListProps {
  map: Map | null;
  isMobile?: boolean;
  setLegend: (legend: string | null | undefined) => void;
}

export const LayersToggleList: FC<ToggleButtonListProps> = ({
  map,
  isMobile,
  setLegend,
}) => {
  const cityData = useSelectedCityData();
  const layers = getMapLayers(cityData.City);
  const { classes } = useToggleButtonListStyles();
  const [mode, setMode] = useState<Mode>("2d");
  const [activeLayer, setActiveLayer] = useState<string | undefined>();

  const onSwitchClick = () => {
    if (!map) {
      return;
    }

    if (mode === "3d") {
      setMode("2d");

      if (!activeLayer) {
        return;
      }

      const prevActiveLayerData = getLayerData(layers[activeLayer], "3d");
      map.setLayoutProperty(
        prevActiveLayerData!.mapboxId,
        "visibility",
        "none"
      );

      const nextActiveLayerData = getLayerData(layers[activeLayer], "2d");
      map.setLayoutProperty(
        nextActiveLayerData!.mapboxId,
        "visibility",
        "visible"
      );

      setLegend(
        nextActiveLayerData!.legendSvgUrl
          ? nextActiveLayerData!.legendSvgUrl
          : nextActiveLayerData!.legendText
          ? nextActiveLayerData!.legendText
          : null
      );
    } else {
      setMode("3d");

      if (!activeLayer) {
        return;
      }

      const prevActiveLayerData = getLayerData(layers[activeLayer], "2d");
      map.setLayoutProperty(
        prevActiveLayerData!.mapboxId,
        "visibility",
        "none"
      );

      const nextActiveLayerData = getLayerData(layers[activeLayer], "3d");

      if (!nextActiveLayerData) {
        setLegend(null);
        setActiveLayer(undefined);
      } else {
        map.setLayoutProperty(
          nextActiveLayerData!.mapboxId,
          "visibility",
          "visible"
        );

        setLegend(
          nextActiveLayerData!.legendSvgUrl
            ? nextActiveLayerData!.legendSvgUrl
            : nextActiveLayerData!.legendText
            ? nextActiveLayerData!.legendText
            : null
        );
      }
    }
  };

  const onButtonClick = (layerName: string) => {
    if (!map) {
      return;
    }

    if (activeLayer) {
      const activeLayerData = getLayerData(layers[activeLayer], mode);
      map.setLayoutProperty(activeLayerData!.mapboxId, "visibility", "none");
    }

    const layerData = getLayerData(layers[layerName], mode);
    map.setLayoutProperty(layerData!.mapboxId, "visibility", "visible");

    setActiveLayer(layerName);

    setLegend(
      layerData!.legendSvgUrl
        ? layerData!.legendSvgUrl
        : layerData!.legendText
        ? layerData!.legendText
        : null
    );
  };

  const mobileStyle = {
    width: "100%",
    boxSizing: "border-box",
    height: "auto",
  };

  const mobileListStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: "8px",
    textAlign: "left",
  };
  return (
    <div className={classes.root} style={isMobile ? mobileStyle : {}}>
      <div
        className={classes.columnWrapper}
        style={isMobile ? mobileListStyle : {}}
      >
        <div
          style={{
            position: "absolute",
            top: -8,
            right: 0,
            zIndex: 1,
          }}
        >
          <Switch checked={mode === "3d"} onClick={onSwitchClick} />
        </div>
        {Object.entries(layers).map(([key, layer]) => {
          return (
            <TextToggleButton
              key={key}
              label={layer.label}
              isActive={key === activeLayer}
              disabled={mode === "3d" && !layer["3d"]}
              isMobile={isMobile}
              onClick={() => {
                onButtonClick(key);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

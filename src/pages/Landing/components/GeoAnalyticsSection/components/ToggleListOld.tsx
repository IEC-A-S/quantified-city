import { TextToggleButton } from "./TextToggleButton";
import { Switch } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useToggleButtonListStyles } from "./styles";
import type mapboxgl from "mapbox-gl";

const toggleableLayerIds = [
  "population",
  "urban cluster",
  "build up",
  "schools",
  "school service areas",
  "transport stops",
  "transport service areas",
  "green areas",
  "no2",
  "population NO2",
];

// Названия слоев в Mapbox
enum All_LAYERS_ENUM {
  POPULATION = "population",
  URBAN_CLUSTER = "urban cluster",
  BUILD_UP = "build up",
  SCHOOLS = "schools",
  SCHOOL_SERVICE_AREAS = "school service areas",
  TRANSPORT_STOPS = "transport stops",
  TRANSPORT_SERVICE_AREAS = "transport service areas",
  GREEN_AREAS = "green areas",
  NO2 = "no2",
  POPULATION_NO2 = "population NO2",
}

// Названия слоев в UI
const layersLabels = {
  [All_LAYERS_ENUM.POPULATION]: "Population",
  [All_LAYERS_ENUM.URBAN_CLUSTER]: "Urban cluster",
  [All_LAYERS_ENUM.BUILD_UP]: "Build up",
  [All_LAYERS_ENUM.SCHOOLS]: "Schools",
  [All_LAYERS_ENUM.SCHOOL_SERVICE_AREAS]: "School service areas",
  [All_LAYERS_ENUM.TRANSPORT_STOPS]: "Transport stops",
  [All_LAYERS_ENUM.TRANSPORT_SERVICE_AREAS]: "Transport service areas",
  [All_LAYERS_ENUM.GREEN_AREAS]: "Green areas",
  [All_LAYERS_ENUM.NO2]: "NO2",
  [All_LAYERS_ENUM.POPULATION_NO2]: "Population NO2",
};

interface ToggleButtonListProps {
  map: mapboxgl.Map | null;
}

export const ToggleButtonList: FC<ToggleButtonListProps> = ({ map }) => {
  const { classes } = useToggleButtonListStyles();
  // Состояние слоев
  const [listState, setListState] = useState({
    [All_LAYERS_ENUM.POPULATION]: false,
    [All_LAYERS_ENUM.URBAN_CLUSTER]: false,
    [All_LAYERS_ENUM.BUILD_UP]: false,
    [All_LAYERS_ENUM.NO2]: false,
    [All_LAYERS_ENUM.SCHOOLS]: false,
    [All_LAYERS_ENUM.SCHOOL_SERVICE_AREAS]: false,
    [All_LAYERS_ENUM.TRANSPORT_STOPS]: false,
    [All_LAYERS_ENUM.GREEN_AREAS]: false,
    [All_LAYERS_ENUM.TRANSPORT_SERVICE_AREAS]: false,
    [All_LAYERS_ENUM.POPULATION_NO2]: false,
  });

  // При загрузке карты отключаем все слои
  useEffect(() => {
    if (!map || !map.loaded()) return;

    disabledOtherLayers(undefined);
  }, []);

  const onClickHandler = (key: All_LAYERS_ENUM) => {
    disabledOtherLayers(key);
    setListState({ ...listState, [key]: !listState[key] });
    map?.setLayoutProperty(
      key,
      "visibility",
      listState[key] ? "none" : "visible"
    );
  };

  useEffect(() => {
    // console.log(listState);
  }, [listState]);

  const disabledOtherLayers = (excludeLayer: All_LAYERS_ENUM | undefined) => {
    Object.keys(listState).forEach((layer) => {
      if (layer !== excludeLayer) {
        map?.setLayoutProperty(layer, "visibility", "none");
        setListState({ ...listState, [layer]: false });
      }
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.populationWrapper}>
        <TextToggleButton label="Population" isTitle={true} />
        <Switch
          value={listState[All_LAYERS_ENUM.POPULATION]}
          onChange={() => {
            map?.setLayoutProperty(
              "population",
              "visibility",
              listState[All_LAYERS_ENUM.POPULATION] ? "none" : "visible"
            );
            setListState({
              ...listState,
              [All_LAYERS_ENUM.POPULATION]:
                !listState[All_LAYERS_ENUM.POPULATION],
            });
          }}
        />
      </div>

      {Object.keys(listState).map((layer) => {
        return (
          <TextToggleButton
            key={layer}
            label={layersLabels[layer as All_LAYERS_ENUM]}
            isActive={listState[layer as All_LAYERS_ENUM]}
            onClick={() => onClickHandler(layer as All_LAYERS_ENUM)}
          />
        );
      })}
    </div>
  );
};

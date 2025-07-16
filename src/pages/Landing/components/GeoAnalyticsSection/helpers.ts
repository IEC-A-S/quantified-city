import type { IMapLayer, IMapLayerInfo, Mode } from "./interfaces";
import {
  MAP_LAYERS_DUBAI,
  MAP_LAYERS_DAR_ES_SALAAM,
  MAP_LAYERS_ASTANA,
  MAP_LAYERS_LAHORE,
  MAP_LAYERS_NAIROBI,
} from "./consts";

export const getMapLayers = (city: string): Record<string, IMapLayer> => {
  switch (city) {
    case "Dubai":
      return MAP_LAYERS_DUBAI;
    case "Dar es Salaam":
      return MAP_LAYERS_DAR_ES_SALAAM;
    case "Astana":
      return MAP_LAYERS_ASTANA;
    case "Lahore":
      return MAP_LAYERS_LAHORE;
    case "Nairobi":
      return MAP_LAYERS_NAIROBI;
    default:
      throw new Error(`Unknown city: ${city}`);
  }
};

export const getLayerData = (
  layer: IMapLayer,
  mode: Mode
): IMapLayerInfo | undefined => {
  switch (mode) {
    case "2d":
      return layer["2d"];
    case "3d":
      return layer["3d"];
    default:
      throw new Error(`Unknown mode: ${mode}`);
  }
};

import type { IMapLayer } from "./interfaces";

export const MAP_LAYERS_DUBAI: Record<string, IMapLayer> = {
  population: {
    label: "Population",
    "2d": {
      mapboxId: "Population 2D",
      legendSvgUrl: "/legends/Dubai/population2d.svg",
    },
    "3d": {
      mapboxId: "Population 3D",
    },
  },
  so2: {
    label: "SO2",
    "2d": {
      mapboxId: "SO2 2D",
      legendSvgUrl: "/legends/Dubai/so2.svg",
    },
    "3d": {
      mapboxId: "Population 3D x SO2",
      legendSvgUrl: "/legends/Dubai/population3dxso2.svg",
    },
  },
  no2: {
    label: "NO2",
    "2d": {
      mapboxId: "NO2 2D",
      legendSvgUrl: "/legends/Dubai/no2.svg",
    },
    "3d": {
      mapboxId: "Population 3D x NO2",
      legendSvgUrl: "/legends/Dubai/population3dxno2.svg",
    },
  },
  o3: {
    label: "O3",
    "2d": {
      mapboxId: "O3 2D",
      legendSvgUrl: "/legends/Dubai/o3.svg",
    },
    "3d": {
      mapboxId: "Population 3D x O3",
      legendSvgUrl: "/legends/Dubai/population3dxo3.svg",
    },
  },
  co: {
    label: "CO",
    "2d": {
      mapboxId: "CO 2D",
      legendSvgUrl: "/legends/Dubai/co.svg",
    },
    "3d": {
      mapboxId: "Population 3D x CO",
      legendSvgUrl: "/legends/Dubai/population3dxco.svg",
    },
  },
  pm10: {
    label: "PM10",
    "2d": {
      mapboxId: "PM10 2D",
      legendSvgUrl: "/legends/Dubai/pm10.svg",
    },
    "3d": {
      mapboxId: "Population 3D x PM10",
      legendSvgUrl: "/legends/Dubai/population3dxpm10.svg",
    },
  },
  buildUp: {
    label: "Build up",
    "2d": {
      mapboxId: "Build up",
      legendSvgUrl: "/legends/Dubai/buildUp.svg",
    },
  },
  schools: {
    label: "Schools",
    "2d": {
      mapboxId: "Schools",
    },
  },
  schoolsServiceAreas: {
    label: "School service areas",
    "2d": {
      mapboxId: "School service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  transportStops: {
    label: "Transport stops",
    "2d": {
      mapboxId: "Transport stops",
    },
  },
  transportServiceAreas: {
    label: "Transport service areas",
    "2d": {
      mapboxId: "Transport service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one transport stop can be reached in a distance of less than one kilometre.",
    },
  },
  parks: {
    label: "Parks",
    "2d": {
      mapboxId: "Parks",
    },
  },
  parksServiceArea: {
    label: "Parks service area",
    "2d": {
      mapboxId: "Parks service area",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  freshWater: {
    label: "Fresh water",
    "2d": {
      mapboxId: "Fresh water",
    },
  },
  damagedLand: {
    label: "Damaged land",
    "2d": {
      mapboxId: "Damaged land",
    },
  },
  greenAreas: {
    label: "Green areas",
    "2d": {
      mapboxId: "Green areas",
    },
  },
};

export const MAP_LAYERS_DAR_ES_SALAAM: Record<string, IMapLayer> = {
  population: {
    label: "Population",
    "2d": {
      mapboxId: "Population 2D",
      legendSvgUrl: "/legends/DarEsSalaam/population2dDarEsSalam.svg",
    },
    "3d": {
      mapboxId: "Population 3D",
    },
  },
  so2: {
    label: "SO2",
    "2d": {
      mapboxId: "SO2 2D",
      legendSvgUrl: "/legends/DarEsSalaam/so2DarEsSalam.svg",
    },
    "3d": {
      mapboxId: "Population 3D x SO2",
      legendSvgUrl: "/legends/DarEsSalaam/population3dxso2DarEsSalam.svg",
    },
  },
  no2: {
    label: "NO2",
    "2d": {
      mapboxId: "NO2 2D",
      legendSvgUrl: "/legends/DarEsSalaam/no2DarEsSalam.svg",
    },
    "3d": {
      mapboxId: "Population 3D x NO2",
      legendSvgUrl: "/legends/DarEsSalaam/population3dxno2DarEsSalam.svg",
    },
  },
  o3: {
    label: "O3",
    "2d": {
      mapboxId: "O3 2D",
      legendSvgUrl: "/legends/DarEsSalaam/o3DarEsSalam.svg",
    },
    "3d": {
      mapboxId: "Population 3D x O3",
      legendSvgUrl: "/legends/DarEsSalaam/population3dxo3DarEsSalam.svg",
    },
  },
  co: {
    label: "CO",
    "2d": {
      mapboxId: "CO 2D",
      legendSvgUrl: "/legends/DarEsSalaam/coDarEsSalam.svg",
    },
    "3d": {
      mapboxId: "Population 3D x CO",
      legendSvgUrl: "/legends/DarEsSalaam/population3dxcoDarEsSalam.svg",
    },
  },
  pm10: {
    label: "PM10",
    "2d": {
      mapboxId: "PM10 2D",
      legendSvgUrl: "/legends/DarEsSalaam/pm10DarEsSalam.svg",
    },
    "3d": {
      mapboxId: "Population 3D x PM10",
      legendSvgUrl: "/legends/DarEsSalaam/population3dxpm10DarEsSalam.svg",
    },
  },
  buildUp: {
    label: "Build up",
    "2d": {
      mapboxId: "Build up",
      legendSvgUrl: "/legends/DarEsSalaam/buildupAreasDarEsSalaam.svg",
    },
  },
  schools: {
    label: "Schools",
    "2d": {
      mapboxId: "Schools",
    },
  },
  schoolsServiceAreas: {
    label: "School service areas",
    "2d": {
      mapboxId: "School service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  transportStops: {
    label: "Transport stops",
    "2d": {
      mapboxId: "Transport stops",
    },
  },
  transportServiceAreas: {
    label: "Transport service areas",
    "2d": {
      mapboxId: "Transport service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one transport stop can be reached in a distance of less than one kilometre.",
    },
  },
  parks: {
    label: "Parks",
    "2d": {
      mapboxId: "Parks",
    },
  },
  parksServiceArea: {
    label: "Parks service area",
    "2d": {
      mapboxId: "Parks service area",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  freshWater: {
    label: "Fresh water",
    "2d": {
      mapboxId: "Fresh water",
    },
  },
  damagedLand: {
    label: "Damaged land",
    "2d": {
      mapboxId: "Damaged land",
    },
  },
  greenAreas: {
    label: "Green areas",
    "2d": {
      mapboxId: "Green areas",
    },
  },
};

export const MAP_LAYERS_ASTANA: Record<string, IMapLayer> = {
  population: {
    label: "Population",
    "2d": {
      mapboxId: "Population 2D",
      legendSvgUrl: "/legends/Astana/population2dAstana.svg",
    },
    "3d": {
      mapboxId: "Population 3D",
    },
  },
  so2: {
    label: "SO2",
    "2d": {
      mapboxId: "SO2 2D",
      legendSvgUrl: "/legends/Astana/so2Astana.svg",
    },
    "3d": {
      mapboxId: "Population 3D x SO2",
      legendSvgUrl: "/legends/Astana/population3dxso2Astana.svg",
    },
  },
  no2: {
    label: "NO2",
    "2d": {
      mapboxId: "NO2 2D",
      legendSvgUrl: "/legends/Astana/no2Astana.svg",
    },
    "3d": {
      mapboxId: "Population 3D x NO2",
      legendSvgUrl: "/legends/Astana/population3dxno2Astana.svg",
    },
  },
  o3: {
    label: "O3",
    "2d": {
      mapboxId: "O3 2D",
      legendSvgUrl: "/legends/Astana/o3Astana.svg",
    },
    "3d": {
      mapboxId: "Population 3D x O3",
      legendSvgUrl: "/legends/Astana/population3dxo3Astana.svg",
    },
  },
  co: {
    label: "CO",
    "2d": {
      mapboxId: "CO 2D",
      legendSvgUrl: "/legends/Astana/coAstana.svg",
    },
    "3d": {
      mapboxId: "Population 3D x CO",
      legendSvgUrl: "/legends/Astana/population3dxcoAstana.svg",
    },
  },
  pm10: {
    label: "PM10",
    "2d": {
      mapboxId: "PM10 2D",
      legendSvgUrl: "/legends/Astana/pm10Astana.svg",
    },
    "3d": {
      mapboxId: "Population 3D x PM10",
      legendSvgUrl: "/legends/Astana/population3dxpm10Astana.svg",
    },
  },
  buildUp: {
    label: "Build up",
    "2d": {
      mapboxId: "Build up",
      legendSvgUrl: "/legends/Astana/buildupAreasAstana.svg",
    },
  },
  police: {
    label: "Police stations",
    "2d": {
      mapboxId: "Police stations",
    },
  },
  policeServiceAreas: {
    label: "Police service areas",
    "2d": {
      mapboxId: "Police service areas",
    },
  },
  ambulance: {
    label: "Ambulance stations",
    "2d": {
      mapboxId: "Ambulance stations",
    },
  },
  ambulanceServiceAreas: {
    label: "Ambulance service areas",
    "2d": {
      mapboxId: "Ambulance service areas",
    },
  },
  schools: {
    label: "Schools",
    "2d": {
      mapboxId: "Schools",
    },
  },
  schoolsServiceAreas: {
    label: "School service areas",
    "2d": {
      mapboxId: "School service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  transportStops: {
    label: "Transport stops",
    "2d": {
      mapboxId: "Transport stops",
    },
  },
  transportServiceAreas: {
    label: "Transport service areas",
    "2d": {
      mapboxId: "Transport service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one transport stop can be reached in a distance of less than one kilometre.",
    },
  },
  parks: {
    label: "Parks",
    "2d": {
      mapboxId: "Parks",
    },
  },
  parksServiceArea: {
    label: "Parks service area",
    "2d": {
      mapboxId: "Parks service area",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  freshWater: {
    label: "Fresh water",
    "2d": {
      mapboxId: "Fresh water",
    },
  },
  damagedLand: {
    label: "Damaged land",
    "2d": {
      mapboxId: "Damaged land",
    },
  },
  greenAreas: {
    label: "Green areas",
    "2d": {
      mapboxId: "Green areas",
    },
  },
};

export const MAP_LAYERS_LAHORE: Record<string, IMapLayer> = {
  population: {
    label: "Population",
    "2d": {
      mapboxId: "Population 2D",
      legendSvgUrl: "/legends/Lahore/population2d.svg",
    },
    "3d": {
      mapboxId: "Population 3D",
    },
  },
  so2: {
    label: "SO2",
    "2d": {
      mapboxId: "SO2 2D",
      legendSvgUrl: "/legends/Lahore/so2.svg",
    },
    "3d": {
      mapboxId: "Population 3D x SO2",
      legendSvgUrl: "/legends/Lahore/population3dxso2.svg",
    },
  },
  no2: {
    label: "NO2",
    "2d": {
      mapboxId: "NO2 2D",
      legendSvgUrl: "/legends/Lahore/no2.svg",
    },
    "3d": {
      mapboxId: "Population 3D x NO2",
      legendSvgUrl: "/legends/Lahore/population3dxno2.svg",
    },
  },
  o3: {
    label: "O3",
    "2d": {
      mapboxId: "O3 2D",
      legendSvgUrl: "/legends/Lahore/o3.svg",
    },
    "3d": {
      mapboxId: "Population 3D x O3",
      legendSvgUrl: "/legends/Lahore/population3dxo3.svg",
    },
  },
  co: {
    label: "CO",
    "2d": {
      mapboxId: "CO 2D",
      legendSvgUrl: "/legends/Lahore/co.svg",
    },
    "3d": {
      mapboxId: "Population 3D x CO",
      legendSvgUrl: "/legends/Lahore/population3dxco.svg",
    },
  },
  pm10: {
    label: "PM10",
    "2d": {
      mapboxId: "PM10 2D",
      legendSvgUrl: "/legends/Lahore/pm10.svg",
    },
    "3d": {
      mapboxId: "Population 3D x PM10",
      legendSvgUrl: "/legends/Lahore/population3dxpm10.svg",
    },
  },
  buildUp: {
    label: "Build up",
    "2d": {
      mapboxId: "Build up",
      legendSvgUrl: "/legends/Lahore/buildupAreas.svg",
    },
  },
  schools: {
    label: "Schools",
    "2d": {
      mapboxId: "Schools",
    },
  },
  schoolsServiceAreas: {
    label: "School service areas",
    "2d": {
      mapboxId: "School service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  transportStops: {
    label: "Transport stops",
    "2d": {
      mapboxId: "Transport stops",
    },
  },
  transportServiceAreas: {
    label: "Transport service areas",
    "2d": {
      mapboxId: "Transport service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one transport stop can be reached in a distance of less than one kilometre.",
    },
  },
  parks: {
    label: "Parks",
    "2d": {
      mapboxId: "Parks",
    },
  },
  parksServiceArea: {
    label: "Parks service area",
    "2d": {
      mapboxId: "Parks service area",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  freshWater: {
    label: "Fresh water",
    "2d": {
      mapboxId: "Fresh water",
    },
  },
  damagedLand: {
    label: "Damaged land",
    "2d": {
      mapboxId: "Damaged land",
    },
  },
  greenAreas: {
    label: "Green areas",
    "2d": {
      mapboxId: "Green areas",
    },
  },
};

export const MAP_LAYERS_NAIROBI: Record<string, IMapLayer> = {
  population: {
    label: "Population",
    "2d": {
      mapboxId: "Population 2D",
      legendSvgUrl: "/legends/Nairobi/population2dNairobi.svg",
    },
    "3d": {
      mapboxId: "Population 3D",
    },
  },
  so2: {
    label: "SO2",
    "2d": {
      mapboxId: "SO2 2D",
      legendSvgUrl: "/legends/Nairobi/so2Nairobi.svg",
    },
    "3d": {
      mapboxId: "Population 3D x SO2",
      legendSvgUrl: "/legends/Nairobi/population3dxso2Nairobi.svg",
    },
  },
  no2: {
    label: "NO2",
    "2d": {
      mapboxId: "NO2 2D",
      legendSvgUrl: "/legends/Nairobi/no2Nairobi.svg",
    },
    "3d": {
      mapboxId: "Population 3D x NO2",
      legendSvgUrl: "/legends/Nairobi/population3dxno2Nairobi.svg",
    },
  },
  o3: {
    label: "O3",
    "2d": {
      mapboxId: "O3 2D",
      legendSvgUrl: "/legends/Nairobi/o3Nairobi.svg",
    },
    "3d": {
      mapboxId: "Population 3D x O3",
      legendSvgUrl: "/legends/Nairobi/population3dxo3Nairobi.svg",
    },
  },
  co: {
    label: "CO",
    "2d": {
      mapboxId: "CO 2D",
      legendSvgUrl: "/legends/Nairobi/coNairobi.svg",
    },
    "3d": {
      mapboxId: "Population 3D x CO",
      legendSvgUrl: "/legends/Nairobi/population3dxcoNairobi.svg",
    },
  },
  pm10: {
    label: "PM10",
    "2d": {
      mapboxId: "PM10 2D",
      legendSvgUrl: "/legends/Nairobi/pm10Nairobi.svg",
    },
    "3d": {
      mapboxId: "Population 3D x PM10",
      legendSvgUrl: "/legends/Nairobi/population3dxpm10Nairobi.svg",
    },
  },
  buildUp: {
    label: "Build up",
    "2d": {
      mapboxId: "Build up",
      legendSvgUrl: "/legends/Nairobi/buildupAreasNairobi.svg",
    },
  },
  schools: {
    label: "Schools",
    "2d": {
      mapboxId: "Schools",
    },
  },
  schoolsServiceAreas: {
    label: "School service areas",
    "2d": {
      mapboxId: "School service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  transportStops: {
    label: "Transport stops",
    "2d": {
      mapboxId: "Transport stops",
    },
  },
  transportServiceAreas: {
    label: "Transport service areas",
    "2d": {
      mapboxId: "Transport service areas",
      legendText:
        "The 1 kilometre service area is an area where at least one transport stop can be reached in a distance of less than one kilometre.",
    },
  },
  parks: {
    label: "Parks",
    "2d": {
      mapboxId: "Parks",
    },
  },
  parksServiceArea: {
    label: "Parks service area",
    "2d": {
      mapboxId: "Parks service area",
      legendText:
        "The 1 kilometre service area is an area where at least one park can be reached in a distance of less than one kilometre.",
    },
  },
  freshWater: {
    label: "Fresh water",
    "2d": {
      mapboxId: "Fresh water",
    },
  },
  damagedLand: {
    label: "Damaged land",
    "2d": {
      mapboxId: "Damaged land",
    },
  },
  greenAreas: {
    label: "Green areas",
    "2d": {
      mapboxId: "Green areas",
    },
  },
};

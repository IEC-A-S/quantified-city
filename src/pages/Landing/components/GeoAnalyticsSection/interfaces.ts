export interface IMapLayer {
  label: string;
  "2d": IMapLayerInfo;
  "3d"?: IMapLayerInfo;
}
export interface IMapLayerInfo {
  mapboxId: string;
  legendSvgUrl?: string;
  legendText?: string;
}

export type Mode = "2d" | "3d";

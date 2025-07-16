export interface IIndicatorsDataByCities {
  city: string;
  data: IIndicatorData[];
}

export interface IIndicatorData {
  category: string;
  indicator: string;
  value: number;
  natural_value: number;
}

export interface ICityIndicatorData
  extends IIndicatorData,
    Pick<IIndicatorsDataByCities, "city"> {}

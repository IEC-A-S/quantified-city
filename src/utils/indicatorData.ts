interface IBaseIndicatorData {
  category: string;
  indicator: string;
  value: number;
  natural_value: number;
  unit?: string;
}

interface ICityIndicatorsData<TIndicator extends IBaseIndicatorData> {
  city: string;
  data: TIndicator[];
}

interface IIndicatorValueRow {
  City: string;
  Indicator: string;
  Assessment?: number;
  Value?: number;
}

interface IIndicatorDescriptionRow {
  City: string;
  Indicator: string;
  Unit?: string;
}

const CITY_ALIASES: Record<string, string[]> = {
  "Экспо-сити Дубай": ["Дубай Экспо"],
};

const getCityNames = (city: string) => [city, ...(CITY_ALIASES[city] ?? [])];

const getIndicatorValueRow = (
  cityRows: IIndicatorValueRow[],
  indicator: IBaseIndicatorData,
  index: number
) => {
  return (
    cityRows.find((row) => row.Indicator === indicator.indicator) ?? cityRows[index]
  );
};

const getIndicatorDescriptionRow = (
  cityRows: IIndicatorDescriptionRow[],
  indicator: IBaseIndicatorData,
  index: number
) => {
  return (
    cityRows.find((row) => row.Indicator === indicator.indicator) ?? cityRows[index]
  );
};

export const enrichIndicatorData = <TIndicator extends IBaseIndicatorData>(
  indicatorDataByCitiesArr: ICityIndicatorsData<TIndicator>[],
  newValuesForIndicators: IIndicatorValueRow[],
  newIndicatorsDescription: IIndicatorDescriptionRow[]
) =>
  indicatorDataByCitiesArr.map((cityData) => {
    const cityNames = getCityNames(cityData.city);
    const cityValueRows = newValuesForIndicators.filter((row) =>
      cityNames.includes(row.City)
    );
    const cityDescriptionRows = newIndicatorsDescription.filter((row) =>
      cityNames.includes(row.City)
    );

    return {
      ...cityData,
      data: cityData.data.map((indicator, index) => {
        const newValues = getIndicatorValueRow(cityValueRows, indicator, index);
        const newDescription = getIndicatorDescriptionRow(
          cityDescriptionRows,
          indicator,
          index
        );

        return {
          ...indicator,
          value: newValues?.Assessment ?? indicator.value,
          natural_value:
            newValues && newValues.Value === 0
              ? 0
              : newValues?.Value ?? indicator.natural_value,
          unit: newDescription?.Unit ?? indicator.unit,
        };
      }),
    };
  });

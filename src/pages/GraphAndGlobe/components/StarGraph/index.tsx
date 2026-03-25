import type { FC } from "react";
import { Radar } from "react-chartjs-2";
import type { ICityIndicatorData, IIndicatorsDataByCities } from "./interfaces";
import { CitySelectorsSet } from "./CitySelectorsSet";
import { getData, getRadarData } from "./helpers";
import { getOptions } from "./helpers";
import { useSelectedCities } from "./useSelectedCities";

interface IProps {
  indicatorDataByCitiesArr: IIndicatorsDataByCities[];
  currentCity: string;
  category: string;
  colors: string[];
}

export const StarGraph: FC<IProps> = ({
  indicatorDataByCitiesArr,
  currentCity,
  category,
  colors,
}) => {
  const radarDataArr: ICityIndicatorData[][] = indicatorDataByCitiesArr
    .map((cityData: IIndicatorsDataByCities) => getRadarData(cityData, category))
    .filter((cityData) => cityData.length > 0);

  const cities = radarDataArr.map((cityData) => cityData[0].city);
  const currentCityData =
    radarDataArr.find((cityData) => cityData[0].city === currentCity) ?? [];

  if (currentCityData.length === 0) {
    return null;
  }

  const [selectedCityDataArr, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities,
    radarDataArr
  );

  const options = getOptions();
  const data = getData(colors)(currentCityData, selectedCityDataArr);

  return (
    <>
      <Radar
        style={{
          position: "absolute",
          top: "50%",
          right: "4vh",
          transform: "translateY(-50%)",
          boxSizing: "border-box",
          display: "block",
          height: 805,
          width: 1000,
        }}
        data={data}
        options={options}
      />
      <CitySelectorsSet
        currentCity={currentCity}
        selectedCities={selectedCityDataArr.map((cityData) => cityData[0].city)}
        cities={cities}
        colors={colors}
        onChange={onSelectedCitiesChange}
      />
    </>
  );
};

import { Line } from "react-chartjs-2";
import {
  getCitiIndicatorData,
  getData,
  getMobileOptions,
  getOptions,
} from "./helpers";
import { CitySelectorsSet } from "./CitySelectorsSet";
import { useSelectedCities } from "./useSelectedCities";
import type { FC } from "react";
import type { ICityIndicatorData, IIndicatorsDataByCities } from "./interfaces";

// const yLabels = ["Very low", "Low", "Average", "Strong", "Very strong"];
// const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface IProps {
  isMobile?: boolean;
  indicatorDataByCitiesArr: IIndicatorsDataByCities[];
  currentCity: string;
  category: string;
  indicator: string;
  yLabels: string[];
  yColors: string[];
}

export const IndicatorChart: FC<IProps> = ({
  isMobile,
  indicatorDataByCitiesArr,
  currentCity,
  category,
  indicator,
  yLabels,
  yColors,
}) => {
  const cities = indicatorDataByCitiesArr.map((cityData) => cityData.city);
  const currentCityData = getCitiIndicatorData(
    indicatorDataByCitiesArr.find(
      (cityData: IIndicatorsDataByCities) => cityData.city === currentCity
    )!,
    category,
    indicator
  );
  const indicatorDataArr: ICityIndicatorData[] = indicatorDataByCitiesArr.map(
    (cityData: IIndicatorsDataByCities) =>
      getCitiIndicatorData(cityData, category, indicator)
  );

  const [selectedCities, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities
  );

  const selectedCityDataArr = selectedCities
    .map((city) => indicatorDataArr.find((item) => item.city === city)!)
    .slice(0, 5)
    .sort((a, b) => a.natural_value - b.natural_value);

  const mobileOptions = getMobileOptions(currentCityData, selectedCityDataArr);

  const options = getOptions(currentCityData, selectedCityDataArr);

  const data = getData(yLabels, yColors)(currentCityData, selectedCityDataArr);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        position: isMobile ? "relative" : "absolute",
        bottom: "5vh",
        left: "0",
      }}
    >
      {isMobile ? (
        <Line
          width="600px"
          height="400px"
          options={mobileOptions}
          data={data}
        />
      ) : (
        <Line width="1260px" height="330px" options={options} data={data} />
      )}
      <CitySelectorsSet
        isMobile={isMobile}
        currentCity={currentCityData.city}
        selectedCities={selectedCityDataArr.map((cityData) => cityData.city)}
        cities={cities}
        onChange={onSelectedCitiesChange}
      />
    </div>
  );
};

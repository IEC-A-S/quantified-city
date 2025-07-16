import type { FC } from "react";
import type { ITimeLossInTrafficData } from "./interfaces";
import { CitySelectorsSet } from "../IndicatorChart/CitySelectorsSet";
import { useSelectedCities } from "../IndicatorChart/useSelectedCities";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartTypeRegistry,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  BoxPlotController,
  BoxAndWiskers,
} from "@sgratzl/chartjs-chart-boxplot";
import { getData, getMobileOptions, getOptions } from "./helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BoxPlotController,
  BoxAndWiskers
);

interface IProps {
  isMobile?: boolean;
  dataArr: ITimeLossInTrafficData[];
  currentCity: string;
  statuses: { city: string; status: string }[];
}

export const TimeLossInTrafficChart: FC<IProps> = ({
  isMobile,
  dataArr,
  currentCity,
  statuses,
}) => {
  const cities = dataArr
    .map((cityData) => cityData.city)
    .filter((city, index, array) => array.indexOf(city) === index);

  const currentCityData = dataArr.filter((item) => item.city === currentCity);

  const [selectedCities, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities
  );

  const selectedCityDataArr = selectedCities
    .map((city) => dataArr.filter((item) => item.city === city))
    .slice(0, 5);

  const mobileOptions = getMobileOptions(currentCityData, selectedCityDataArr);

  const options = getOptions(currentCityData, selectedCityDataArr);

  const data = getData(statuses)(currentCityData, selectedCityDataArr);

  // console.log("data", data);

  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        position: isMobile ? "relative" : "unset",
        bottom: "15vh",
        left: "0",
      }}
    >
      {isMobile ? (
        <Chart<keyof ChartTypeRegistry>
          type="boxplot"
          width="600px"
          height="400px"
          options={mobileOptions}
          data={data}
        />
      ) : (
        <Chart<keyof ChartTypeRegistry>
          type="boxplot"
          width="1260px"
          height="330px"
          options={options}
          data={data}
        />
      )}
      <CitySelectorsSet
        isMobile={isMobile}
        currentCity={currentCity}
        selectedCities={selectedCities.slice(0, 5)}
        cities={cities}
        onChange={onSelectedCitiesChange}
      />
    </div>
  );
};

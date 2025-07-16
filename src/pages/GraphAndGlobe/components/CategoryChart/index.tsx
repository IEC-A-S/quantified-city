import { Line } from "react-chartjs-2";
import { getData, getMobileOptions, getOptions } from "./helpers";
import { CitySelectorsSet } from "./CitySelectorsSet";
import { useSelectedCities } from "./useSelectedCities";
import type { FC } from "react";
import type { ICityCategoryData } from "./interfaces";

// const yLabels = ["Very low", "Low", "Average", "Strong", "Very strong"];
// const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface IProps {
  isMobile?: boolean;
  categoryDataArr: ICityCategoryData[];
  currentCity: string;
  category: string;
  yLabels: string[];
  yColors: string[];
}

export const CategoryChart: FC<IProps> = ({
  isMobile,
  categoryDataArr,
  currentCity,
  category,
  yLabels,
  yColors,
}) => {
  const currentCityData = categoryDataArr.find(
    (cityData) => cityData.City === currentCity
  )!;
  const cities = categoryDataArr.map((cityData) => cityData.City);

  const [selectedCities, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities
  );

  const selectedCityDataArr = selectedCities
    .map((city) => categoryDataArr.find((item) => item.City === city)!)
    .slice(0, 5)
    .sort((a, b) => a[category] - b[category]);

  const mobileOptions = getMobileOptions(
    yLabels,
    yColors
  )([currentCityData, ...selectedCityDataArr].map((cityData) => cityData.City));

  const options = getOptions(
    yLabels,
    yColors
  )([currentCityData, ...selectedCityDataArr].map((cityData) => cityData.City));

  const data = getData(yLabels, yColors)(
    currentCityData,
    selectedCityDataArr,
    category
  );

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
        currentCity={currentCityData.City}
        selectedCities={selectedCityDataArr.map((cityData) => cityData.City)}
        cities={categoryDataArr.map((cityData) => cityData.City)}
        onChange={onSelectedCitiesChange}
      />
    </div>
  );
};

import { useState } from "react";
import type { ICityIndicatorData } from "./interfaces";

export const useSelectedCities = (
  currentCity: string,
  cities: string[],
  cityDataArr: ICityIndicatorData[][]
): [
  selectedCityDataArr: ICityIndicatorData[][],
  onSelectedCitiesChange: (menuIndex: number) => (newCity: string) => void,
] => {
  const [selectedCityDataArr, setSelectedCityDataArr] = useState<
    ICityIndicatorData[][]
  >(
    cities
      .filter((city) => city !== currentCity)
      .map((city) => cityDataArr.find((arr) => arr[0].city === city)!)
      .slice(0, 5)
  );

  const onSelectedCitiesChange = (menuIndex: number) => (newCity: string) => {
    const newCityData = cityDataArr.find(
      (cityDataArr) => cityDataArr[0].city === newCity
    )!;

    setSelectedCityDataArr(
      selectedCityDataArr.map((item, index) =>
        index === menuIndex ? newCityData : item
      )
    );
  };

  return [selectedCityDataArr, onSelectedCitiesChange];
};

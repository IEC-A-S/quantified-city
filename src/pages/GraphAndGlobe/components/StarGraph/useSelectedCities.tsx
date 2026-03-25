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
      .map((city) =>
        cityDataArr.find((arr) => arr.length > 0 && arr[0].city === city)
      )
      .filter((cityData): cityData is ICityIndicatorData[] => Boolean(cityData))
      .slice(0, 5)
  );

  const onSelectedCitiesChange = (menuIndex: number) => (newCity: string) => {
    const newCityData = cityDataArr.find(
      (cityDataArr) => cityDataArr.length > 0 && cityDataArr[0].city === newCity
    );

    if (!newCityData) {
      return;
    }

    setSelectedCityDataArr(
      selectedCityDataArr.map((item, index) =>
        index === menuIndex ? newCityData : item
      )
    );
  };

  return [selectedCityDataArr, onSelectedCitiesChange];
};

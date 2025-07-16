import { useState } from "react";
import type { ICityData } from "./interfaces";

export const useSelectedCities = (
  currentCity: string,
  cities: string[],
  cityDataArr: ICityData[]
): [
  selectedCityDataArr: ICityData[],
  onSelectedCitiesChange: (menuIndex: number) => (newCity: string) => void,
] => {
  const [selectedCityDataArr, setSelectedCityDataArr] = useState<ICityData[]>(
    cities
      .filter((city) => city !== currentCity)
      .map((city) => cityDataArr.find((data) => data.City === city)!)
      .slice(0, 5)
  );

  const onSelectedCitiesChange = (menuIndex: number) => (newCity: string) => {
    const newCityData = cityDataArr.find((data) => data.City === newCity)!;

    setSelectedCityDataArr(
      selectedCityDataArr.map((item, index) =>
        index === menuIndex ? newCityData : item
      )
    );
  };

  return [selectedCityDataArr, onSelectedCitiesChange];
};

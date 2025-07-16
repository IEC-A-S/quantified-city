import { useState } from "react";

export const useSelectedCities = (
  currentCity: string,
  cities: string[]
): [
  selectedCities: string[],
  onSelectedCitiesChange: (menuIndex: number) => (newCity: string) => void,
] => {
  const [selectedCities, setSelectedCities] = useState<string[]>(
    cities.filter((city) => city !== currentCity).slice(0, 5)
  );

  const onSelectedCitiesChange = (menuIndex: number) => (newCity: string) => {
    setSelectedCities(
      selectedCities.map((item, index) =>
        index === menuIndex ? newCity : item
      )
    );
  };

  return [selectedCities, onSelectedCitiesChange];
};

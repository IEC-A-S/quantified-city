import { useState } from "react";

export const useSelectedCities = (
  currentCity: string,
  cities: string[]
): [
  selectedCities: string[],
  onSelectedCitiesChange: (menuCity: string) => (newCity: string) => void,
] => {
  const [selectedCities, setSelectedCities] = useState<string[]>(
    cities.filter((city) => city !== currentCity).slice(0, 5)
  );

  const onSelectedCitiesChange = (menuCity: string) => (newCity: string) => {
    setSelectedCities(
      selectedCities.map((item) => (item === menuCity ? newCity : item))
    );
  };

  return [selectedCities, onSelectedCitiesChange];
};

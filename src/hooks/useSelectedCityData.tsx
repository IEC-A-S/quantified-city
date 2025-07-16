import { useContext } from "react";
import { CityContext } from "../providers/contexts";

export const useSelectedCityData = () => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error(
      "useSelectedCityData must be used within a CityDataProvider"
    );
  }

  return context;
};

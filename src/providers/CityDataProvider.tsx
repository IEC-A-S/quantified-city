import type { CityData } from "../data";
import type { ReactNode } from "react";
import { CityContext } from "./contexts";

interface CityDataProviderProps {
  cityData: CityData | undefined;
  children: ReactNode;
}

export const CityDataProvider = ({
  cityData,
  children,
}: CityDataProviderProps) => {
  return (
    <CityContext.Provider value={cityData}>{children}</CityContext.Provider>
  );
};

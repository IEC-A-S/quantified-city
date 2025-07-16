import { createContext } from "react";
import type { CityData } from "../data";

export const CityContext = createContext<CityData | undefined>(undefined);

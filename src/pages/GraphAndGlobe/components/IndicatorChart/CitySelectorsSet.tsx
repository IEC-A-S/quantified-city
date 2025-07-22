import type { FC } from "react";
import { CityMenu } from "./CityMenu";
import React from "react";

interface IProps {
  isMobile?: boolean;
  currentCity: string;
  selectedCities: string[];
  cities: string[];
  onChange(menuCity: string): (newCity: string) => void;
}

export const CitySelectorsSet: FC<IProps> = ({
  isMobile,
  currentCity,
  selectedCities,
  cities,
  onChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        width: isMobile ? "calc(100vw - 105px)" : "auto",
        // paddingLeft: 93,
        paddingLeft: isMobile ? "40px" : 93,
        paddingRight: 10,
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          width: isMobile ? "unset" : "220",
          height: 35,
          marginTop: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            width: isMobile ? "0vw" : "unset",
            color: "#fff",
            fontSize: isMobile ? "2vw" : "2.5vh",
            fontWeight: 400,
            
          }}
        >
          {currentCity}
        </span>
      </div>
      {selectedCities.map((city) => (
        <CityMenu
          isMobile={isMobile}
          cities={cities.filter(
            (city) => !selectedCities.includes(city) && city !== currentCity
          )}
          value={city}
          onChange={onChange(city)}
          key={city}
        />
      ))}
    </div>
  );
};

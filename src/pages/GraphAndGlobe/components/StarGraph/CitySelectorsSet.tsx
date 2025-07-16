import type { FC } from "react";
import React from "react";
import { Button } from "@mui/material";
import { CityMenu } from "./CityMenu";

interface IProps {
  currentCity: string;
  selectedCities: string[];
  cities: string[];
  colors: string[];
  onChange(menuIndex: number): (newCity: string) => void;
}

export const CitySelectorsSet: FC<IProps> = ({
  currentCity,
  selectedCities,
  cities,
  colors,
  onChange,
}) => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        position: "absolute",
        left: "8vh",
        top: "53vh",
      }}
    >
      <Button type="button">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "1.2vh",
              height: "1.2vh",
              borderRadius: "50%",
              backgroundColor: colors[0],
              marginRight: "1vh",
            }}
          ></div>
          <div
            style={{
              fontFamily: "SuisseIntl-Regular",
              fontSize: "3.1vh",
              fontWeight: 600,
              textAlign: "center",
              color: colors[0],
              textTransform: "none",
            }}
          >
            {currentCity}
          </div>
        </div>
      </Button>
      {selectedCities.map((city, index) => (
        <CityMenu
          value={city}
          cities={cities.filter(
            (city) => !selectedCities.includes(city) && city !== currentCity
          )}
          color={colors[index + 1]}
          onChange={onChange(index)}
          key={city}
        />
      ))}
    </div>
  );
};

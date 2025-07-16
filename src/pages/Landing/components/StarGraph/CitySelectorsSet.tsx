import type { FC } from "react";
import React from "react";
import { Button } from "@mui/material";
import { CityMenu } from "./CityMenu";

interface IProps {
  currentCity: string;
  selectedCities: string[];
  cities: string[];
  colors: string[];
  isMobile?: boolean;
  onChange(menuIndex: number): (newCity: string) => void;
}

export const CitySelectorsSet: FC<IProps> = ({
  currentCity,
  selectedCities,
  cities,
  colors,
  isMobile,
  onChange,
}) => {
  const mobileStyle = {
    paddingTop: "16px",
    paddingBottom: "16px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };
  return (
    <div style={isMobile ? mobileStyle : {}}>
      <Button
        type="button"
        style={{
          display: isMobile ? "none" : "block",
        }}
      >
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
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

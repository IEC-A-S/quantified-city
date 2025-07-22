import { Radar } from "react-chartjs-2";
import { CitySelectorsSet } from "./CitySelectorsSet";
import { getData } from "./helpers";
import { getOptions } from "./helpers";
import { useSelectedCities } from "./useSelectedCities";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import type { FC } from "react";
import type { ICityData } from "./interfaces";
import { StarGraphWrapper } from "./StarGraphWrapper";
import type { ISentimentDTO } from "../StarGraph/interfaces";

interface IProps {
  cityDataArr: ISentimentDTO[];
  currentCity: string;
  colors: string[];
  setSentimentPopupOpen: (open: boolean) => void;
}

export const UrbanSentimentSection: FC<IProps> = ({
  cityDataArr,
  currentCity,
  colors,
  setSentimentPopupOpen,
}) => {
  const { classes } = useImageSectionStyles();

  const cities = cityDataArr.map((cityData) => cityData.City);
  const currentCityData = cityDataArr.find(
    (cityData: ISentimentDTO) => cityData.City === currentCity
  )!;

  const [selectedCityDataArr, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities,
    cityDataArr
  );

  const options = getOptions();
  const data = getData(colors)(currentCityData, selectedCityDataArr);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#F0EAD6",
        margin: "0 15%",
      }}
    >
      <div className={classes.root}>
        <div
          style={{
            position: "absolute",
            top: "15vh",
            right: "8vw",
            width: "80vh",
            zIndex: 1,
          }}
        >
          <Radar
            id="star-graph"
            style={{
              position: "absolute",
              // top: "50%",
              left: "4vw",
              // transform: "translateY(-50%)",
              boxSizing: "border-box",
              display: "block",
              height: 805,
              width: 1000,
            }}
            data={data}
            options={options}
          />
        </div>
        <StarGraphWrapper setSentimentPopupOpen={setSentimentPopupOpen}>
          <CitySelectorsSet
            currentCity={currentCity}
            selectedCities={selectedCityDataArr.map(
              (cityData) => cityData.City
            )}
            cities={cities}
            colors={colors}
            onChange={onSelectedCitiesChange}
          />
        </StarGraphWrapper>
      </div>
    </div>
  );
};

import { Typography } from "@mui/material";
import { IndicatorChart } from "../../../../../pages/GraphAndGlobe/components/IndicatorChart";
import indicatorDataByCitiesArr from "../../../../../data/indicatorsData.json";
import newValuesForIndicators from "../../../../../data/indeicatorsData_newValues.json";
import newIndicatorsDescription from "../../../../../data/indicatorDescriptionData.json";
import { usePopupStyles } from "../index";
import { type FC, useState } from "react";

const yLabels = ["Very low", "Low", "Average", "Strong", "Very strong"];
const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface ThirdSectionProps {
  city: string;
  category: string;
}

export const ThirdSection: FC<ThirdSectionProps> = ({ city, category }) => {
  const { classes } = usePopupStyles();

  const indicatorsDataNewValues = indicatorDataByCitiesArr.map((cityData) => {
    const indicatorsData = cityData.data.map((indicator) => {
      const newValues = newValuesForIndicators.find(
        (newValues) =>
          newValues.City === cityData.city &&
          newValues.Indicator === indicator.indicator
      );
      const newDescription = newIndicatorsDescription.find(
        (newDescription) =>
          newDescription.City === cityData.city &&
          newDescription.Indicator === indicator.indicator
      );
      if (newValues?.Value === 0) {
        return {
          ...indicator,
          value: newValues?.Assessment ? newValues.Assessment : indicator.value,
          natural_value: 0,
          unit: newDescription?.Unit ? newDescription.Unit : indicator.unit,
        };
      } else {
        return {
          ...indicator,
          value: newValues?.Assessment ? newValues.Assessment : indicator.value,
          natural_value: newValues?.Value ? newValues.Value : indicator.natural_value,
          unit: newDescription?.Unit ? newDescription.Unit : indicator.unit,
        };
      }
    });
    return {
      ...cityData,
      data: indicatorsData,
    };
  });

  const indicatorsDataByCurrentCityAndCategory = indicatorsDataNewValues
    .find((cityData) => cityData.city === city)!
    .data.filter((indicator) => indicator.category === category);

  const [currentIndicator, setCurrentIndicator] = useState(0);

  const handleClickOnToggler = (direction: boolean) => {
    if (
      direction &&
      currentIndicator + 1 === indicatorsDataByCurrentCityAndCategory.length
    ) {
      setCurrentIndicator(0);
    } else if (direction) {
      setCurrentIndicator(currentIndicator + 1);
    } else if (!direction && currentIndicator - 1 < 0) {
      setCurrentIndicator(indicatorsDataByCurrentCityAndCategory.length - 1);
    } else {
      setCurrentIndicator(currentIndicator - 1);
    }
  };

  return (
    <div
      className={classes.blueSection}
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "fit-content",
        borderBottomRightRadius: "16px",
        borderBottomLeftRadius: "16px",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          float: "left",
          top: "16px",
          left: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
            pointerEvents: "all",
          }}
        >
          <img
            src="/assets/circle_arrow_transparent.svg"
            alt="arrow"
            style={{ width: "18px", height: "18px", cursor: "pointer" }}
            onClick={() => handleClickOnToggler(false)}
          />
          <img
            src="/assets/circle_arrow_transparent.svg"
            alt="arrow"
            style={{
              width: "18px",
              height: "18px",
              cursor: "pointer",
              transform: "rotate(180deg)",
            }}
            onClick={() => handleClickOnToggler(true)}
          />
          <Typography variant={"h6"}>
            Browse indicators for the {category} category
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <Typography
            variant={"h3"}
            style={{
              maxWidth: "320px",
            }}
          >
            {indicatorsDataByCurrentCityAndCategory[currentIndicator].indicator}
          </Typography>
          <Typography variant={"h6"}>
            {indicatorsDataByCurrentCityAndCategory[currentIndicator].unit}
          </Typography>
          <div
            style={{
              marginTop: "32px",
            }}
          >
            <IndicatorChart
              isMobile={true}
              indicatorDataByCitiesArr={indicatorsDataNewValues}
              currentCity={city}
              category={category}
              indicator={
                indicatorsDataByCurrentCityAndCategory[currentIndicator]
                  .indicator
              }
              yLabels={yLabels}
              yColors={yColors}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

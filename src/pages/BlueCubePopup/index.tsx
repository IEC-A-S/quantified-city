import { usePopupStyles } from "./components/styles";
import { FC, useState } from "react";
import { Typography } from "@mui/material";
import { TopText } from "./components/TopText";
import { CategoryChart } from "../GraphAndGlobe/components/CategoryChart";
import { StarGraph } from "../GraphAndGlobe/components/StarGraph";
import { IndicatorChart } from "../GraphAndGlobe/components/IndicatorChart";
import { CategoryDescription } from "./data";
import categoryDataArr from "../../data/categoryData.json";
import indicatorDataByCitiesArr from "../../data/indicatorsData.json";
import newValuesForIndicators from "../../data/indeicatorsData_newValues.json";
import newIndicatorsDescription from "../../data/indicatorDescriptionData.json";

const yLabels = ["Very low", "Low", "Average", "Strong", "Very strong"];
const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface BlueCubePopupProps {
  city: string;
  category: string;
  isMobile?: boolean;
  setClickedCategory: (category: string | null) => void;
}
export const BlueCubePopup: FC<BlueCubePopupProps> = ({
  city,
  category,
  isMobile,
  setClickedCategory,
}) => {
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
  }
  );


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

  //get description of category from CategoryDescription using category from props
  const normalizedCategory = category.replace(" ", "_");
  const description = Object.keys(CategoryDescription).includes(
    normalizedCategory
  )
    ? CategoryDescription[normalizedCategory]
    : "No description available";

  return (
    <div className={classes.backgroundWrapper}>
      <div
        onClick={() => {
          setClickedCategory(null);
          const landing = document.getElementById("landing");
          landing.scrollTo({
            top: landing.clientHeight * 2,
          });
        }}
        className={classes.returnBack}
      >
        <img
          className={classes.returnBackIcon}
          src="/assets/returnBackIcon.svg"
          alt="return back"
        />
        <Typography className={classes.returnBackText}>
          Back to Urban resilience index
        </Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.blueSection}>
          <TopText title={category} text={description} />
          <Typography
            style={{
              position: "absolute",
              top: "25vh",
              left: "8vh",
              color: "#fff",
              fontFamily: "SuisseIntl-Regular",
              fontSize: "4vh",
            }}
          >
            Chose cities <br />
            and compare to peers
          </Typography>
          <CategoryChart
            isMobile={isMobile}
            categoryDataArr={categoryDataArr}
            currentCity={city}
            category={category}
            yLabels={yLabels}
            yColors={yColors}
          />
        </div>
        <div className={classes.whiteSection}>
          <div
            style={{
              position: "absolute",
              top: "4vh",
              left: "8vh",
            }}
          >
            <div
              className={classes.title}
              style={{ color: "#000000", fontFamily: "SuisseIntl-Light" }}
            >
              Indicators of{" "}
            </div>
            <div className={classes.title} style={{ color: "#2D67FF" }}>
              {category}
            </div>
          </div>
          <Typography
            style={{
              position: "absolute",
              top: "27.5vh",
              left: "8vh",
              width: "30vw",
              color: "#000000",
              fontFamily: "SuisseIntl-Light",
              fontSize: "2vh",
            }}
          >
            The graph highlights the strengths and weaknesses of cities across
            various aspects of {category} category. The further the vertices of
            the shape are from the center of the diagram, the better the city's
            performance in that particular indicator. The larger the area of the
            shape, the higher the overall assessment in the {category} category.
          </Typography>
          <StarGraph
            indicatorDataByCitiesArr={indicatorsDataNewValues}
            currentCity={city}
            category={category}
            colors={[
              "#2D67FF",
              "#00BCF8",
              "#00DDD0",
              "#8490FF",
              "#AD00FF",
              "#FF7AE2",
            ]}
          />
        </div>
        <div className={classes.blueSection}>
          <div
            style={{
              position: "absolute",
              top: "4vh",
              left: "8vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "left",
              gap: "1vw",
              height: "5vh",
            }}
          >
            <img
              src="/assets/circle_arrow_transparent.svg"
              alt="arrow"
              style={{ width: "100%", height: "100%", cursor: "pointer" }}
              onClick={() => handleClickOnToggler(false)}
            />
            <img
              src="/assets/circle_arrow_transparent.svg"
              alt="arrow"
              style={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                transform: "rotate(180deg)",
              }}
              onClick={() => handleClickOnToggler(true)}
            />
          </div>
          <Typography
            style={{
              position: "absolute",
              top: "5vh",
              left: "12vw",
              fontFamily: "SuisseIntl-Regular",
              fontSize: "2vh",
              color: "#fff",
              alignSelf: "center",
            }}
          >
            Browse indicators for the {category} category
          </Typography>
          <div
            style={{
              position: "absolute",
              top: "10vh",
              left: "8vh",
            }}
          >
            <div className={classes.title} style={{ fontSize: "6vh" }}>
              {
                indicatorsDataByCurrentCityAndCategory[currentIndicator]
                  .indicator
              }
              <br />
              <span
                style={{
                  fontSize: "3vh",
                  fontFamily: "SuisseIntl-Light",
                  letterSpacing: "0",
                }}
              >
                {indicatorsDataByCurrentCityAndCategory[currentIndicator].unit}
              </span>
            </div>
          </div>
          <IndicatorChart
            indicatorDataByCitiesArr={indicatorsDataNewValues}
            currentCity={city}
            category={category}
            indicator={
              indicatorsDataByCurrentCityAndCategory[currentIndicator].indicator
            }
            yLabels={yLabels}
            yColors={yColors}
          />
        </div>
      </div>
    </div>
  );
};

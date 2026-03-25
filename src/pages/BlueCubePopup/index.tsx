import { usePopupStyles } from "./components/styles";
import { FC, useState } from "react";
import { Typography } from "@mui/material";
import { TopText } from "./components/TopText";
import { CategoryChart } from "../GraphAndGlobe/components/CategoryChart";
import { StarGraph } from "../GraphAndGlobe/components/StarGraph";
import { IndicatorChart } from "../GraphAndGlobe/components/IndicatorChart";
import { CategoryDescription } from "./data";
import categoryDataArr from "../../data/categoryData.json";
import { getCategoryKey, getCategoryLabel } from "../../utils/categories";
import {
  getCompatibleIndicatorDataset,
  getCompatibleIndicatorsByCategory,
} from "../../v2/data/compat";

const yLabels = [
  "Очень низкий",
  "Низкий",
  "Средний",
  "Высокий",
  "Очень высокий",
];
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
  const categoryKey = getCategoryKey(category);
  const categoryLabel = getCategoryLabel(category);
  const indicatorsDataByCitiesArr = getCompatibleIndicatorDataset();
  const indicatorsDataByCurrentCityAndCategory = getCompatibleIndicatorsByCategory(
    city,
    categoryKey
  );

  const [currentIndicator, setCurrentIndicator] = useState(0);
  const activeIndicator =
    indicatorsDataByCurrentCityAndCategory[currentIndicator] ?? null;

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
  const normalizedCategory = categoryKey.replace(" ", "_");
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
          Назад
        </Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.blueSection}>
          <TopText title={categoryLabel} text={description} />
          <Typography
            style={{
              position: "absolute",
              top: "25vh",
              left: "8vh",
              color: "#fff",
              
              fontSize: "4vh",
            }}
          >
            Выберите города <br />
            и сравните с сопоставимыми
          </Typography>
          <CategoryChart
            isMobile={isMobile}
            categoryDataArr={categoryDataArr}
            currentCity={city}
            category={categoryKey}
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
            >
              Индикаторы категории{" "}
            </div>
            <div className={classes.title} style={{ color: "#00C8B5" }}>
              {categoryLabel}
            </div>
          </div>
          <Typography
            style={{
              position: "absolute",
              top: "27.5vh",
              left: "8vh",
              width: "30vw",
              color: "#121212",
              
              fontSize: "2vh",
            }}
          >
            График показывает сильные и слабые стороны городов по различным
            аспектам категории {categoryLabel}. Чем дальше вершины фигуры от
            центра диаграммы, тем лучше результат города по соответствующему
            индикатору. Чем больше площадь фигуры, тем выше общая оценка по
            категории {categoryLabel}.
          </Typography>
          <StarGraph
            indicatorDataByCitiesArr={indicatorsDataByCitiesArr}
            currentCity={city}
            category={categoryLabel}
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
              
              fontSize: "2vh",
              color: "#fff",
              alignSelf: "center",
            }}
          >
            Просмотр индикаторов категории {categoryLabel}
          </Typography>
          <div
            style={{
              position: "absolute",
              top: "10vh",
              left: "8vh",
            }}
          >
            <div className={classes.title} style={{ 
              color: "#fff",
              fontSize: "6vh"
            }}>
              {activeIndicator?.indicator ?? categoryLabel}
              <br />
              <span
                style={{
                  fontSize: "3vh",
                  
                  letterSpacing: "0",
                }}
              >
                {activeIndicator?.unit ?? ""}
              </span>
            </div>
          </div>
          {activeIndicator && (
            <IndicatorChart
              indicatorDataByCitiesArr={indicatorsDataByCitiesArr}
              currentCity={city}
              category={categoryLabel}
              indicator={activeIndicator.indicator}
              yLabels={yLabels}
              yColors={yColors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

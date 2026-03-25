import { Typography } from "@mui/material";
import { IndicatorChart } from "../../../../../pages/GraphAndGlobe/components/IndicatorChart";
import { usePopupStyles } from "../index";
import { type FC, useState } from "react";
import { getCategoryLabel } from "../../../../../utils/categories";
import { getCompatibleIndicatorDataset } from "../../../../../v2/data/compat";

const yLabels = [
  "Очень низкий",
  "Низкий",
  "Средний",
  "Высокий",
  "Очень высокий",
];
const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface ThirdSectionProps {
  city: string;
  category: string;
}

export const ThirdSection: FC<ThirdSectionProps> = ({ city, category }) => {
  const { classes } = usePopupStyles();
  const categoryLabel = getCategoryLabel(category);
  const indicatorsDataNewValues = getCompatibleIndicatorDataset();

  const indicatorsDataByCurrentCityAndCategory = indicatorsDataNewValues
    .find((cityData) => cityData.city === city)!
    .data.filter((indicator) => indicator.category === categoryLabel);

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
            Просмотр индикаторов категории {categoryLabel}
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
            {activeIndicator?.indicator ?? categoryLabel}
          </Typography>
          <Typography variant={"h6"}>{activeIndicator?.unit ?? ""}</Typography>
          <div
            style={{
              marginTop: "32px",
            }}
          >
            {activeIndicator && (
              <IndicatorChart
                isMobile={true}
                indicatorDataByCitiesArr={indicatorsDataNewValues}
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
    </div>
  );
};

import { Button, Typography } from "@mui/material";
import type { FC } from "react";
import { usePopupStyles } from "../index";
import type {
  ICityIndicatorData,
  IIndicatorsDataByCities,
} from "../../../../../pages/GraphAndGlobe/components/StarGraph/interfaces";
import { Radar } from "react-chartjs-2";
import { getRadarData } from "../../../../../pages/GraphAndGlobe/components/StarGraph/helpers";
import { useSelectedCities } from "../../../../../pages/GraphAndGlobe/components/StarGraph/useSelectedCities";
import type { ChartData, ChartOptions } from "chart.js";
import { CitySelectorsSet } from "../../../../../pages/Landing/components/StarGraph/CitySelectorsSet";
import { getCategoryLabel } from "../../../../../utils/categories";
const colors = [
  "#2D67FF",
  "#00BCF8",
  "#00DDD0",
  "#8490FF",
  "#AD00FF",
  "#FF7AE2",
];

export const getOptions = (): ChartOptions<"radar"> => {
  return {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 1,
        },
        angleLines: {
          display: false,
        },
        pointLabels: {
          font: {
            size: 5, // Это максимальный размер шрифта, который влезает в круг, иначе текста налезают друг на друга, следующий шаг уменьшение текстовок
          },
        },
        suggestedMin: 0,
      },
    },
  };
};

export const getData =
  (colors: string[]) =>
  (
    currentCityData: ICityIndicatorData[],
    selectedCityDataArr: ICityIndicatorData[][]
  ): ChartData<"radar", (number | null)[]> => {
    const cityDataArr = [currentCityData, ...selectedCityDataArr];

    return {
      labels: currentCityData.map((cityData) =>
        getMultiLineLabel(cityData.indicator)
      ),
      datasets: cityDataArr.map((cityData, index) => ({
        label: cityData[0].city,
        backgroundColor: "transparent",
        borderWidth: !index ? 4 : 1,
        borderColor: colors[index],
        pointBackgroundColor: colors[index],
        pointBorderColor: colors[index],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        pointRadius: 2,
        data: cityData.map((cityData) => cityData.natural_value),
      })),
    };
  };

const getMultiLineLabel = (label: string) => {
  const words = label.split(" ");
  const lines = [];
  let line = "";
  for (let i = 0; i < words.length; i++) {
    if (line.length + words[i].length < 30) {
      line += words[i] + " ";
    } else {
      lines.push(line);
      line = words[i] + " ";
    }
  }
  lines.push(line);
  return lines;
};

interface SecondSectionProps {
  indicatorDataByCitiesArr: IIndicatorsDataByCities[];
  currentCity: string;
  category: string;
}

export const SecondSection: FC<SecondSectionProps> = ({
  indicatorDataByCitiesArr,
  currentCity,
  category,
}) => {
  const { classes } = usePopupStyles();
  const categoryLabel = getCategoryLabel(category);

  const cities = indicatorDataByCitiesArr.map((cityData) => cityData.city);
  const currentCityData = getRadarData(
    indicatorDataByCitiesArr.find(
      (cityData: IIndicatorsDataByCities) => cityData.city === currentCity
    )!,
    categoryLabel
  );

  const radarDataArr: ICityIndicatorData[][] = indicatorDataByCitiesArr.map(
    (cityData: IIndicatorsDataByCities) => getRadarData(cityData, categoryLabel)
  );

  const [selectedCityDataArr, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities,
    radarDataArr
  );

  const options = getOptions();
  const data = getData(colors)(currentCityData, selectedCityDataArr);

  return (
    <div className={classes.whiteSection}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <Typography
          variant={"h3"}
          style={{
            color: "#000000",
          }}
        >
          Индикаторы категории{" "}
          <span
            style={{
              fontFamily: "SuisseIntl-Regular",
              color: "#2D67FF",
            }}
          >
            {categoryLabel}
          </span>
        </Typography>
        <Typography
          variant={"h6"}
          style={{
            color: "#000000",
          }}
        >
          График показывает сильные и слабые стороны городов по различным
          аспектам категории «{categoryLabel}». Чем дальше вершины фигуры от
          центра диаграммы, тем лучше показатели города по соответствующему
          индикатору. Чем больше площадь фигуры, тем выше общая оценка по
          категории «{categoryLabel}».
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "16px",
          justifyContent: "center",
        }}
      >
        <Button>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#2D67FF",
            }}
          ></div>
          {currentCity}
        </Button>
      </div>
      <Radar
        id="star-graph"
        style={{
          paddingTop: "16px",
          maxHeight: "400px",
        }}
        data={data}
        options={options}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <CitySelectorsSet
          currentCity={currentCity}
          selectedCities={selectedCityDataArr.map(
            (cityData) => cityData[0].city
          )}
          cities={cities}
          colors={colors}
          onChange={onSelectedCitiesChange}
          isMobile={true}
        />
      </div>
      {/*<div*/}
      {/*  id={"graph-section"}*/}
      {/*  style={{*/}
      {/*    position: "relative",*/}
      {/*    width: "100%",*/}
      {/*    bottom: "16px",*/}
      {/*    display: "flex",*/}
      {/*    flexDirection: "row",*/}
      {/*    alignItems: "center",*/}
      {/*    justifyContent: "center",*/}
      {/*    marginTop: "16px",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button variant="contained">*/}
      {/*    Download report*/}
      {/*    <img*/}
      {/*      src={"./assets/downloadIcon.svg"}*/}
      {/*      alt="arrow"*/}
      {/*      style={{*/}
      {/*        width: "12px",*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
};

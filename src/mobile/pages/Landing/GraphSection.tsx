import { Button, Typography } from "@mui/material";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { getCityDataForStarGraph } from "../../../pages/Landing";
import { CITY_DATA } from "../../../data";
import type { ICityData } from "../../../pages/Landing/components/StarGraph/interfaces";
import { useSelectedCities } from "../../../pages/Landing/components/StarGraph/useSelectedCities";
import { Radar } from "react-chartjs-2";
import { CitySelectorsSet } from "../../../pages/Landing/components/StarGraph/CitySelectorsSet";
import type { ChartData, ChartOptions } from "chart.js";
import { getAssessmentColor } from "../../../utils/assessment";

export const colors = [
  "#2D67FF",
  "#00BCF8",
  "#00DDD0",
  "#8490FF",
  "#AD00FF",
  "#FF7AE2",
];

const getOptions = (): ChartOptions<"radar"> => {
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
            size: 8,
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
    currentCityData: ICityData,
    selectedCityDataArr: ICityData[]
  ): ChartData<"radar", (number | null)[]> => {
    const cityDataArr = [currentCityData, ...selectedCityDataArr];

    return {
      labels: [
        "Efficiency",
        "Accessibility",
        "Safety",
        "Affordability",
        "Environmental impact",
        "Satisfaction",
      ],
      datasets: cityDataArr.map((cityData, index) => ({
        label: cityData.City,
        backgroundColor: "transparent",
        borderWidth: index === 0 ? 4 : 1,
        borderColor: colors[index],
        pointBackgroundColor: colors[index],
        pointBorderColor: colors[index],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        pointRadius: 2,
        data: [
          cityData.Efficiency,
          cityData.Accessibility,
          cityData.Safety,
          cityData.Affordability,
          cityData["Environmental impact"],
          cityData.Satisfaction,
        ],
      })),
    };
  };
export const GraphSection = () => {
  const cityData = useSelectedCityData();
  const color = getAssessmentColor(cityData["Transport Resilience Index"]);

  const cityDataArr = getCityDataForStarGraph(CITY_DATA);
  const cities = cityDataArr.map((cityData) => cityData.City);
  const currentCity = cityData.City;
  const currentCityData = cityDataArr.find(
    (cityData: ICityData) => cityData.City === currentCity
  )!;
  const [selectedCityDataArr, onSelectedCitiesChange] = useSelectedCities(
    currentCity,
    cities,
    cityDataArr
  );
  const options = getOptions();
  let data = getData([
    "#2D67FF",
    "#00BCF8",
    "#00DDD0",
    "#8490FF",
    "#AD00FF",
    "#FF7AE2",
  ])(currentCityData, selectedCityDataArr);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        background: "#fff",
        boxSizing: "border-box",
        padding: "16px",
        paddingTop: "80px",
      }}
    >
      <Typography
        variant={"h1"}
        style={{
          color: "#000",
        }}
      >
        {cityData?.City}: <br />
        <span
          style={{
            fontFamily: "SuisseIntl-Light",
          }}
        >
          Транспортная
        </span>{" "}
        устойчивость
        <span
          style={{
            verticalAlign: "middle",
            marginLeft: "16px",
            textWrap: "nowrap",
            textTransform: "none",
            borderRadius: "16px",
            fontFamily: "SuisseIntl-Thin",
            boxSizing: "border-box",
            fontSize: 12,
            fontWeight: 300,
            width: "fit-content",
            padding: "8px 16px",
            boxShadow: "none",
            color: "#000",
            backgroundColor: `${color}`,
          }}
        >
          {cityData["Transport Resilience Index"].replace("-", "")}
        </span>
      </Typography>
      <Typography
        variant={"h3"}
        style={{
          marginTop: "16px",
          color: "#000",
        }}
      >
        График показывает сильные и слабые стороны городов по различным
        аспектам транспортной системы. Чем дальше вершины фигуры от центра,
        тем лучше город выглядит по соответствующему показателю. Чем больше
        площадь фигуры, тем выше общая оценка транспортной устойчивости.
      </Typography>
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
          {cityData.City}
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
          selectedCities={selectedCityDataArr.map((cityData) => cityData.City)}
          cities={cities}
          colors={colors}
          onChange={onSelectedCitiesChange}
          isMobile={true}
        />
      </div>
      <div
        id={"graph-section"}
        style={{
          position: "relative",
          width: "100%",
          bottom: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "16px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            const fileName = cityData.pdfName;
            const link = document.createElement("a");
            link.href = `/pdf/${fileName}`;
            link.download = fileName;
            link.click();
          }}
        >
          Скачать отчет
          <img
            src={"./assets/downloadIcon.svg"}
            alt="arrow"
            style={{
              width: "12px",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

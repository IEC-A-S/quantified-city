import { Button, Typography } from "@mui/material";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import type {
  ICityData,
  ISentimentDTO,
} from "../../../pages/Landing/components/StarGraph/interfaces";
import { useSelectedCities } from "../../../pages/Landing/components/StarGraph/useSelectedCities";
import { Radar } from "react-chartjs-2";
import { CitySelectorsSet } from "../../../pages/Landing/components/StarGraph/CitySelectorsSet";
import type { ChartData, ChartOptions } from "chart.js";
import SENTIMENT_DATA from "../../../data/sentimentGraph.json";
import { getCityId } from "../../../constants";
import { getAssessmentColor } from "../../../utils/assessment";
import { getCategoryLabel } from "../../../utils/categories";

const getCityDataForSentimentGraph = (
  cityDataArr: ISentimentDTO[]
): ISentimentDTO[] =>
  cityDataArr.map((cityData) => ({
    ...cityData,
    City: cityData.City,
  }));

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

const getData =
  (chartColors: string[]) =>
  (
    currentCityData: ICityData,
    selectedCityDataArr: ICityData[]
  ): ChartData<"radar", (number | null)[]> => {
    const cityDataArr = [currentCityData, ...selectedCityDataArr];

    return {
      labels: [
        getCategoryLabel("Air pollution"),
        getCategoryLabel("Water pollution"),
        getCategoryLabel("Land use and waste"),
        getCategoryLabel("Food availability"),
        getCategoryLabel("Energy availability"),
        getCategoryLabel("Wealth"),
        getCategoryLabel("Safety"),
        getCategoryLabel("Livability"),
        getCategoryLabel("Transport"),
        getCategoryLabel("Inclusion"),
        getCategoryLabel("Accountability"),
        getCategoryLabel("Public services"),
      ],
      datasets: cityDataArr.map((cityData, index) => ({
        label: cityData.City,
        backgroundColor: "transparent",
        borderWidth: index === 0 ? 4 : 1,
        borderColor: chartColors[index],
        pointBackgroundColor: chartColors[index],
        pointBorderColor: chartColors[index],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        pointRadius: 2,
        data: [
          cityData["Air pollution"],
          cityData["Water pollution"],
          cityData["Land use and waste"],
          cityData["Food availability"],
          cityData["Energy availability"],
          cityData["Wealth"],
          cityData["Safety"],
          cityData["Livability"],
          cityData["Transport"],
          cityData["Inclusion"],
          cityData["Accountability"],
          cityData["Public services"],
        ],
      })),
    };
  };

export const SentimentGraphSection = ({ setSocialPopupOpen }) => {
  const cityData = useSelectedCityData();
  const cityId = getCityId(cityData?.City);
  const hideExploreTopics =
    cityId === "Mexico City" ||
    cityId === "Panama City" ||
    cityId === "Cape Town" ||
    cityId === "Amman" ||
    cityId === "Colombo" ||
    cityId === "Bangkok" ||
    cityId === "Jakarta" ||
    cityId === "Astana" ||
    cityId === "Lahore" ||
    cityId === "Nairobi";
  const color = getAssessmentColor(cityData["Urban Sentiment Index"]);

  const cityDataArr = getCityDataForSentimentGraph(
    SENTIMENT_DATA as unknown as ISentimentDTO[]
  );
  const cities = cityDataArr.map((item) => item.City);
  const currentCity = cityData.City;
  const currentCityData = cityDataArr.find(
    (item: ICityData) => item.City === currentCity
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
          Индекс социальных
        </span>{" "}
        настроений
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
          {cityData["Urban Sentiment Index"].replace("-", "")}
        </span>
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
          selectedCities={selectedCityDataArr.map((item) => item.City)}
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
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <Button
          onClick={() => setSocialPopupOpen(true)}
          variant="outlined"
          style={{
            display: hideExploreTopics ? "none" : "block",
            background: "transparent",
            borderColor: "#000",
            color: "#000",
            fontFamily: "SuisseIntl-Thin",
          }}
        >
          Изучить темы
        </Button>
        <Button variant="contained">
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

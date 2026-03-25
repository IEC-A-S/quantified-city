import type { ChartData, ChartOptions } from "chart.js";
import type { ICityData } from "./interfaces";
import { getCategoryLabel } from "../../../../utils/categories";

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
            size: 11,
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
        getCategoryLabel("Air pollution"),
        getCategoryLabel("Water pollution"),
        getCategoryLabel("Land use and waste"),
        //"Natural disaster hazards",
        //"Water availability",
        getCategoryLabel("Food availability"),
        getCategoryLabel("Energy availability"),
        //"Health",
        //"Education",
        getCategoryLabel("Wealth"),
        getCategoryLabel("Safety"),
        getCategoryLabel("Livability"),
        getCategoryLabel("Transport"),
        getCategoryLabel("Inclusion"),
        getCategoryLabel("Accountability"),
        //"City budget",
        //"SME",
        getCategoryLabel("Public services"),
        //"Sustainability commitment",
      ],
      datasets: cityDataArr.map((cityData, index) => ({
        label: cityData.City,
        backgroundColor: "transparent",
        borderWidth: index === 0 ? 8 : 1,
        borderColor: colors[index],
        pointBackgroundColor: colors[index],
        pointBorderColor: colors[index],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        pointRadius: 5,
        data: [
          cityData["Air pollution"],
          cityData["Water pollution"],
          cityData["Land use and waste"],
          //cityData["Natural disaster hazards"],
          //cityData["Water availability"],
          cityData["Food availability"],
          cityData["Energy availability"],
          //cityData["Health"],
          //cityData["Education"],
          cityData["Wealth"],
          cityData["Safety"],
          cityData["Livability"],
          cityData["Transport"],
          cityData["Inclusion"],
          cityData["Accountability"],
          //cityData["City budget"],
          //cityData["SME"],
          cityData["Public services"],
          //cityData["Sustainability commitment"],
        ],
      })),
    };
  };

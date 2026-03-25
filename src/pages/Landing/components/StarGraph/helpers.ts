import type { ChartData, ChartOptions } from "chart.js";
import type { ICityData } from "./interfaces";

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
        "Эффективность",
        "Доступность",
        "Безопасность",
        "Ценовая доступность",
        "Воздействие на среду",
        "Удовлетворенность",
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

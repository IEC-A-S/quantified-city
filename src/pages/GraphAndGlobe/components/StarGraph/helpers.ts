import type { ChartData, ChartOptions } from "chart.js";
import type { ICityIndicatorData } from "./interfaces";
import type { IIndicatorsDataByCities } from "./interfaces";

export const getRadarData = (
  cityData: IIndicatorsDataByCities,
  category: string
): ICityIndicatorData[] =>
  cityData.data
    .filter((item) => item.category === category)
    .map((item) => ({
      city: cityData.city,
      ...item,
    }));

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
        borderWidth: !index ? 8 : 1,
        borderColor: colors[index],
        pointBackgroundColor: colors[index],
        pointBorderColor: colors[index],
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        pointRadius: 5,
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

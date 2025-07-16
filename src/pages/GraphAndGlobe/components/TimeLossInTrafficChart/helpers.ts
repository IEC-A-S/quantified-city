import type { ChartData, ChartOptions } from "chart.js";
import type { ITimeLossInTrafficData } from "./interfaces";
import type { ChartDataset } from "chart.js/dist/types";

const getBackgroundColor = (
  city: string,
  statuses: { city: string; status: string }[]
) => {
  const status = statuses.find((s) => s.city === city)?.status;

  switch (status) {
    case "Very strong":
      return "#35CB00";
    case "Strong":
      return "#A0DA8B";
    case "Average":
      return "#FF9B3F";
    case "Low":
      return "#FF632F";
    case "Very low":
      return "#FF3B29";
    default:
      return "#000";
  }
};

export const getMobileOptions = (
  currentCityData: ITimeLossInTrafficData[],
  selectedCityDataArr: ITimeLossInTrafficData[][]
): ChartOptions<"boxplot"> => {
  const cityDataArr = [currentCityData, ...selectedCityDataArr];

  const cities = cityDataArr.map((cityData) => cityData[0].city);

  return {
    responsive: true,
    scales: {
      x: {
        type: "category",
        labels: cities,
        offset: true,
        grid: {
          display: false,
        },
        border: {
          color: "rgb(255, 255, 255)",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        suggestedMin: 0,
        ticks: {
          crossAlign: "far",
          color: "rgba(255, 255, 255, 0.3)",
          font: {
            size: 12,
          },
          padding: 10,
          maxTicksLimit: 10,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.15)",
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
};

export const getOptions = (
  currentCityData: ITimeLossInTrafficData[],
  selectedCityDataArr: ITimeLossInTrafficData[][]
): ChartOptions<"boxplot"> => {
  const cityDataArr = [currentCityData, ...selectedCityDataArr];

  const cities = cityDataArr.map((cityData) => cityData[0].city);

  return {
    responsive: true,
    /*datasetOptions: {
      maxBarThickness: 30,
    },*/
    scales: {
      /*xAxes: [
        {
          maxBarThickness: 30,
        },
      ],*/
      x: {
        type: "category",
        labels: cities,
        offset: true,
        grid: {
          display: false,
        },
        border: {
          color: "rgb(255, 255, 255)",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        suggestedMin: 0,
        ticks: {
          color: "rgba(255, 255, 255, 0.3)",
          font: {
            size: 20,
          },
          padding: 10,
          maxTicksLimit: 10,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.15)",
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
};

export const getData =
  (statuses: { city: string; status: string }[]) =>
  (
    currentCityData: ITimeLossInTrafficData[],
    selectedCityDataArr: ITimeLossInTrafficData[][]
  ): ChartData<"boxplot", (number | null)[]> => {
    const cityDataArr = [currentCityData, ...selectedCityDataArr];

    return {
      labels: cityDataArr.map((cityData) => cityData[0].city),
      datasets: [
        {
          data: cityDataArr.map((cityData) =>
            cityData.map((data) => data.time_loss)
          ),
          backgroundColor: cityDataArr.map(
            (cityData) => `${getBackgroundColor(cityData[0].city, statuses)}80`
          ),
          borderColor: cityDataArr.map((cityData) =>
            getBackgroundColor(cityData[0].city, statuses)
          ),
          meanBackgroundColor: "#fff",
          outlierBackgroundColor: "#fff",
          maxBarThickness: 30,
        },
      ],
    };
  };

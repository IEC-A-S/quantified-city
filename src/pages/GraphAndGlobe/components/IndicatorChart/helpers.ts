import type { ChartData, ChartOptions } from "chart.js";
import type { ICityIndicatorData } from "./interfaces";
import type { IIndicatorsDataByCities } from "./interfaces";
import { getAssessmentColorByScore } from "../../../../utils/assessment";

const getCanvas = (color: string): HTMLCanvasElement => {
  const canvas = document.createElement("canvas");

  // Получаем контекст рисования
  const ctx = canvas.getContext("2d")!;

  // Рисуем круг
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  // const innerRadius = 15; // половина диаметра, чтобы получить диаметр 30
  const innerRadius = window.innerWidth * 0.008;
  // const outerRadius = 23; // половина диаметра, чтобы получить диаметр 50
  const outerRadius = window.innerWidth * 0.015;

  // Рисуем внутренний круг
  ctx.beginPath();
  ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color; // Цвет внутреннего круга
  ctx.fill();

  // Рисуем внешний круг (окружность)
  ctx.beginPath();
  ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI, false);
  ctx.lineWidth = 1;
  ctx.strokeStyle = color; // Цвет обводки
  ctx.stroke();

  return canvas;
};

const isBinaryIndicator = (cityDataArr: ICityIndicatorData[]) =>
  cityDataArr.every(
    (cityData) => cityData.value === 0 || cityData.value === 1
  );

const getBinaryColor = (value: number) => (value === 1 ? "#35CB00" : "#FF3B29");

export const getCitiIndicatorData = (
  cityData: IIndicatorsDataByCities,
  category: string,
  indicator: string
): ICityIndicatorData => ({
  city: cityData.city,
  ...cityData.data.find(
    (item) => item.category === category && item.indicator === indicator
  )!,
});

export const getMobileOptions = (
  currentCityData: ICityIndicatorData,
  selectedCityDataArr: ICityIndicatorData[]
): ChartOptions<"line"> => {
  const cityDataArr = [currentCityData, ...selectedCityDataArr];
  const minNaturalValue = Math.min(
    ...cityDataArr.map((cityData) => cityData.value)
  );
  const cities = cityDataArr.map((cityData) => cityData.city);

  return {
    responsive: true,
    elements: {
      line: {},
      point: {
        radius: 23,
        hoverRadius: 23,
      },
    },
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
        suggestedMin: minNaturalValue,
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
  currentCityData: ICityIndicatorData,
  selectedCityDataArr: ICityIndicatorData[]
): ChartOptions<"line"> => {
  const cityDataArr = [currentCityData, ...selectedCityDataArr];
  const minNaturalValue = Math.min(
    ...cityDataArr.map((cityData) => cityData.value)
  );
  const cities = cityDataArr.map((cityData) => cityData.city);

  return {
    responsive: true,
    elements: {
      line: {},
      point: {
        radius: 23,
        hoverRadius: 23,
      },
    },
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
        suggestedMin: minNaturalValue,
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
  (yLabels: string[], yColors: string[]) =>
  (
    currentCityData: ICityIndicatorData,
    selectedCityDataArr: ICityIndicatorData[]
  ): ChartData<"line", (number | null)[]> => {
    const cityDataArr = [currentCityData, ...selectedCityDataArr];
    const useBinaryColors = isBinaryIndicator(cityDataArr);

    return {
      xLabels: cityDataArr.map((cityData) => cityData.city),
      yLabels,
      datasets: cityDataArr.map((cityData, index) => ({
        label: cityData.city,
        data: new Array(cityDataArr.length)
          .fill(null)
          .map((_, i) => (index === i ? cityData.value : null)),
        pointStyle: getCanvas(
          useBinaryColors
            ? getBinaryColor(cityData.value)
            : getAssessmentColorByScore(
                cityData.natural_value,
                yColors[0] ?? "#000"
              )
        ),
        showLine: false,
      })),
    };
  };

import type { ChartData, ChartOptions } from "chart.js";
import type { ICityCategoryData } from "./interfaces";

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

export const getMobileOptions =
  (yLabels: string[], yColors: string[]) =>
  (cities: string[]): ChartOptions<"line"> => ({
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
        ticks: {
          display: false,
        },
        border: {
          color: "rgb(255, 255, 255)",
        },
      },
      y: {
        type: "category",
        offset: true,
        labels: yLabels,
        reverse: true,
        ticks: {
          crossAlign: "far",
          color: yColors,
          font: {
            size: 12,
          },
          padding: 10,
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
  });
export const getOptions =
  (yLabels: string[], yColors: string[]) =>
  (cities: string[]): ChartOptions<"line"> => ({
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
        ticks: {
          display: false,
        },
        border: {
          color: "rgb(255, 255, 255)",
        },
      },
      y: {
        type: "category",
        offset: true,
        labels: yLabels,
        reverse: true,
        ticks: {
          color: yColors,
          font: {
            size: 20,
          },
          padding: 10,
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
  });

export const getData =
  (yLabels: string[], yColors: string[]) =>
  (
    currentCityData: ICityCategoryData,
    selectedCityDataArr: ICityCategoryData[],
    category: string
  ): ChartData<"line", (string | null)[]> => {
    const cityDataArr = [currentCityData, ...selectedCityDataArr];
    const numberCategories = cityDataArr.map(
      (item) => item[category as keyof ICityCategoryData] as number
    );
    const categories = numberCategories.map((value) => yLabels[value - 1]);

    const getBackgroundColor = (value: string) => {
      const index = yLabels.indexOf(value);

      if (index === -1) {
        throw new Error("Invalid value");
      }

      return yColors[index];
    };

    return {
      xLabels: cityDataArr.map((cityData) => cityData.City),
      yLabels,
      datasets: categories.map((category, index) => ({
        label: category,
        data: new Array(6)
          .fill(null)
          .map((_, i) => (index === i ? category : null)),
        pointStyle: getCanvas(getBackgroundColor(category)),
        showLine: false,
      })),
    };
  };

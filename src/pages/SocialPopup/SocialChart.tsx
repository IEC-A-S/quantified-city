import type { FC } from "react";
import type {
  ChartData,
  ChartOptions,
  TooltipItem,
  TooltipModel,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

interface IProps {
  isMobile?: boolean;
  chartData: {
    days: string;
    positive: number;
    negative: number;
  }[];
  news: {
    sentiment: string;
    article: string;
    date: string;
    quantity: number;
  }[];
}

const getMobileOptions = (news: IProps["news"]): ChartOptions<"line"> => ({
  responsive: true,
  scales: {
    x: {
      // https://www.chartjs.org/docs/latest/axes/cartesian/time.html
      // type: "time",
      /*time: {
        displayFormats: {
          quarter: "MMM YYYY",
        },
      },*/
      border: {
        color: "rgb(255, 255, 255, 0.15)",
      },
      ticks: {
        color: "rgba(255, 255, 255)",
        font: {
          size: 6,
        },
        padding: 10,
        maxTicksLimit: 12,
      },
    },
    y: {
      ticks: {
        color: "rgba(255, 255, 255, 0.3)",
        font: {
          size: 6,
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
      position: "bottom",
      align: "start",
      labels: {
        boxHeight: 2,
        boxWidth: 20,
        font: {
          size: 6,
        },
        color: "rgba(255, 255, 255)",
      },
    },
    tooltip: {
      borderColor: "#FFF",
      borderWidth: 1,
      filter: (item) => {
        return (
          item.dataset.label === "Positive News" ||
          item.dataset.label === "Negative News"
        );
      },
      callbacks: {
        title(
          model: any[],
          tooltipItems: TooltipItem<"line">[]
        ): string | string[] | void {
          const currentArticle = news.find(
            (item) => item.date === model[0].raw.x
          )!;

          return currentArticle.article;
        },
      },
    },
  },
});
const getOptions = (news: IProps["news"]): ChartOptions<"line"> => ({
  responsive: true,
  scales: {
    x: {
      // https://www.chartjs.org/docs/latest/axes/cartesian/time.html
      // type: "time",
      /*time: {
        displayFormats: {
          quarter: "MMM YYYY",
        },
      },*/
      border: {
        color: "rgb(255, 255, 255, 0.15)",
      },
      ticks: {
        color: "rgba(255, 255, 255)",
        font: {
          size: 13,
        },
        padding: 10,
        maxTicksLimit: 12,
      },
    },
    y: {
      ticks: {
        color: "rgba(255, 255, 255, 0.3)",
        font: {
          size: 13,
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
      position: "bottom",
      align: "start",
      labels: {
        boxHeight: 2,
        boxWidth: 20,
        font: {
          size: 18,
        },
        color: "rgba(255, 255, 255)",
      },
    },
    tooltip: {
      borderColor: "#FFF",
      borderWidth: 1,
      filter: (item) => {
        return (
          item.dataset.label === "Positive News" ||
          item.dataset.label === "Negative News"
        );
      },
      callbacks: {
        title(
          model: any[],
          tooltipItems: TooltipItem<"line">[]
        ): string | string[] | void {
          const currentArticle = news.find(
            (item) => item.date === model[0].raw.x
          )!;

          return currentArticle.article;
        },
      },
    },
  },
});

const getData = (
  data: IProps["chartData"],
  news: IProps["news"]
): ChartData<"line" | "scatter", { x: string; y: number }[]> => {
  return {
    datasets: [
      {
        label: "Positive",
        // Формат данных допустим
        // https://www.chartjs.org/docs/latest/general/data-structures.html#object
        data: data.map((item) => ({
          x: item.days,
          y: item.positive,
        })),
        borderColor: "#FFF",
        backgroundColor: "#FFF",
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0,
        stack: "combined",
      },
      {
        label: "Negative",
        data: data.map((item) => ({
          x: item.days,
          y: item.negative,
        })),
        borderColor: "#2D67FF",
        backgroundColor: "#2D67FF",
        fill: false,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0,
        stack: "combined",
      },
      {
        label: "Positive News",
        data: news
          .filter((item) => item.sentiment === "positive")
          .map((item) => ({
            x: item.date,
            y: item.quantity,
          })),
        backgroundColor: "#FFF",
        pointRadius: 5,
        stack: "combined",
        type: "scatter",
      },
      {
        label: "Negative News",
        data: news
          .filter((item) => item.sentiment === "negative")
          .map((item) => ({
            x: item.date,
            y: item.quantity,
          })),
        borderColor: "#2D67FF",
        backgroundColor: "#2D67FF",
        pointRadius: 5,
        stack: "combined",
        type: "scatter",
      },
    ],
  };
};

export const SocialChart: FC<IProps> = ({
  isMobile = false,
  chartData,
  news,
}) => {
  return (
    <Chart
      type="line"
      width={isMobile ? "600px" : "unset"}
      height={isMobile ? "350px" : "100vh"}
      style={{
        position: "relative",
        margin: "0 2vw",
      }}
      options={isMobile ? getMobileOptions(news) : getOptions(news)}
      data={getData(chartData, news)}
    />
  );
};

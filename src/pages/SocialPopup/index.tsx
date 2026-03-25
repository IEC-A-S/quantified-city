import { usePopupStyles } from "./components/styles";
import { Typography } from "@mui/material";
import sentimentNewsByCitiesArr from "../../data/sentimentNews.json";
import GraphData from "../../data/sentiment/sentimentGraphAllData.json";
import PopupData from "../../data/sentiment/sentimentPopupData.json";
import type { FC } from "react";
import { useState } from "react";
import { SocialChart } from "./SocialChart";
import { useCardStyles } from "./styles";

interface SocialPopupProps {
  city: string;
  setSentimentPopupOpen: (value: boolean) => void;
}

export const SocialPopup: FC<SocialPopupProps> = ({
  city,
  setSentimentPopupOpen,
}) => {
  const { classes } = usePopupStyles();
  const { classes: cardClasses } = useCardStyles();
  const categoriesList = [...new Set(PopupData.map((item) => item.category))];
  const [currentCategory, setCurrentCategory] = useState(0);

  const handleClickOnToggler = (direction: boolean) => {
    if (direction && currentCategory + 1 === categoriesList.length) {
      setCurrentCategory(0);
    } else if (direction) {
      setCurrentCategory(currentCategory + 1);
    } else if (!direction && currentCategory - 1 < 0) {
      setCurrentCategory(categoriesList.length - 1);
    } else {
      setCurrentCategory(currentCategory - 1);
    }
  };

  const graphData = GraphData.find((item) => item.city === city)!.data.filter(
    (item) => item.category === categoriesList[currentCategory]
  );
  const data = PopupData.find(
    (item) =>
      item.city === city && item.category === categoriesList[currentCategory]
  )!;

  const news = sentimentNewsByCitiesArr
    .filter(
      (item) =>
        item.city === city && item.category === categoriesList[currentCategory]
    )
    .map((item) => {
      const graphDataByDate = graphData.find((i) => i.days === item.date);

      if (!graphDataByDate || !graphDataByDate[item.sentiment]) {
        return;
      }

      return {
        sentiment: item.sentiment,
        article: item.article,
        date: item.date,
        quantity: graphDataByDate[item.sentiment] as number,
      };
    })
    .filter(Boolean);

  return (
    <div className={classes.backgroundWrapper}>
      <div
        className={classes.returnBack}
        onClick={() => setSentimentPopupOpen(false)}
      >
        <img
          className={classes.returnBackIcon}
          src="/assets/returnBackIcon.svg"
          alt="return back"
        />
        <Typography className={classes.returnBackText}>
          Назад
        </Typography>
      </div>
      <div className={classes.content}>
        <div
          className={classes.blackSection}
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            float: "left",
            background: "#121212",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignContent: "flex-start",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "auto",
            paddingBottom: "5vh",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              justifyContent: "left",
              gap: "1vw",
              height: "5vh",
              margin: "5vh 0 0 2vw",
            }}
          >
            <img
              src="/assets/circle_arrow_transparent.svg"
              alt="arrow"
              style={{ width: "5vh", height: "5vh", cursor: "pointer" }}
              onClick={() => handleClickOnToggler(false)}
            />
            <img
              src="/assets/circle_arrow_transparent.svg"
              alt="arrow"
              style={{
                width: "5vh",
                height: "5vh",
                cursor: "pointer",
                transform: "rotate(180deg)",
              }}
              onClick={() => handleClickOnToggler(true)}
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: "30vh",
            }}
          >
            <div className={cardClasses.header}>
              <div className={cardClasses.headerCategory}>
                <span>{data.city}:</span> <br />
                {data.category}
              </div>
              <div>индекс восприятия</div>
            </div>
            <div className={cardClasses.dictionaryListWrapper}>
              <div className={cardClasses.dictionaryContainer}>
                <dt
                  className={cardClasses.dictionaryTitle}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Тема{" "}
                  <span className={cardClasses.dictionaryCategoryColor}>
                    {data.category.toLowerCase()}
                  </span>
                </dt>
                <dl className={cardClasses.dictionaryList}>
                  <dt className={cardClasses.dictionaryTitle}>
                    Количество публикаций
                  </dt>
                  <dd className={cardClasses.dictionaryDescription}>
                    {data.categoryTotal}
                  </dd>
                </dl>
                <dl className={cardClasses.dictionaryList}>
                  <dt className={cardClasses.dictionaryTitle}>
                    Доля позитивных публикаций
                  </dt>
                  <dd className={cardClasses.dictionaryDescription}>
                    {(
                      (data.categoryPositive * 100) /
                      data.categoryTotal
                    ).toFixed(1)}
                    %
                  </dd>
                </dl>
                <dl className={cardClasses.dictionaryList}>
                  <dt className={cardClasses.dictionaryTitle}>
                    Доля негативных публикаций
                  </dt>
                  <dd className={cardClasses.dictionaryDescription}>
                    {(
                      (data.categoryNegative * 100) /
                      data.categoryTotal
                    ).toFixed(1)}
                    %
                  </dd>
                </dl>
              </div>
              <div className={cardClasses.dictionaryContainer}>
                <dt
                  className={cardClasses.dictionaryTitle}
                  style={{
                    textAlign: "center",
                  }}
                >
                  Все темы
                </dt>
                <dl className={cardClasses.dictionaryList}>
                  <dt className={cardClasses.dictionaryTitle}>
                    Количество публикаций
                  </dt>
                  <dd className={cardClasses.dictionaryDescription}>
                    {data.total}
                  </dd>
                </dl>
                <dl className={cardClasses.dictionaryList}>
                  <dt className={cardClasses.dictionaryTitle}>
                    Доля позитивных публикаций
                  </dt>
                  <dd className={cardClasses.dictionaryDescription}>
                    {((data.positive * 100) / data.total).toFixed(1)}%
                  </dd>
                </dl>
                <dl className={cardClasses.dictionaryList}>
                  <dt className={cardClasses.dictionaryTitle}>
                    Доля негативных публикаций
                  </dt>
                  <dd className={cardClasses.dictionaryDescription}>
                    {((data.negative * 100) / data.total).toFixed(1)}%
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <SocialChart chartData={graphData} news={news} />
        </div>
      </div>
    </div>
  );
};

import type { FC } from "react";
import { useCardStyles } from "./styles";

interface IProps {
  data: {
    city: string;
    total: number;
    positive: number;
    negative: number;
    category: string;
    categoryTotal: number;
    categoryPositive: number;
    categoryNegative: number;
  };
}

export const ContentBlock: FC<IProps> = ({ data }) => {
  const { classes, cx } = useCardStyles();
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "30vh",
      }}
    >
      <div className={classes.header}>
        <div className={classes.headerCategory}>
          <span>{data.city}:</span>{" "}
          <br />
          {data.category}
        </div>
        <div>индекс восприятия</div>
      </div>
      <div className={classes.dictionaryListWrapper}>
        <div className={classes.dictionaryContainer}>
          <dl className={classes.dictionaryList}>
            <dt className={classes.dictionaryTitle}>
              Публикации по теме{" "}
              <span className={classes.dictionaryCategoryColor}>
                {data.category.toLowerCase()}
              </span>
            </dt>
            <dd className={classes.dictionaryDescription}>
              {data.categoryTotal}
            </dd>
          </dl>
          <dl className={classes.dictionaryList}>
            <dt className={classes.dictionaryTitle}>
              Доля позитивных публикаций по теме{" "}
              <span>{data.category.toLowerCase()}</span>
            </dt>
            <dd className={classes.dictionaryDescription}>
              {((data.categoryPositive * 100) / data.categoryTotal).toFixed(1)}%
            </dd>
          </dl>
          <dl className={classes.dictionaryList}>
            <dt className={classes.dictionaryTitle}>
              Доля негативных публикаций по теме
              <span>{data.category.toLowerCase()}</span>
            </dt>
            <dd className={classes.dictionaryDescription}>
              {((data.categoryNegative * 100) / data.categoryTotal).toFixed(1)}%
            </dd>
          </dl>
        </div>
        <div className={classes.dictionaryContainer}>
          <dl className={classes.dictionaryList}>
            <dt className={classes.dictionaryTitle}>Всего публикаций</dt>
            <dd className={classes.dictionaryDescription}>{data.total}</dd>
          </dl>
          <dl className={classes.dictionaryList}>
            <dt className={classes.dictionaryTitle}>
              Доля позитивных публикаций
            </dt>
            <dd className={classes.dictionaryDescription}>
              {((data.positive * 100) / data.total).toFixed(1)}%
            </dd>
          </dl>
          <dl className={classes.dictionaryList}>
            <dt className={classes.dictionaryTitle}>
              Доля негативных публикаций
            </dt>
            <dd className={classes.dictionaryDescription}>
              {((data.negative * 100) / data.total).toFixed(1)}%
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

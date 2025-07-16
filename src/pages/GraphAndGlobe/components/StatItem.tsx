import type { FC } from "react";
import { useSelectedCityStyles } from "./styles";

interface IStatItemProps {
  color: string;
  title: string;
  value: string;
  status: string;
}

export const StatItem: FC<IStatItemProps> = ({
  color,
  title,
  value,
  status,
}) => {
  const { classes } = useSelectedCityStyles();

  return (
    <div className={classes.statItem}>
      <div className={classes.statTitle}>{title}</div>
      <div className={classes.statValue}>{value}</div>
      <div
        className={classes.statStatus}
        style={{
          // color: color,
          // borderColor: `${color}30`,
          color: "white",
          borderColor: "white",
        }}
      >
        {status[0].toUpperCase() + status.slice(1)}
      </div>
    </div>
  );
};

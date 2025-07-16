import type { FC } from "react";
import { useSelectedCityStyles } from "./styles";

export const Colors = {
  "VERY LOW": "#FF3B29",
  LOW: "#FF632F",
  AVERAGE: "#FF9B3F",
  STRONG: "#A0DA8B",
  "VERY STRONG": "#35CB00",
};

interface ISmallStatItemProps {
  label: string;
  status: string;
  style?: React.CSSProperties;
}

export const SmallStatItem: FC<ISmallStatItemProps> = ({
  label,
  status,
  style,
}) => {
  const { classes } = useSelectedCityStyles();
  if (!status) {
    return null;
  }

  return (
    <div className={classes.smallRowWrapper}>
      <div
        style={{
          display: "flex",
          float: "left",
          height: "100%",
          padding: "8px 0",
          marginRight: "3vh",
          width: "14vh",
          alignItems: "center",
        }}
      >
        {" "}
        <div className={classes.statsSmallText} style={style}>
          {label}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          className={classes.statStatus}
          style={{
            color: Colors[status.toUpperCase()],
            borderColor: `${Colors[status.toUpperCase()]}30`,
          }}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

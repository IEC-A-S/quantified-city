import type { FC } from "react";
import { useSelectedCityStyles } from "./styles";
import { ASSESSMENT_COLORS, getAssessmentColor } from "../../../utils/assessment";

export const Colors = ASSESSMENT_COLORS;

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
  const color = getAssessmentColor(status);

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
            color,
            borderColor: `${color}30`,
          }}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

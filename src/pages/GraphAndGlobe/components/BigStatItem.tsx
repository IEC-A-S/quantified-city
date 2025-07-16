import type { FC } from "react";
import { useSelectedCityStyles } from "./styles";
import { Grid } from "@mui/material";
import { Colors } from "./SmallStatItem";

interface IBigStatItemProps {
  label: string;
  subLabel?: string;
  status: string;
  isFirst?: boolean;
}

export const STATUS_COLORS = {
  A1: "#35CB00",
  A2: "#75D652",
  A3: "#B7DE86",
  B1: "#ECE38E",
  B2: "#FFD748",
  B3: "#FFC700",
  C1: "#FF9B3F",
  C2: "#FF632F",
  C3: "#F74B3C",
};

export const BigStatItem: FC<IBigStatItemProps> = ({
  label,
  subLabel,
  status,
  isFirst,
}) => {
  const { classes } = useSelectedCityStyles();
  if (!status) {
    return null;
  }

  const statusNormalized = status.replace("-", "").toUpperCase();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.3vh",
        alignItems: isFirst ? "flex-start" : "center",
      }}
    >
      <div
        className={classes.statsBigText}
        style={{
          textAlign: isFirst ? "left" : "center",
        }}
      >
        {label === "Urban resilience index" ? (
          <div>
            Urban
            <br />
            resilience index
          </div>
        ) : (
          label
        )}
      </div>
      {subLabel && (
        <div
          className={classes.lowOpacityLabel}
          style={{
            marginTop: "-.6vh",
          }}
        >
          {subLabel}
        </div>
      )}
      <div
        className={classes.statStatusBig}
        style={{
          color: "#fff",
          marginTop: !isFirst ? "1.5vh" : "0",
          padding: isFirst ? "1vh 3vh" : "1vh 3vh",
          backgroundColor: isFirst
            ? STATUS_COLORS[statusNormalized]
            : "rgba(255, 255, 255, 0.07)",
        }}
      >
        {status}
      </div>
    </div>
  );
};

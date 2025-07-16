import type { FC } from "react";
import { Colors } from "../../../../GraphAndGlobe/components/SmallStatItem";

interface IStatusItem {
  label: string;
  status: string;
}

export const StatusItem: FC<IStatusItem> = ({ label, status }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "25vh",
      }}
    >
      <div
        style={{
          fontFamily: "SuisseIntl-Light",
          fontSize: "1.85vh",
          color: "#fff",
          marginRight: "1.5vh",
          minWidth: "12vh",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "SuisseIntl-Light",
          fontSize: "1.7vh",
          fontWeight: 600,
          textAlign: "center",
          padding: "1.3vh 2vh",
          backgroundColor: "transparent",
          color: "#FF9B3F",
          border: "1px solid #FF9B3F",
          borderColor: `${Colors["AVERAGE"]}30`,
          borderRadius: 50,
          width: "fit-content",
        }}
      >
        {status}
      </div>
    </div>
  );
};

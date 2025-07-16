import type { FC } from "react";
import { Colors } from "../../../../GraphAndGlobe/components/SmallStatItem";
import { STATUS_COLORS } from "../../../../GraphAndGlobe/components/BigStatItem";

interface IBigStatItemProps {
  label: string;
  subLabel?: string;
  status: string;
  isFirst?: boolean;
  filled?: boolean;
}

export const BigSmallStatItem: FC<IBigStatItemProps> = ({
  label,
  subLabel,
  status,
  isFirst,
  filled,
}) => {
  const statusNormalized = status.replace("-", "");

  return (
    <>
      {isFirst ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              fontWeight: 100,
              fontSize: "2.4vh",
              textAlign: "center",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              fontWeight: 200,
              fontSize: "1.8vh",
              opacity: 0.6,
            }}
          >
            {subLabel}
          </div>
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              fontWeight: 200,
              fontSize: "1.5vh",
              border: "1px solid #fff",
              borderRadius: 50,
              padding: "1vh 3vh",
              marginTop: "1.4vh",
              color: STATUS_COLORS[statusNormalized],
              borderColor: `${STATUS_COLORS[statusNormalized]}30`,
            }}
          >
            {status}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              fontWeight: 100,
              fontSize: "2.4vh",
              textAlign: "center",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              fontWeight: 200,
              fontSize: "1.8vh",
              border: "1px solid #fff",
              borderRadius: 50,
              padding: "1vh 3vh",
              marginTop: "1.4vh",
              //color: Colors[status.toUpperCase().replace(" ", "_")],
              color: Colors[status.toUpperCase()],
              borderColor: `${
                //Colors[status.toUpperCase().replace(" ", "_")]
                Colors[status.toUpperCase()]
              }30`,
              borderWidth: filled ? 1 : 1,
              backgroundColor: filled
                ? `${Colors[status.toUpperCase()]}30`
                : "transparent",
            }}
          >
            {status}
          </div>
        </div>
      )}
    </>
  );
};

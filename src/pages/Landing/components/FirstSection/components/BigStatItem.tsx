import type { FC } from "react";
import { getAssessmentColor } from "../../../../../utils/assessment";

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
  const color = getAssessmentColor(status);

  return (
    <>
      {
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontWeight: 400,
              // fontSize: "18px",
              fontSize: "2vh",
              textAlign: "center",
              color: "#121212",
            }}
          >
            {label}
          </div>
          {isFirst && subLabel && (
              <div
                style={{
                  fontWeight: 200,
                  // fontSize: "14px",
                  fontSize: "1.5vh",
                  opacity: 0.6,
                  color: "#121212",

                }}
              >
                {subLabel}
              </div>
            )}
          <div
            style={{
              fontWeight: 200,
              fontSize: "1.8vh",
              border: "1px solid #fff",
              borderRadius: 50,
              padding: "1vh 3vh",
              marginTop: "1.4vh",
              color,
              borderColor: `${color}30`,
              borderWidth: filled ? 1 : 1,
              backgroundColor: filled ? `${color}30` : "transparent",
            }}
          >
            {status}
          </div>
        </div>
      }
    </>
  );
};

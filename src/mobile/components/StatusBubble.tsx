import type { FC } from "react";
import { getAssessmentColor, ASSESSMENT_COLORS } from "../../utils/assessment";

export const STATUS_COLORS_ENUM = ASSESSMENT_COLORS;
interface StatusBubbleProps {
  status?: string;
  text?: string;
  variant?: "outlined" | "opacity" | "solid";
  textColor?: string;
  fillColor?: string;
}

export const StatusBubble: FC<StatusBubbleProps> = ({
  status,
  variant = "outlined",
  text,
  textColor = "white",
  fillColor,
}) => {
  if (text) {
    return (
      <div
        style={{
          textWrap: "wrap",
          textTransform: "none",
          borderRadius: "16px",
          boxSizing: "border-box",
          fontFamily: "SuisseIntl-Thin",
          fontSize: 12,
          fontWeight: 300,
          width: "90px",
          padding: "7px 0px",
          boxShadow: "none",
          color: textColor ? textColor : "white",
          border: `1px solid white`,
          textAlign: "center",
          background: fillColor ? fillColor : "transparent",
        }}
      >
        {text[0].toUpperCase() + text.slice(1)}
      </div>
    );
  }
  if (variant === "outlined") {
    const color = getAssessmentColor(status);
    return (
      <div
        style={{
          textWrap: "nowrap",
          textTransform: "none",
          borderRadius: "16px",
          boxSizing: "border-box",
          fontFamily: "SuisseIntl-Thin",
          fontSize: 12,
          fontWeight: 300,
          width: "fit-content",
          padding: "8px 16px",
          boxShadow: "none",
          color: color,
          border: `1px solid ${color}`,
        }}
      >
        {status}
      </div>
    );
  }
  if (variant === "opacity") {
    const color = getAssessmentColor(status);
    return (
      <div
        style={{
          textWrap: "nowrap",
          textTransform: "none",
          borderRadius: "16px",
          fontFamily: "SuisseIntl-Thin",
          boxSizing: "border-box",
          fontSize: 12,
          fontWeight: 300,
          width: "fit-content",
          padding: "8px 16px",
          boxShadow: "none",
          color: color,
          backgroundColor: `${color}10`,
        }}
      >
        {status}
      </div>
    );
  }
  if (variant === "solid") {
    const color = getAssessmentColor(status);
    return (
      <div
        style={{
          textWrap: "nowrap",
          textTransform: "none",
          borderRadius: "16px",
          fontFamily: "SuisseIntl-Thin",
          boxSizing: "border-box",
          fontSize: 12,
          fontWeight: 300,
          width: "fit-content",
          padding: "8px 16px",
          boxShadow: "none",
          color: textColor,
          backgroundColor: `${color}`,
        }}
      >
        {status}
      </div>
    );
  }

  return null;
};

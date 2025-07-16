import type { FC } from "react";
export enum RATING_COLORS_ENUM {
  A1 = "#35CB00",
  A2 = "#75D652",
  A3 = "#B7DE86",
  B1 = "#ECE38E",
  B2 = "#FFD748",
  B3 = "#FFC700",
  C1 = "#FF9B3F",
  C2 = "#FF632F",
  C3 = "#F74B3C",
}

interface RatingBubbleProps {
  rating: string | undefined;
  size?: "small" | "medium" | "large";
}
export const RatingBubble: FC<RatingBubbleProps> = ({
  rating,
  size = "medium",
}) => {
  if (size === "small") {
    return (
      <div
        style={{
          textTransform: "none",
          borderRadius: "16px",
          fontFamily: "SuisseIntl-Thin",
          fontSize: 12,
          fontWeight: 300,
          width: "fit-content",
          padding: "8px 16px",
          boxShadow: "none",
          color: "white",
          backgroundColor:
            RATING_COLORS_ENUM[rating as keyof typeof RATING_COLORS_ENUM],
        }}
      >
        {rating}
      </div>
    );
  }
  return (
    <div
      style={{
        textTransform: "none",
        borderRadius: "16px",
        fontFamily: "SuisseIntl-Thin",
        fontSize: 18,
        fontWeight: 300,
        width: "fit-content",
        padding: "8px 16px",
        boxShadow: "none",
        color: "white",
        backgroundColor:
          RATING_COLORS_ENUM[rating as keyof typeof RATING_COLORS_ENUM],
      }}
    >
      {rating}
    </div>
  );
};

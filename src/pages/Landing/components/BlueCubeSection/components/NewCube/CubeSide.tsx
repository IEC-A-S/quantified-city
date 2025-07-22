import type { FC, ReactNode } from "react";
import { useState } from "react";

interface CubeSideProps {
  side: "left" | "right" | "top";
  children?: ReactNode;
  setHoveredSide: (side: string | null) => void;
}

export const CubeSide: FC<CubeSideProps> = ({
  children,
  side,
  setHoveredSide,
  setClickedCategory,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredSide(side);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredSide(null);
      }}
      style={{
        border: isHovered ? "1px solid #fff" : "1px solid transparent",
        position: "absolute",
        // backgroundColor:
        //   side === "top" ? "red" : side === "left" ? "blue" : "green",
        // backgroundImage: "url(/assets/cube_solid_bg.png)",
        backgroundColor: "#183633",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: side === "top" ? "404px" : "448px",
        width: side === "top" ? "456px" : "448px",
        padding: "20px 10px",
        boxSizing: "border-box",
        top: side === "left" ? "247px" : side === "right" ? "248px" : "11px",
        right: side === "left" ? "226px" : side === "right" ? "-74px" : "71px",
        transform:
          side === "left"
            ? "skew(0deg, 35.5deg) scale(0.67)"
            : side === "right"
            ? "skew(0deg, -35.5deg) scale(0.67)"
            : "rotate3d(1.1, 0.7, 1.2, -63.7deg)",
      }}
    >
      {children}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          fontSize: "25px",
          opacity: isHovered ? 1 : 0.7,
          color: "#fff",
        }}
      >
        {side === "left"
          ? "Economic"
          : side === "right"
          ? "Urban"
          : "Social"}
      </div>
    </div>
  );
};

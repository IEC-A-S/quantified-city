import type { FC, ReactNode } from "react";
import { useState } from "react";

interface CubeSideProps {
  side: "left" | "right" | "top";
  children?: ReactNode;
}

export const CubeSide: FC<CubeSideProps> = ({ children, side }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: isHovered ? "1px solid #fff" : "1px solid transparent",
        position: "absolute",
        backgroundImage: "url(/assets/black_cube_texture.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: side === "top" ? "40.6vh" : "45vh",
        width: side === "top" ? "45.6vh" : "45vh",
        padding: "2vh 1vh",
        boxSizing: "border-box",
        top: side === "left" ? "40vh" : side === "right" ? "40.1vh" : "16.4vh",
        right:
          side === "left" ? "80.1vh" : side === "right" ? "49.9vh" : "64.7vh",
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
          bottom: "2vh",
          right: "2vh",
          fontSize: "2vh",
          opacity: isHovered ? 1 : 0.7,
        }}
      >
        {side === "left"
          ? "Environment"
          : side === "right"
          ? "Governmental"
          : "Social"}
      </div>
    </div>
  );
};

import type { FC } from "react";
import { useState } from "react";

interface ICategoryItem {
  title: string;
  color: string;
}
export const CategoryItem: FC<ICategoryItem> = ({ title, color }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      style={{
        cursor: "pointer",
        fontSize: "2.1vh",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          backgroundColor: hovered ? color : "transparent",
          borderRadius: "32px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: ".6vh 2vh",
          gap: "1.5vh",
        }}
      >
        <div>{title}</div>
        <div
          style={{
            width: "2vh",
            height: "2vh",
            backgroundColor: hovered ? "#fff" : color,
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
};

import type { FC } from "react";

interface ICircle {
  bgUrl: string;
  isActive?: boolean;
  onClick(): void;
}

export const Cirlce: FC<ICircle> = ({ bgUrl, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        pointerEvents: "all",
        cursor: "pointer",
        height: "4.5vh",
        width: "4.5vh",
        borderRadius: "50%",
        border: "1px solid #fff",
        backgroundImage: isActive ? "none" : `url(${bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isActive && (
        <div
          style={{
            height: "10px",
            width: "10px",
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        ></div>
      )}
    </div>
  );
};

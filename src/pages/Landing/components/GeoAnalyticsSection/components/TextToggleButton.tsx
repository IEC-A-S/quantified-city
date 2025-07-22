import { FC, useState } from "react";

interface TextToggleButtonProps {
  label: JSX.Element | string;
  isTitle?: boolean;
  isActive?: boolean;
  disabled?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

export const TextToggleButton: FC<TextToggleButtonProps> = ({
  label,
  isTitle,
  isActive,
  disabled,
  isMobile,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
      }}
      onMouseOut={() => !isTitle && setHovered(false)}
      onMouseOver={() => !isTitle && !disabled && setHovered(true)}
      style={{
        cursor: hovered ? "pointer" : "default",
        fontWeight: hovered || isActive ? 600 : 400,
        backgroundColor: "#fff",
        color: isActive ? "#2D67FF" : "#000",
        border: "none",
        textAlign: "left",
        opacity: disabled ? 0.5 : 1,
        display: "inline-block",
        textWrap: "nowrap",
        width: isMobile
          ? label === "Population"
            ? "100%"
            : "40%"
          : "fit-content",
      }}
    >
      <div
        style={{
          pointerEvents: "all",
          position: "relative",
          fontSize: "1.8vh",
          width: "100%",
        }}
      >
        {label}
      </div>
    </button>
  );
};

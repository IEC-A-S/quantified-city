import type { FC, React } from "react";
import { useConetentRowStyles } from "../styles";
import { Typography } from "@mui/material";

interface IContentRowProps {
  name: string;
  text?: string;
  children?: React.ReactNode;
}

export const ContentRow: FC<IContentRowProps> = ({ name, text, children }) => {
  const { classes } = useConetentRowStyles();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "32px",
        padding: "16px",
      }}
    >
      <Typography
        variant={"h2"}
        style={{
          fontFamily: "SuisseIntl-Regular",
          color: "#000",
          opacity: 0.2,
        }}
      >
        {name}
      </Typography>
      {children}
    </div>
  );
};

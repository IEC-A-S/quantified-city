import type { FC } from "react";
import { Typography } from "@mui/material";
import { usePopupStyles } from "../index";

interface BackToUrbanProps {
  setClickedCategory: (category: string | null) => void;
}

export const BackToUrban: FC<BackToUrbanProps> = ({ setClickedCategory }) => {
  const { classes } = usePopupStyles();

  return (
    <div
      onClick={() => {
        setClickedCategory(null);
        const landing = document.getElementById("landing");
        landing.scrollTo({
          top: landing.clientHeight * 2,
        });
      }}
      className={classes.returnBack}
    >
      <img
        className={classes.returnBackIcon}
        src="/assets/returnBackIcon.svg"
        alt="return back"
      />
      <Typography variant={"h4"}>Back to Urban resilience index</Typography>
    </div>
  );
};

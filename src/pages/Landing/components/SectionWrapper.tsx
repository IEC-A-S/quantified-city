import type { FC, ReactNode } from "react";
import { useLandingStyles } from "./styles";
import Fade from "@mui/material/Fade";

interface ISectionWrapper {
  children: ReactNode;
  isActive: boolean;
  sectionIndex: number;
}

export const SectionWrapper: FC<ISectionWrapper> = ({ children, isActive }) => {
  const { classes } = useLandingStyles();

  return (
    // <Fade in={isActive} timeout={1000}>
    <div
      className={`${classes.sectionWrapper} ${
        // isActive ? classes.sticky : ""
        isActive ? "" : ""
      }`}
    >
      {children}
    </div>
    // </Fade>
  );
};

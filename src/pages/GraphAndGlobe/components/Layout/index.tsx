import { useAppStyles } from "../styles";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  backgroundColor?: string;
}

export const Layout = ({ children, backgroundColor }: LayoutProps) => {
  const { classes } = useAppStyles();

  const defaultColor = "rgba(240, 234, 214, 1)";

  return (
    <div
      className={classes.root}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : defaultColor,
      }}
    >
      <div className={classes.contentWrapper}>{children}</div>
    </div>
  );
};

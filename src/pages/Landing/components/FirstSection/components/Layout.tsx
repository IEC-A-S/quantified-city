import type { ReactNode } from "react";
import { useAppStyles } from "../../../../GraphAndGlobe/components/styles";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { classes } = useAppStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentWrapper}>{children}</div>
    </div>
  );
};

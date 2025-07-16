import { Button, Typography } from "@mui/material";
import { useHeaderStyles } from "../styles";
import type { FC } from "react";

const i18nObject = {
  menu: "Menu",
  login: "Log in",
  signup: "Sign up",
  back: "Back to globe",
};

interface IHeaderProps {
  isCitySelected: boolean;
  setSelectedCity(city: string | null): void;
  setMenuVisible(menuVisible: boolean): void;
}

export const Header: FC<IHeaderProps> = ({
  isCitySelected,
  setSelectedCity,
  setMenuVisible,
}) => {
  const t = (key: keyof typeof i18nObject) => i18nObject[key];
  const { classes } = useHeaderStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          gap: "2.5vh",
          alignItems: "center",
        }}
      >
        {isCitySelected && (
          <div
            onClick={() => {
              setSelectedCity(null);
            }}
            className={classes.menuIconWrapper}
          >
            <img
              style={{ width: "4.7vh" }}
              src="/assets/backToGlobeIcon.svg"
              width={45}
              alt="logo"
            />
            <Typography className={classes.whiteText}>{t("back")}</Typography>
          </div>
        )}
        <div
          onClick={() => setMenuVisible(true)}
          className={classes.menuIconWrapper}
        >
          <img
            style={{ width: "4.7vh" }}
            src="/assets/menuIcon.svg"
            width={45}
            alt="logo"
          />
          <Typography className={classes.whiteText}>{t("menu")}</Typography>
        </div>
      </div>
      <img style={{ width: "7.8vh" }} src="/assets/logo.svg" alt="logo" />
      <div className={classes.buttonsWrapper}>
        <Button className={classes.whiteText}>{t("login")}</Button>
        <Button
          className={classes.signUpButton}
          style={{
            backgroundColor: isCitySelected ? "#FFFFFF" : "#2D67FF",
            color: isCitySelected ? "#1433AE" : "#FFFFFF",
          }}
        >
          {t("signup")}
        </Button>
      </div>
    </div>
  );
};

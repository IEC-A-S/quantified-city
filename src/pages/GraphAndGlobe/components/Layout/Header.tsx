import { Button, Typography } from "@mui/material";
import { useHeaderStyles } from "../styles";
import type { FC } from "react";

const i18nObject = {
  login: "Log in",
  signup: "Sign up",
  back: "РќР°Р·Р°Рґ Рє РіР»РѕР±СѓСЃСѓ",
};

interface IHeaderProps {
  isCitySelected: boolean;
  setSelectedCity(city: string | null): void;
}

export const Header: FC<IHeaderProps> = ({
  isCitySelected,
  setSelectedCity,
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
      </div>
      <img
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "10.5vh",
        }}
        src="/assets/logo.svg"
        alt="logo"
      />
      <div className={classes.buttonsWrapper}>
        {/*<Button className={classes.whiteText}>{t("login")}</Button>*/}
        {/*<Button*/}
        {/*  className={classes.signUpButton}*/}
        {/*  style={{*/}
        {/*    backgroundColor: isCitySelected ? "#FFFFFF" : "#2D67FF",*/}
        {/*    color: isCitySelected ? "rgba(240, 234, 214, 1)" : "#FFFFFF",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {t("signup")}*/}
        {/*</Button>*/}
      </div>
    </div>
  );
};

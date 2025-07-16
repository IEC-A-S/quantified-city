import { Button, Typography } from "@mui/material";
import { useHeaderStyles } from "../../GraphAndGlobe/components/styles";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const i18nObject = {
  menu: "Menu",
  login: "Log in",
  signup: "Sign up",
  back: "Back to globe",
};

interface HeaderProps {
  invertColors?: boolean;
  displayBackButton?: boolean;
  marginLogo?: string;
  setMenuVisible(visible: boolean): void;
}

export const Header: FC<HeaderProps> = ({
  invertColors,
  setMenuVisible,
  displayBackButton,
  marginLogo,
}) => {
  const t = (key: keyof typeof i18nObject) => i18nObject[key];
  const { classes } = useHeaderStyles();

  const navigate = useNavigate();

  return (
    <div
      className={classes.root}
      style={{
        margin: invertColors ? "unset" : "0 10vh 0 10vh",
        padding: invertColors ? "0 10vh 0 10vh" : "0",
        borderBottom: invertColors ? "1px solid #000" : "1px solid #fff",
        backgroundColor: invertColors ? "#fff" : "transparent",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "2.5vh",
          alignItems: "center",
        }}
      >
        <div className={classes.menuIconWrapper}>
          <div
            onClick={() => setMenuVisible(true)}
            style={{
              display: "flex",
              gap: "1vh",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "4.7vh" }}
              src="/assets/orangeMenuIcon.svg"
              width={45}
              alt="logo"
            />
            <Typography
              className={classes.whiteText}
              style={{
                color: invertColors ? "#000" : "#fff",
              }}
            >
              {t("menu")}
            </Typography>
          </div>
        </div>
      </div>
      <img
        style={{ width: "50vh", marginLeft: marginLogo ? marginLogo : "0" }}
        src={
          invertColors ? "/assets/expo_logo_black.svg" : "/assets/expo_logo.svg"
        }
        alt="logo"
      />

      <img src="/assets/orangeAvatarIcon.svg" alt="user icon" />
    </div>
  );
};

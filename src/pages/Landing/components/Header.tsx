import { Button, Typography } from "@mui/material";
import { useHeaderStyles } from "../../GraphAndGlobe/components/styles";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const i18nObject = {
  login: "Log in",
  signup: "Sign up",
  back: "Назад к глобусу",
};

interface HeaderProps {
  invertColors?: boolean;
  displayBackButton?: boolean;
  marginLogo?: string;
}

export const Header: FC<HeaderProps> = ({
  invertColors,
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
        margin: invertColors ? "unset" : "0 15% 0 15%",
        padding: invertColors ? "0 15% 0 15%" : "0",
        borderBottom: "2px solid #121212",
        backgroundColor: "rgba(240, 234, 214, 1)",
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
          {!displayBackButton && (
            <div
              onClick={() => {
                navigate("/");
              }}
              style={{
                display: "flex",
                gap: "1vh",
                alignItems: "center",
                cursor: "pointer",
                marginRight: "2vh",
              }}
            >
              <img
                style={{
                  width: "4.7vh",
                }}
                src="/assets/backToGlobeIcon.svg"
                width={45}
                alt="logo"
              />
              <Typography
                className={classes.whiteText}
                style={{
                  color: "#121212",
                }}
              >
                {t("back")}
              </Typography>
            </div>
          )}
        </div>
      </div>
      <img
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        src="/assets/logo.svg"
        alt="logo"
      />
      <div className={classes.buttonsWrapper}>
        <div
          style={{
            width: "19vh",
          }}
        ></div>
      </div>
    </div>
  );
};

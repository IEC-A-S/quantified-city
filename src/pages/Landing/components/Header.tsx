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
                src="/assets/blackMenuIcon.svg"
                width={45}
                alt="logo"
              />
            <Typography
              className={classes.whiteText}
              style={{
                color: "#121212",
              }}
            >
              {t("menu")}
            </Typography>
          </div>
        </div>
      </div>
      <img
        style={{
          // width: "7.8vh",
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
        {/*<Button*/}
        {/*  style={{*/}
        {/*    color: "#000",*/}
        {/*    background: "#fff",*/}
        {/*    borderRadius: 50,*/}
        {/*    padding: ".8vh 2vh",*/}
        {/*    textTransform: "none",*/}
        {/*    */}
        {/*    fontSize: "1.7vh",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Dashboard*/}
        {/*</Button>*/}
        {/*{!invertColors ? (*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      fontWeight: 600,*/}
        {/*      color: "#fff",*/}
        {/*      textTransform: "none",*/}
        {/*      fontSize: "1.8vh",*/}
        {/*      height: "4.6vh",*/}
        {/*      width: "fit-content",*/}
        {/*      padding: "0 1.5vh",*/}
        {/*      backgroundColor: "#fff",*/}
        {/*      borderRadius: "50px",*/}
        {/*      display: "flex",*/}
        {/*      alignItems: "center",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <img*/}
        {/*      src="/assets/avatarIcon.svg"*/}
        {/*      alt="user icon"*/}
        {/*      style={{*/}
        {/*        width: "2.5vh",*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <img src="/assets/blackAvatarIcon.svg" alt="user icon" />*/}
        {/*)}*/}
      </div>
    </div>
  );
};

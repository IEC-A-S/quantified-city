import type { FC } from "react";

interface HeaderProps {
  setMenuVisible?(menuVisible: boolean): void;
  isOrange?: boolean;
  isInverted?: boolean;
  isBackArrowShown?: boolean;
  isUserLoggedIn?: boolean;
  onBackClick?(): void;
}

export const Header: FC<HeaderProps> = ({
  isOrange = false,
  isBackArrowShown = false,
  isInverted = false,
  isUserLoggedIn = false,
  onBackClick = () => {},
}) => {
  return (
    <div
      style={{
        pointerEvents: "all",
        position: "sticky",
        top: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: "16px",
        borderBottom: isInverted ? "1px solid #000000" : "1px solid #fff",
        backgroundColor: isInverted ? "#fff" : "transparent",
        zIndex: 1,
        padding: isInverted ? "16px" : "0 0 16px 0",
        boxSizing: "border-box",
      }}
    >
      <>
        <div
          style={{
            filter: isInverted ? "invert(1)" : "unset",
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            minWidth: "32px",
          }}
        >
          {isBackArrowShown && (
            <img
              src={"/assets/backIconWhite.svg"}
              alt=""
              width="32"
              onClick={onBackClick}
            />
          )}
        </div>
        {isOrange ? (
          <>
            {isInverted ? (
              <img
                src={"/assets/expo_logo_mobile_black.svg"}
                alt=""
                height="32"
              />
            ) : (
              <img src={"/assets/expo_logo_mobile.svg"} alt="" />
            )}
            <img src="/assets/orangeAvatarIcon.svg" alt="logout" width="32" />
          </>
        ) : (
          <>
            <img
              src="/assets/logo.svg"
              height={32}
              alt="logo icon"
              style={{
                filter: isInverted ? "invert(1)" : "unset",
              }}
            />
            {isUserLoggedIn && (
              <img
                src="/assets/loggedInIcon.svg"
                alt="logout"
                style={{
                  filter: isInverted ? "invert(1)" : "unset",
                }}
              />
            )}
            {!isUserLoggedIn && (
              <img src="/assets/logoutIcon.svg" alt="logout" />
            )}
          </>
        )}
      </>
    </div>
  );
};

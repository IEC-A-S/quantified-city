import { type FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MenuLinks = [
  {
    name: "City Profile",
    link: "/",
  },
  //{
  //   name: "Urban Rating & Monitoring",
  //   link: "/urban",
  // },
  // {
  //   name: "Corporate Rating & Monitoring",
  //   link: "/",
  //   disabled: true,
  // },
  // {
  //   name: "Project Marketplace",
  //   link: "/marketplace",
  // },
  // {
  //   name: "Expo City Dubai",
  //   link: "/expo_city_dubai",
  // },
  {
    name: "About Us",
    link: "/governance",
  },
  {
    name: "Data & Insights",
    // link: "/",
    disabled: true,
  },
  // {
  //   name: "Resilience News",
  //   link: "/resilience_news",
  // },
];

interface MainMenuProps {
  setVisible(visible: boolean): void;
  isMobile?: boolean;
}
export const MainMenu: FC<MainMenuProps> = ({
  setVisible,
  isMobile = false,
}) => {
  const location = useLocation();

  return (
    <div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 9999,
          background: "rgba(0, 0, 0, 0.3)",
          "-webkit-backdrop-filter": "blur(30px)",
          backdropFilter: "blur(30px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 9999,
          boxSizing: "border-box",
          paddingLeft: isMobile ? "16px" : "15vh",
          paddingRight: isMobile ? "16px" : "15vh",
          paddingTop: isMobile ? "16px" : "4vh",
        }}
      >
        <div
          onClick={() => setVisible(false)}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "2vh",
            color: "#FFFFFF",
            fontSize: isMobile ? "14px" : "3vh",
            fontFamily: "SuisseIntl-Light",
            fontWeight: 600,
            marginBottom: isMobile ? "16px" : "10vh",
          }}
        >
          <img
            src={"/assets/closeBtn.svg"}
            alt="close"
            style={{
              width: isMobile ? "32px" : "unset",
            }}
          />
          Close menu
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "3vh" : "unset",
          }}
        >
          {MenuLinks.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              link={item.link}
              isActive={item.link === location.pathname}
              isDisabled={item.disabled}
              isMobile={isMobile}
              setVisible={setVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface MenuItemProps {
  name: string;
  link?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  isMobile?: boolean;
  setVisible(visible: boolean): void;
}

const MenuItem: FC<MenuItemProps> = ({
  name,
  link,
  isDisabled,
  isActive,
  isMobile = false,
  setVisible,
}) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => (isMobile ? setHovered(false) : setHovered(true))}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (!link) return;

        if (isActive) {
          setVisible(false);
          return;
        }

        navigate(link);
      }}
      style={{
        pointerEvents: isDisabled ? "none" : "auto",
        userSelect: "none",
        cursor: "pointer",
        fontFamily: "SuisseIntl-Light",
        fontWeight: 400,
        color: hovered || isActive ? "#2D67FF" : "#FFFFFF",
        fontSize: isMobile ? "24px" : "8vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        gap: "2vh",
      }}
    >
      <div
        style={{
          opacity: isDisabled ? 0.1 : 1,
        }}
      >
        {hovered && !isActive && (
          <img
            src={"/assets/menuArrow.svg"}
            alt="arrow"
            style={{
              marginRight: "2vh",
            }}
          />
        )}
        {name}
      </div>
      {isDisabled ? (
        isMobile ? (
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              textWrap: "nowrap",
              fontWeight: 600,
              color: "#FFFFFF",
              fontSize: "2vh",
              opacity: 1,
              width: "fit-content",
              borderRadius: "4vh",
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "8px 16px",
            }}
          >
            Coming soon
          </div>
        ) : (
          <div
            style={{
              fontFamily: "SuisseIntl-Light",
              fontWeight: 600,
              color: "#FFFFFF",
              fontSize: "2vh",
              opacity: 1,
              width: "fit-content",
              borderRadius: "4vh",
              backgroundColor: "rgba(255,255,255,0.1)",
              padding: "1vh 2vh",
            }}
          >
            Coming soon
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

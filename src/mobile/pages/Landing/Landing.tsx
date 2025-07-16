import { makeStyles } from "tss-react/mui";
import { CITY_DATA } from "../../../data";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { MainMenu } from "../../../components/MainMenu";
import { CityDataProvider } from "../../../providers/CityDataProvider";
import { FirstSection } from "./FirstSection";
import { GallerySection } from "./GallerySection";
import { BlueCubeSection } from "./BlueCubeSection";
import { GraphSection } from "./GraphSection";
import { GeoAnalytics } from "./GeoAnalytics";
import { SentimentGraphSection } from "./SentimentGraphSection";
import { TablePopup } from "../../../pages/TablePopup";
import { BlueCubePopup } from "./BlueCubePopup";
import { SocialPopup } from "../../SocialPopup";

export const useLandingStyles = makeStyles()({
  root: {
    position: "relative",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    backgroundColor: "rgba(21, 52, 175, 1)",
    overflow: "scroll",
  },
  statusColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },
  statusRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "32px",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

export const Landing = () => {
  const navigate = useNavigate();
  const { classes } = useLandingStyles();
  const { cityName } = useParams();
  const cityData = CITY_DATA.find((city) => city.City === cityName);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [tablePopupOpen, setTablePopupOpen] = useState(false);
  const [socialPopupOpen, setSocialPopupOpen] = useState(false);

  const [activeSection, setActiveSection] = useState(0);
  const [firstSectionHeight, setFirstSectionHeight] = useState<number>(0);

  const [invertColors, setInvertColors] = useState(false);
  useEffect(() => {
    const landing = document.getElementById("landing")!;

    landing.addEventListener("scroll", (e) => {
      const sectionHeight = landing.clientHeight;
      const pagePos = landing.scrollTop;
      const sectionIndex = Math.floor(pagePos / sectionHeight);

      setActiveSection(sectionIndex);
    });
  }, []);

  useEffect(() => {
    const landing = document.getElementById("landing")!;

    landing.addEventListener("scroll", (e) => {
      const sectionHeight = landing.clientHeight;
      const pagePos = landing.scrollTop;
      const sectionIndex = Math.floor(pagePos / sectionHeight);
      setActiveSection(sectionIndex);

      // если скролл больше 0, то меняем цвета
      if (pagePos > 0) {
        setInvertColors(true);
      } else {
        setInvertColors(false);
      }
    });
  }, [document.getElementById("landing")?.scrollTop]);

  return (
    <CityDataProvider cityData={cityData}>
      <div>
        {menuVisible && (
          <MainMenu setVisible={setMenuVisible} isMobile={true} />
        )}
        {tablePopupOpen && (
          <TablePopup setTablePopupOpen={setTablePopupOpen} isMobile={true} />
        )}
        {socialPopupOpen && (
          <SocialPopup
            city={cityData?.City!}
            setSocialPopupOpen={setSocialPopupOpen}
          />
        )}

        <div className={classes.root} id="landing">
          <div
            style={{
              padding: invertColors ? "0" : "16px",
              paddingBottom: "16px",
              position: "sticky",
              top: "0",
              zIndex: 10,
            }}
          >
            <div>
              <Header
                setMenuVisible={setMenuVisible}
                isBackArrowShown={true}
                isUserLoggedIn={true}
                isInverted={invertColors}
                onBackClick={() => navigate("/urban")}
              />
            </div>
          </div>
          <FirstSection setFirstSectionHeight={setFirstSectionHeight} />
          <GallerySection />
          <BlueCubeSection
            clickedCategory={clickedCategory}
            setClickedCategory={setClickedCategory}
            setTablePopupOpen={setTablePopupOpen}
          />
          {cityData?.City !== "Lahore" && cityData?.City !== "Nairobi" && (
            <SentimentGraphSection setSocialPopupOpen={setSocialPopupOpen} />
          )}
          <GraphSection />
          {(cityName === "Dubai" ||
            cityName === "Dar es Salaam" ||
            cityName === "Astana" ||
            cityName === "Lahore" ||
            cityName === "Nairobi") && <GeoAnalytics />}
        </div>
      </div>
      {clickedCategory && (
        <BlueCubePopup
          category={clickedCategory}
          city={cityName}
          setClickedCategory={setClickedCategory}
        />
      )}
    </CityDataProvider>
  );
};

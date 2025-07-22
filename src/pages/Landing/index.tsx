import { useLandingStyles } from "./components/styles";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SectionWrapper } from "./components/SectionWrapper";
import { FirstSection } from "./components/FirstSection";
import { ImageSection } from "./components/ImageSection";
import { BlueCubeSection } from "./components/BlueCubeSection";
import { useNavigate, useParams } from "react-router-dom";
import { CITY_DATA } from "../../data";
import { CityDataProvider } from "../../providers/CityDataProvider";
import { GeoAnalyticsSection } from "./components/GeoAnalyticsSection";
import { BlueCubePopup } from "../BlueCubePopup";
import { MainMenu } from "../../components/MainMenu";
import { TablePopup } from "../TablePopup";
import { StarGraph } from "./components/StarGraph";
import type {
  ICityData,
  ICityDTO,
  ISentimentDTO,
} from "./components/StarGraph/interfaces";
import "chart.js/auto";
import { UrbanSentimentSection } from "./components/UrbanSentimentSection";
import SENTIMENT_DATA from "../../data/sentimentGraph.json";
import { SocialPopup } from "../SocialPopup";
import { GeoMapDeSalam } from "./components/GeoAnalyticsSection/components/GeoMap/GeoMapDeSalam";
import { TimeLossInTrafficPopUp } from "../TimeLossInTrafficPopUp";
import { TimeLossPopup } from "../TimeLossPopup";

export const getCityDataForStarGraph = (cityDataArr: ICityDTO[]): ICityData[] =>
  cityDataArr.map((cityData) => ({
    City: cityData.City,
    ...cityData.tr_graph,
  }));

const getCityDataForSentimentGraph = (
  cityDataArr: ISentimentDTO[]
): ISentimentDTO[] =>
  cityDataArr.map((cityData) => ({
    ...cityData,
    City: cityData.City,
  }));

export const Landing = () => {
  const { classes } = useLandingStyles();
  const [activeSection, setActiveSection] = useState(0);
  const [invertColors, setInvertColors] = useState(false);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);
  const [tablePopupOpen, setTablePopupOpen] = useState(false);
  const [sentimentPopupOpen, setSentimentPopupOpen] = useState(false);
  const [timeLossInTrafficPopupOpen, setTimeLossInTrafficPopupOpen] =
    useState(false);

  const [menuVisible, setMenuVisible] = useState(false);

  // url is /city/:cityName
  //get cityName from url
  const navigate = useNavigate();
  const { cityName } = useParams();
  const cityData = CITY_DATA.find((city) => city.City === cityName)!;

  // =================================================================
  // Временная заглушка для разработки геоаналитики для Астаны
  // let cityData;
  // if (cityName === "Astana") {
  //   cityData = CITY_DATA.find((city) => city.City === "Dubai")!;
  // } else {
  //   cityData = CITY_DATA.find((city) => city.City === cityName)!;
  // }
  // ==================================================================

  const handleScroll = (scrollingDirection: String) => {
    const landing = document.getElementById("landing")!;
    const sectionHeight = landing.clientHeight;
    const pagePos = landing.scrollTop;

    //console.log(scrollingDirection);

    let scrollTo = 0;

    if (scrollingDirection == "down") {
      scrollTo = pagePos + sectionHeight;
    } else if (scrollingDirection == "up") {
      scrollTo = pagePos - sectionHeight;
    }

    landing.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const landing = document.getElementById("landing")!;
    landing.addEventListener("wheel", (e) => {
      // e.preventDefault();

      if (e.deltaY < 0) {
        // handleScroll("up");
        // landing.scrollTo({
        //   top: landing.scrollTop - landing.clientHeight,
        //   behavior: "smooth",
        // });
      } else if (e.deltaY > 0) {
        // landing.scrollTo({
        //   top: landing.scrollTop + landing.clientHeight,
        //   behavior: "smooth",
        // });
      }
      //;
    });
    //landing.addEventListener("scroll", handleScroll(e));

    // landing.addEventListener("wheel", (e) => {
    //   e.preventDefault();
    //   const landing = document.getElementById("landing");
    //   let deltaY = e.deltaY;
    //   landing.scrollTop += deltaY * 1.3;
    // });
    // Очистка слушателя событий при размонтировании компонента
    return () => {
      landing.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const landing = document.getElementById("landing")!;
    landing.addEventListener("scroll", (e) => {
      // landing.scrollTo({
      //   top: landing.scrollTop - landing.clientHeight,
      //   behavior: "smooth",
      // });
    });
    return () => {
      landing.removeEventListener("scroll", handleScroll);
    };
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
  }, []);

  return (
    <CityDataProvider cityData={cityData}>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      {tablePopupOpen && <TablePopup setTablePopupOpen={setTablePopupOpen} />}
      {sentimentPopupOpen && (
        <SocialPopup
          setSentimentPopupOpen={setSentimentPopupOpen}
          city={cityData.City}
        />
      )}

      <div
        style={{
          display:
            clickedCategory ||
            tablePopupOpen ||
            sentimentPopupOpen ||
            timeLossInTrafficPopupOpen
              ? "none"
              : "block",
          position: "absolute",
          // backgroundColor: "#203CBF",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Header
          // invertColors={
          //   activeSection === 3 || activeSection === 4 || activeSection === 5
          // }
          invertColors={invertColors}
          setMenuVisible={setMenuVisible}
        />
      </div>
      <div className={classes.root} id="landing">
        <SectionWrapper isActive={activeSection === 0} sectionIndex={0} key={0}>
          <FirstSection setActiveSection={setActiveSection} />
        </SectionWrapper>
        <SectionWrapper isActive={activeSection === 1} sectionIndex={1} key={1}>
          <ImageSection setActiveSection={setActiveSection} />
        </SectionWrapper>
        <SectionWrapper isActive={activeSection === 2} sectionIndex={2} key={2}>
          <BlueCubeSection
            setClickedCategory={setClickedCategory}
            clickedCategory={clickedCategory}
            setTablePopupOpen={setTablePopupOpen}
          />
        </SectionWrapper>
        {/*<SectionWrapper isActive={activeSection === 3} sectionIndex={3} key={3}>*/}
        {/*  <BlackCubeSection />*/}
        {/*</SectionWrapper>*/}
        {cityData?.City !== "Lahore" && cityData?.City !== "Nairobi" && (
          <SectionWrapper
            isActive={activeSection === 4}
            sectionIndex={4}
            key={4}
          >
            <UrbanSentimentSection
              cityDataArr={getCityDataForSentimentGraph(
                SENTIMENT_DATA as unknown as ISentimentDTO[]
              )}
              currentCity={cityData.City}
              colors={[
                "#2D67FF",
                "#00BCF8",
                "#00DDD0",
                "#8490FF",
                "#AD00FF",
                "#FF7AE2",
              ]}
              setSentimentPopupOpen={setSentimentPopupOpen}
            />
          </SectionWrapper>
        )}
        <SectionWrapper isActive={activeSection === 3} sectionIndex={3} key={3}>
          <StarGraph
            cityDataArr={getCityDataForStarGraph(CITY_DATA)}
            setTimeLossInTrafficPopupOpen={setTimeLossInTrafficPopupOpen}
            currentCity={cityData.City}
            colors={[
              "#2D67FF",
              "#00BCF8",
              "#00DDD0",
              "#8490FF",
              "#AD00FF",
              "#FF7AE2",
            ]}
          />
        </SectionWrapper>
        {(cityData?.City === "Dubai" ||
          cityData?.City === "Dar es Salaam" ||
          cityData?.City === "Astana" ||
          cityData?.City === "Lahore" ||
          cityData?.City === "Nairobi") && (
          <SectionWrapper
            isActive={activeSection === 5}
            sectionIndex={5}
            key={5}
          >
            <GeoAnalyticsSection />
          </SectionWrapper>
        )}
      </div>
      {clickedCategory && (
        <BlueCubePopup
          category={clickedCategory}
          city={cityData.City}
          setClickedCategory={setClickedCategory}
        />
      )}
      {timeLossInTrafficPopupOpen && (
        <TimeLossPopup
          city={cityData.City}
          isMobile={false}
          onClose={() => setTimeLossInTrafficPopupOpen(false)}
        />
      )}
    </CityDataProvider>
  );
};

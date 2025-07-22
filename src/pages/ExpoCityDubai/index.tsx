import { Header } from "./components/Header";
import { useExpoCityStyles } from "./styles";
import { Button, Slide } from "@mui/material";
import { ImageGallery } from "../Landing/components/ImageSection/components/ImageGallery";
import { Cirlce } from "../Landing/components/ImageSection/components/Circle";
import { useEffect, useState } from "react";
import { MainMenu } from "../../components/MainMenu";

const imagesUrls = [
  "/assets/expo_bg.png",
  "/assets/Expo/1.jpg",
  "/assets/Expo/2.jpg",
  "/assets/Expo/3.jpg",
  "/assets/Expo/4.jpg",
  "/assets/Expo/5.jpg",
];

export const ExpoCityDubai = () => {
  const { classes } = useExpoCityStyles();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [invertColors, setInvertColors] = useState(false);

  useEffect(() => {
    const landing = document.getElementById("landing2");

    landing.addEventListener("scroll", (e) => {
      const sectionHeight = landing.clientHeight;
      const pagePos = landing.scrollTop;
      const sectionIndex = Math.floor(pagePos / sectionHeight);
      setActiveSection(sectionIndex);

      if (pagePos > 0) {
        setInvertColors(true);
      } else {
        setInvertColors(false);
      }
    });
  }, []);

  return (
    <div className={classes.root}>
      {menuVisible && <MainMenu setVisible={setMenuVisible} />}
      <div className={classes.headerWrapper}>
        <Header
          displayBackButton
          invertColors={invertColors}
          marginLogo="0 10vh 0 10vh"
          setMenuVisible={setMenuVisible}
        />
      </div>
      <div className={classes.contentWrapper} id={"landing2"}>
        <div className={classes.sectionWrapper}>
          <ImageGallery
            imagesUrls={imagesUrls}
            activeImageIndex={activeImageIndex}
          />
          {/*filter for the background*/}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.4))",
            }}
          ></div>
          <div className={classes.textWrapper}>
            <div className={classes.title}>
              Expo City Dubai is the visionary inspiration
              <br />
              behind the{" "}
              <span
                style={{
                  color: "#FFB800",
                }}
              >
                <b>Global Resilience Platform</b>
              </span>
            </div>
            <div className={classes.description}>
              Global Resilience platform is one of the tools Expo City employs
              to promote its values which centre around diversity,
              sustainability, and knowledge-sharing. The city prioritizes
              sustainable practices and open exchange of ideas to shape <br /> a
              better future for the community and environment. <br />
              <br />
              <a
                target="_blank"
                href={"https://www.expocitydubai.com/en/"}
                style={{ color: "#fff" }}
              >
                Explore more about Expo City Dubai
              </a>
            </div>
          </div>
          <div className={classes.bottomWrapper}>
            <div></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1.6vh",
              }}
            >
              {imagesUrls.map((url, index) => (
                <Cirlce
                  key={index}
                  bgUrl={url}
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                  isActive={activeImageIndex === index}
                />
              ))}
            </div>
            <Button
              style={{
                pointerEvents: "all",
                color: "#000",
                backgroundColor: "#FFB800",
                borderRadius: 50,
                padding: "1vh 2.5vh",
                textTransform: "none",
                
                fontSize: "1.7vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1.2vh",
                marginRight: "10vh",
              }}
            >
              <div
                onClick={() => {
                  const fileName = "Dubai_Expo_IEC_A&S_Report.pdf";
                  const link = document.createElement("a");
                  link.href = `/pdf/${fileName}`;
                  link.download = fileName;
                  link.click();
                }}
              >
                Download report
              </div>
              <img
                src="/assets/downloadIcon.svg"
                alt="arrow down"
                style={{
                  filter: "invert(1)",
                }}
              />
            </Button>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "12vh",
              width: "100%",
              textAlign: "center",
              
              fontWeight: 100,
              fontSize: "3vh",
              color: "#fff",
            }}
          >
            <span
              style={{
                color: "#FFB800",
              }}
            >
              Expo City Dubai
            </span>
            <br />
            Flourishing and expanding business environment
          </div>
        </div>
        <div
          className={classes.sectionWrapper}
          style={{
            backgroundImage: "url(/assets/expo_bg_2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={classes.textWrapper}>
            <div
              className={classes.title}
              style={{
                color: "#000",
              }}
            >
              Expo City Dubai, UAE
            </div>
            <img
              src={"/assets/expo_urban.svg"}
              alt={"expo"}
              style={{
                width: "50vh",
                marginTop: "4vh",
              }}
            />
          </div>

          <img
            src={"/assets/expo_cube.png"}
            alt={"expo"}
            style={{
              position: "absolute",
              bottom: "0",
              width: "77vh",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "15vh",
              right: "10vh",
              width: "45vw",
              height: "65vh",
              
              fontWeight: 100,
              fontSize: "2vh",
              border: "1.5px solid #FFB800",
              borderRadius: "1vh",
              padding: "2vh",
              overflowY: "scroll",
              zIndex: 1,
            }}
          >
            Expo City Dubai not only remains true to its Expo 2020 heritage but
            also transcends it. ECD is building upon the great legacy of the
            Expo, making a remarkable leap forward, and developing into a
            thriving urban community. This transformation is acknowledged by the
            city’s high rating. <br />
            <br />
            The ECD’s urban environment is based on the 15-minute city concept,
            ensuring that sustainability is the focal point within its
            boundaries. Expo City demonstrates exceptional livability through
            internationally certified urban developments and construction
            initiatives accredited by LEED and BREEAM. <br />
            <br />A defining feature of Expo City Dubai is its unwavering
            commitment to implementing top-tier environmental, social, and
            governance policies. The city prioritizes inclusion fostering equal
            opportunities for all. Expo City sets the pace for inclusion in Asia
            by creating and implementing best practices in gender equality and
            empowering people of determination. This commitment is reinforced by
            initiatives supporting representation and participation in the labor
            force. Also, this approach extends to the urban infrastructure
            design, providing an accessible environment for all. Designed as a
            pedestrian-centric city, Expo City minimizes its carbon footprint by
            emphasizing walkability, green spaces, and efficient public
            transport. <br />
            <br />
            While upholding high standards, Expo City Dubai is actively striving
            to further enhance its sustainability practices. The city has made
            significant investments in tree planting initiatives, facilitating
            the rapid expansion of lush green spaces across the city. Despite
            challenges such as relatively higher water and electricity tariffs
            in proportion to income, which may concern future residents, the
            city is taking proactive measures to ensure a balanced and
            sustainable cost of living. In its pursuit of becoming an
            unparalleled residential destination, Expo City is dedicated to
            improving accessibility to essential amenities such as best practice
            governmental services, schools, and hospitals.
            <br />
            <br />
            Special measures are being implemented to address air pollution
            concerns, aligning with the broader sustainability objectives
            prevalent in the Middle East, considering environmental and climate
            hazards. Expo City Dubai stands as a testament to its commitment to
            sustainable practices, continuously evolving to provide an
            increasingly harmonious, eco-friendly, and desirable living
            environment for its residents while setting new standards for
            responsible urban development in the Global South.
          </div>
          <Button
            style={{
              position: "absolute",
              marginRight: "10vh",
              bottom: "2vw",
              right: 0,
              width: "fit-content",
              pointerEvents: "all",
              color: "#000",
              backgroundColor: "#FFB800",
              borderRadius: 50,
              padding: "1vh 2.5vh",
              textTransform: "none",
              
              fontSize: "1.7vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "1.2vh",
            }}
          >
            <div
              onClick={() => {
                const fileName = "Dubai_Expo_IEC_A&S_Report.pdf";
                const link = document.createElement("a");
                link.href = `/pdf/${fileName}`;
                link.download = fileName;
                link.click();
              }}
            >
              Download report
            </div>
            <img
              src="/assets/downloadIcon.svg"
              alt="arrow down"
              style={{
                filter: "invert(1)",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

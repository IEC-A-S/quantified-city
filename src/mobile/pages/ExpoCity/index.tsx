import { MainMenu } from "../../../components/MainMenu";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useMainPageStyles } from "../MainPage";
import { Button, Typography } from "@mui/material";
import { ImageGallery } from "../../../pages/Landing/components/ImageSection/components/ImageGallery";
import { Cirlce } from "../../../pages/Landing/components/ImageSection/components/Circle";
import { RatingBubble } from "../../components/RatingBubble";
import { StatusBubble } from "../../components/StatusBubble";

const imagesUrls = [
  "/assets/expo_bg.png",
  "/assets/Expo/1.jpg",
  "/assets/Expo/2.jpg",
  "/assets/Expo/3.jpg",
  "/assets/Expo/4.jpg",
  "/assets/Expo/5.jpg",
];

export const ExpoCity = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const { classes } = useMainPageStyles();
  const [invertColors, setInvertColors] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // console.log("useEffect");
    const expoCity = document.getElementById("expoCity");

    if (!expoCity) {
      return;
    }

    expoCity.addEventListener("scroll", (e) => {
      const sectionHeight = expoCity.clientHeight;
      const pagePos = expoCity.scrollTop;
      // console.log(pagePos, sectionHeight);
      if (pagePos > 0) {
        setInvertColors(true);
      } else {
        setInvertColors(false);
      }
    });
  }, [document.getElementById("expoCity")?.scrollTop]);

  return (
    <div>
      <div>
        {menuVisible && (
          <MainMenu setVisible={setMenuVisible} isMobile={true} />
        )}
        <div className={classes.root} id="expoCity">
          <div
            style={{
              height: "fit-content",
              padding: invertColors ? "0" : "16px",
              position: "sticky",
              top: "0",
              zIndex: 10,
            }}
          >
            <Header
              setMenuVisible={setMenuVisible}
              isOrange={true}
              isInverted={invertColors}
            />
          </div>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              top: "0",
            }}
          >
            <ImageGallery
              imagesUrls={imagesUrls}
              activeImageIndex={activeImageIndex}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.4))",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundColor: "transparent",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  padding: "16px",
                }}
              >
                <Typography
                  variant="h2"
                  style={{ color: "white", paddingTop: "80px" }}
                >
                  Expo City Dubai is the visionary inspiration behind the{" "}
                  <span
                    style={{
                      fontFamily: "SuisseIntl-Regular",
                      color: "#FFB800",
                    }}
                  >
                    Global Resilience Platform
                  </span>
                </Typography>
                <Typography variant={"h3"} style={{ color: "white" }}>
                  Global Resilience platform is one of the tools Expo City
                  employs to promote its values which centre around diversity,
                  sustainability, and knowledge-sharing. The city prioritizes
                  sustainable practices and open exchange of ideas to shape a
                  better future for the community and environment.
                  <br />
                  <br />
                  <a
                    target="_blank"
                    href={"https://www.expocitydubai.com/en/"}
                    style={{ color: "#fff" }}
                  >
                    Explore more about Expo City Dubai
                  </a>
                </Typography>
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "64px",
                    marginLeft: "-16px",
                    padding: "16px",
                    boxSizing: "border-box",
                  }}
                >
                  <Typography variant={"h3"} style={{ color: "#FFB800" }}>
                    Expo City Dubai
                  </Typography>
                  <Typography variant={"h3"} style={{ color: "white" }}>
                    Flourishing and expanding business environment
                  </Typography>
                  <Button
                    onClick={() => {
                      const fileName = "Dubai_Expo_IEC_A&S_Report.pdf";
                      const link = document.createElement("a");
                      link.href = `/pdf/${fileName}`;
                      link.download = fileName;
                      link.click();
                    }}
                    variant="contained"
                    style={{
                      color: "#000",
                      background: "#FFB800",
                      fontFamily: "SuisseIntl-Thin",
                      marginTop: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    Download report
                    <img
                      src={"./assets/downloadIcon.svg"}
                      alt="arrow"
                      style={{
                        filter: "invert(1)",
                        width: "12px",
                      }}
                    />
                  </Button>
                  <div
                    style={{
                      width: "100%",
                      bottom: "16px",
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
                </div>
              </div>
            </div>
            {/*Second section*/}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "fit-content",
                backgroundColor: "#fff",
                paddingTop: "80px",
              }}
            >
              <Typography
                variant={"h2"}
                style={{ textAlign: "left", color: "#000", padding: "16px" }}
              >
                Expo City Dubai, UAE
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant={"h2"}
                  style={{
                    textAlign: "left",
                    color: "#000",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  Urban{" "}
                  <span
                    style={{
                      fontFamily: "SuisseIntl-Regular",
                    }}
                  >
                    Resilience
                  </span>{" "}
                  <br />
                  Index
                </Typography>
                <RatingBubble rating={"A3"} size={"small"} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Typography
                    variant={"h4"}
                    style={{
                      color: "#000",
                    }}
                  >
                    {" "}
                    Environmental{" "}
                  </Typography>
                  <StatusBubble status={"Average"} variant="outlined" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Typography
                    variant={"h4"}
                    style={{
                      color: "#000",
                    }}
                  >
                    {" "}
                    Social{" "}
                  </Typography>
                  <StatusBubble status={"Strong"} variant="outlined" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Typography
                    variant={"h4"}
                    style={{
                      color: "#000",
                    }}
                  >
                    {" "}
                    Governmental{" "}
                  </Typography>
                  <StatusBubble status={"Strong"} variant="outlined" />
                </div>
              </div>
              <Typography
                variant={"h5"}
                style={{ textAlign: "left", color: "#000", padding: "16px" }}
              >
                Expo City Dubai not only remains true to its Expo 2020 heritage
                but also transcends it. ECD is building upon the great legacy of
                the Expo, making a remarkable leap forward, and developing into
                a thriving urban community. This transformation is acknowledged
                by the city’s high rating. <br />
                <br />
                The ECD’s urban environment is based on the 15-minute city
                concept, ensuring that sustainability is the focal point within
                its boundaries. Expo City demonstrates exceptional livability
                through internationally certified urban developments and
                construction initiatives accredited by LEED and BREEAM.
                <br />
                <br /> A defining feature of Expo City Dubai is its unwavering
                commitment to implementing top-tier environmental, social, and
                governance policies. The city prioritizes inclusion fostering
                equal opportunities for all. Expo City sets the pace for
                inclusion in Asia by creating and implementing best practices in
                gender equality and empowering people of determination. This
                commitment is reinforced by initiatives supporting
                representation and participation in the labor force. Also, this
                approach extends to the urban infrastructure design, providing
                an accessible environment for all. Designed as a
                pedestrian-centric city, Expo City minimizes its carbon
                footprint by emphasizing walkability, green spaces, and
                efficient public transport. <br />
                <br />
                While upholding high standards, Expo City Dubai is actively
                striving to further enhance its sustainability practices. The
                city has made significant investments in tree planting
                initiatives, facilitating the rapid expansion of lush green
                spaces across the city. Despite challenges such as relatively
                higher water and electricity tariffs in proportion to income,
                which may concern future residents, the city is taking proactive
                measures to ensure a balanced and sustainable cost of living.{" "}
                <br />
                <br />
                In its pursuit of becoming an unparalleled residential
                destination, Expo City is dedicated to improving accessibility
                to essential amenities such as best practice governmental
                services, schools, and hospitals. Special measures are being
                implemented to address air pollution concerns, aligning with the
                broader sustainability objectives prevalent in the Middle East,
                considering environmental and climate hazards.
                <br />
                <br /> Expo City Dubai stands as a testament to its commitment
                to sustainable practices, continuously evolving to provide an
                increasingly harmonious, eco-friendly, and desirable living
                environment for its residents while setting new standards for
                responsible urban development in the Global South.
                <br />
                <br />
              </Typography>
              <img
                src={"/assets/expo_cube_mobile.png"}
                alt="expo cube"
                style={{
                  width: "100%",
                  height: "fit-content",
                  objectFit: "contain",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => {
                    const fileName = "Dubai_Expo_IEC_A&S_Report.pdf";
                    const link = document.createElement("a");
                    link.href = `/pdf/${fileName}`;
                    link.download = fileName;
                    link.click();
                  }}
                  variant="contained"
                  style={{
                    color: "#000",
                    background: "#FFB800",
                    fontFamily: "SuisseIntl-Thin",
                    marginTop: "16px",
                    marginBottom: "16px",
                  }}
                >
                  Download report
                  <img
                    src={"./assets/downloadIcon.svg"}
                    alt="arrow"
                    style={{
                      filter: "invert(1)",
                      width: "12px",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

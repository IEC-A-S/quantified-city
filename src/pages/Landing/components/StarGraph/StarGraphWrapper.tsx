import { Button, Grid, styled } from "@mui/material";
import { useImageSectionStyles } from "../ImageSection/components/styles";
import { useSelectedCityData } from "../../../../hooks/useSelectedCityData";
import { Colors } from "../../../GraphAndGlobe/components/SmallStatItem";
import { Typography } from "@mui/material";
import type { ReactNode } from "react";
import { useState } from "react";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "30vw",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

interface IStarGraphWrapperProps {
  children: ReactNode;
  setTimeLossInTrafficPopupOpen: (open: boolean) => void;
}

export const StarGraphWrapper = ({
  children,
  setTimeLossInTrafficPopupOpen,
}: IStarGraphWrapperProps) => {
  const { classes } = useImageSectionStyles();
  const selectedCityData = useSelectedCityData();
  const [hintHovered, setHintHovered] = useState(false);

  const hintHeader = 5;
  const hintText = 7;

  return (
    <div className={classes.contentWrapper}>
      <div
        style={{
          position: "absolute",
          top: "15.5%",
          left: "9vh",
          display: "flex",
          flexDirection: "column",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            fontFamily: "SuisseIntl-Light",
            fontSize: "6.25vh",
            color: "#000",
          }}
        >
          {selectedCityData?.City}: <br />
          <b>Transport</b> resilience
          <br />
          index
          <span
            style={{
              paddingTop: "-1.5vh",
              marginLeft: "1.2vh",
              fontFamily: "SuisseIntl-Light",
              fontSize: "3.1vh",
              fontWeight: 400,
              marginTop: "1.45vh",
              textAlign: "center",
              padding: "1.4vh 2vh",
              verticalAlign: "middle",
              // backgroundColor: Colors[
              //   selectedCityData?.["Transport Resilience Index"].toUpperCase()
              // ]
              //   ? Colors[
              //       selectedCityData?.[
              //         "Transport Resilience Index"
              //       ].toUpperCase()
              //     ]
              //   : "#A0DA8B",
              backgroundColor:
                Colors[
                  selectedCityData?.["Transport Resilience Index"]
                    .toUpperCase()
                    .replace(" ", "_")
                ],

              color: "#000",
              borderRadius: 50,
              width: "fit-content",
            }}
          >
            {selectedCityData?.["Transport Resilience Index"]}
          </span>
          <HtmlTooltip
            title={
              <>
                <div
                  style={{
                    fontFamily: "SuisseIntl-Light",
                    fontSize: "1.8vh",
                  }}
                >
                  The assessment is based on indicators in the 'transport'
                  category from the URI, and it is supplemented with some other
                  metrics: <br />
                  <Grid
                    container={true}
                    style={{ marginTop: "1vh" }}
                    spacing={2}
                  >
                    <Grid item={true} xs={hintHeader}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Efficiency
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintText}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Time loss in traffic, minutes
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintHeader}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Accessibility
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintText}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Share of population in 1km from public transport stops,
                        %
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintHeader}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Safety
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintText}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Road fatalities rate per 100,000 population
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintHeader}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Affordability
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintText}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Ratio of the cost of monthly public transport usage (the
                        cheapest option) to the average monthly income
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintHeader}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Environmental impact
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintText}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        NO2 concentration, μg/m3
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintHeader}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Satisfaction
                      </div>
                    </Grid>
                    <Grid item={true} xs={hintText}>
                      <div
                        style={{
                          fontFamily: "SuisseIntl-Light",
                          fontSize: "1.8vh",
                        }}
                      >
                        Ratio of the cost of a 1-kilometer taxi ride to average
                        monthly income, %
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </>
            }
            placement="bottom-start"
          >
            <img
              onMouseEnter={() => setHintHovered(true)}
              onMouseLeave={() => setHintHovered(false)}
              src={"/assets/infoIcon.svg"}
              alt="info"
              style={{
                filter: "invert(1)",
                marginLeft: "2vh",
                opacity: hintHovered ? 1 : 0.5,
                cursor: "pointer",
              }}
            />
          </HtmlTooltip>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5vh",
            marginTop: "17vh",
          }}
        >
          {children}
        </div>
      </div>
      <Typography
        style={{
          position: "absolute",
          top: "41vh",
          left: "9.5vh",
          width: "35vw",
          color: "#000000",
          fontFamily: "SuisseIntl-Light",
          fontSize: "1.8vh",
        }}
      >
        The graph highlights the strengths and weaknesses of cities across
        various aspects of transport system. The further the vertices of the
        shape are from the center of the diagram, the better the city's
        performance in that particular metrics. The larger the area of the
        shape, the higher the overall assessment in Transport resilience.
      </Typography>
      <div className={classes.pageContainer}>
        <div className={classes.bottomWrapper}>
          <div className={classes.smallTextWrapper}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2vh",
              marginTop: "1vh",
            }}
          >
            <Button
              onClick={() => {
                setTimeLossInTrafficPopupOpen(true);
              }}
              style={{
                pointerEvents: "all",
                color: "#fff",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: 50,
                padding: "1vh 2.5vh",
                textTransform: "none",
                fontFamily: "SuisseIntl-Light",
                fontSize: "1.7vh",
                display: "flex",
                flexDirection: "row",
                gap: "1.2vh",
                filter: "invert(1)",
                zIndex: 2,
              }}
            >
              <div>Explore indicators</div>
            </Button>
            <Button
              style={{
                pointerEvents: "all",
                color: "#fff",
                backgroundColor: "#2D67FF",
                borderRadius: 50,
                padding: "1vh 2.5vh",
                textTransform: "none",
                fontFamily: "SuisseIntl-Light",
                fontSize: "1.7vh",
                display: "flex",
                flexDirection: "row",
                gap: "1.2vh",
              }}
              onClick={() => {
                const fileName = selectedCityData.pdfName;
                const link = document.createElement("a");
                link.href = `/pdf/${fileName}`;
                link.download = fileName;
                link.click();
              }}
            >
              <div>Download report</div>
              <img src="/assets/downloadIcon.svg" alt="arrow down" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

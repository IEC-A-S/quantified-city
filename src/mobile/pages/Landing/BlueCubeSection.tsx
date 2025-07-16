import { Button, Typography } from "@mui/material";
import { useSelectedCityData } from "../../../hooks/useSelectedCityData";
import { RATING_COLORS_ENUM } from "../../components/RatingBubble";
import { StatusBubble } from "../../components/StatusBubble";
import { makeStyles } from "tss-react/mui";
import { NewCube } from "../../../pages/Landing/components/BlueCubeSection/components/NewCube";
import { type FC, useState } from "react";
import { HowTheRatingWorks } from "../../components/HowTheRatingWorks";

const useBlueCubeSectionStyles = makeStyles()({
  itemColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
});

interface BlueCubeSectionProps {
  clickedCategory: string | null;
  setClickedCategory: (category: string | null) => void;
  setTablePopupOpen: (open: boolean) => void;
}

export const BlueCubeSection: FC<BlueCubeSectionProps> = ({
  clickedCategory,
  setClickedCategory,
  setTablePopupOpen,
}) => {
  const { classes } = useBlueCubeSectionStyles();
  const [hoveredSide, setHoveredSide] = useState<string | null>(null);
  const [cubeHeight, setCubeHeight] = useState<number>(728);

  const cityData = useSelectedCityData();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        background: "#1433AE",
        boxSizing: "border-box",
        padding: "16px",
        paddingTop: "80px",
      }}
    >
      <Typography variant="h1">
        {cityData?.City}: <br />
        <span
          style={{
            fontFamily: "SuisseIntl-Light",
          }}
        >
          Urban
        </span>{" "}
        resilience
        <br />
        index
        <span
          style={{
            textTransform: "none",
            verticalAlign: "middle",
            marginLeft: "16px",
            borderRadius: "16px",
            fontFamily: "SuisseIntl-Thin",
            fontSize: 18,
            fontWeight: 300,
            width: "fit-content",
            padding: "8px 16px",
            boxShadow: "none",
            color: "white",
            backgroundColor:
              RATING_COLORS_ENUM[
                cityData["Urban Resilience Index"].replace("-", "")
              ],
          }}
        >
          {cityData["Urban Resilience Index"].replace("-", "")}
        </span>
      </Typography>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className={classes.itemColumn}>
          <Typography variant="h3" style={{ marginTop: "32px" }}>
            Environmental
          </Typography>
          <StatusBubble status={cityData?.Environmental} variant="outlined" />
        </div>
        <div className={classes.itemColumn}>
          <Typography variant="h3" style={{ marginTop: "32px" }}>
            Social
          </Typography>
          <StatusBubble status={cityData?.Social} variant="outlined" />
        </div>
        <div className={classes.itemColumn}>
          <Typography variant="h3" style={{ marginTop: "32px" }}>
            Governmental
          </Typography>
          <StatusBubble status={cityData?.Governmental} variant="outlined" />
        </div>
      </div>
      <div
        style={{
          paddingTop: "48px",
          position: "relative",
          height: `${cubeHeight}px`,
        }}
      >
        <NewCube
          setHoveredSide={setHoveredSide}
          setClickedCategory={setClickedCategory}
          isMobile={true}
          setCubeHeight={setCubeHeight}
        />
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          boxSizing: "border-box",
        }}
      >
        <HowTheRatingWorks size={"big"} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "16px",
          }}
        >
          <Button
            onClick={() => {
              setTablePopupOpen(true);
            }}
            variant="outlined"
            style={{
              background: "transparent",
              fontFamily: "SuisseIntl-Thin",
            }}
          >
            Table view
          </Button>
          <Button
            onClick={() => {
              const fileName = cityData.pdfName;
              const link = document.createElement("a");
              link.href = `/pdf/${fileName}`;
              link.download = fileName;
              link.click();
            }}
            variant="contained"
          >
            Download report
            <img
              src={"./assets/downloadIcon.svg"}
              alt="arrow"
              style={{
                width: "12px",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

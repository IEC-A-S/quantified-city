import type { FC } from "react";
import { makeStyles } from "tss-react/mui";
import { BackToUrban } from "./components/BackToUrban";
import { FirstSection } from "./components/FirstSection";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";
import { getCategoryLabel } from "../../../../utils/categories";
import { getCompatibleIndicatorDataset } from "../../../../v2/data/compat";

interface BlueCubePopupProps {
  city: string;
  category: string;
  setClickedCategory: (category: string | null) => void;
}
export const usePopupStyles = makeStyles()({
  backgroundWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#0C1F68",
    width: "100vw",
    height: "100vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0em",
    },
    zIndex: "1200",
  },
  content: {
    position: "relative",
    padding: "64px 16px 16px",
    overflow: "hidden",
  },
  blueSection: {
    position: "relative",
    display: "box",
    width: "100%",
    height: "fit-content",
    float: "left",
    background: "#1433AE",
  },
  whiteSection: {
    position: "relative",
    display: "box",
    width: "100%",
    height: "fit-content",
    float: "left",
    background: "#ffffff",
  },
  blackSection: {
    position: "relative",
    display: "box",
    width: "100%",
    height: "100vh",
    float: "left",
    background: "#000000",
  },
  returnBack: {
    zIndex: 1000,
    pointerEvents: "all",
    position: "absolute",
    top: "16px",
    left: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1vh",
    cursor: "pointer",
  },
  returnBackIcon: {
    height: "32px",
  },
  title: {
    fontFamily: "SuisseIntl-Regular",
    fontWeight: 400,
    lineHeight: "9vh",
    letterSpacing: "-0.2vh",
    fontSize: "8vh",
    color: "#fff",
    width: "100%",
  },
});

export const BlueCubePopup: FC<BlueCubePopupProps> = ({
  city,
  category,
  setClickedCategory,
}) => {
  const { classes } = usePopupStyles();
  const categoryLabel = getCategoryLabel(category);
  const indicatorsDataNewValues = getCompatibleIndicatorDataset();

  return (
    <div className={classes.backgroundWrapper}>
      <BackToUrban setClickedCategory={setClickedCategory} />
      <div className={classes.content}>
        <FirstSection city={city} category={category} />
        <SecondSection
          indicatorDataByCitiesArr={indicatorsDataNewValues}
          currentCity={city}
          category={categoryLabel}
        />
        <ThirdSection city={city} category={categoryLabel} />
      </div>
    </div>
  );
};

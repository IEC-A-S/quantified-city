import { Button, Typography } from "@mui/material";
import { CategoryChart } from "../../../../../pages/GraphAndGlobe/components/CategoryChart";
import categoryDataArr from "../../../../../data/categoryData.json";
import { usePopupStyles } from "../index";
import type { FC } from "react";
import { CategoryDescription } from "../../../../../pages/BlueCubePopup/data";
import { getCategoryKey, getCategoryLabel } from "../../../../../utils/categories";

const yLabels = [
  "Очень низкий",
  "Низкий",
  "Средний",
  "Высокий",
  "Очень высокий",
];
const yColors = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

interface FirstSectionProps {
  city: string;
  category: string;
}
export const FirstSection: FC<FirstSectionProps> = ({ city, category }) => {
  const { classes } = usePopupStyles();
  const categoryKey = getCategoryKey(category);
  const categoryLabel = getCategoryLabel(category);

  const normalizedCategory = categoryKey.replace(" ", "_");
  const description = Object.keys(CategoryDescription).includes(
    normalizedCategory
  )
    ? CategoryDescription[normalizedCategory]
    : "No description available";

  return (
    <div
      className={classes.blueSection}
      style={{
        borderTopRightRadius: "16px",
        borderTopLeftRadius: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <Typography variant={"h3"}>{categoryLabel}</Typography>
        <Typography variant={"h6"}>{description}</Typography>
        <Typography variant={"h4"}>
          Выберите города и сравните с сопоставимыми
        </Typography>
      </div>
      <div
        style={{
          paddingLeft: "8px",
        }}
      >
        <CategoryChart
          isMobile={true}
          categoryDataArr={categoryDataArr}
          currentCity={city}
          category={categoryKey}
          yLabels={yLabels}
          yColors={yColors}
        />
      </div>
      {/*<div*/}
      {/*  id={"graph-section"}*/}
      {/*  style={{*/}
      {/*    position: "relative",*/}
      {/*    width: "100%",*/}
      {/*    bottom: "16px",*/}
      {/*    display: "flex",*/}
      {/*    flexDirection: "row",*/}
      {/*    alignItems: "center",*/}
      {/*    justifyContent: "center",*/}
      {/*    marginTop: "16px",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button variant="contained">*/}
      {/*    Download report*/}
      {/*    <img*/}
      {/*      src={"./assets/downloadIcon.svg"}*/}
      {/*      alt="arrow"*/}
      {/*      style={{*/}
      {/*        width: "12px",*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
};

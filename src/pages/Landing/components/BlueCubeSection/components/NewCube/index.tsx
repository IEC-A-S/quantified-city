import { CubeSide } from "./CubeSide";
import { CategoryItem } from "./CategoryItem";
import { useSelectedCityData } from "../../../../../../hooks/useSelectedCityData";
import { CATEGORY_DATA } from "../Cube/data";
import { useEffect, useState } from "react";
const colorsIndexMap = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

export const categories: Record<string, string[]> = {
  left: [
    "Air pollution",
    "Water pollution",
    "Land use and waste",
    "Natural disaster hazards",
  ],
  right: [
    "Accountability",
    "City budget",
    "SME",
    "Public services",
    "Sustainability commitment",
  ],
  top: [
    "Water availability",
    "Food availability",
    "Energy availability",
    "Health",
    "Education",
    "Wealth",
    "Safety",
    "Livability",
    "Transport",
    "Inclusion",
  ],
};

interface NewCubeProps {
  setHoveredSide: (side: string | null) => void;
  setClickedCategory: (category: string | null) => void;
  isMobile?: boolean;
  setCubeHeight?: (height: number) => void;
}

export const NewCube = ({
  setHoveredSide,
  setClickedCategory,
  isMobile,
  setCubeHeight,
}: NewCubeProps) => {
  const [scale, setScale] = useState(
    isMobile
      ? Math.min(
          Math.min(window.innerHeight / 950, window.innerWidth / 650),
          0.78
        )
      : Math.min(window.innerHeight / 950, window.innerWidth / 650)
  );

  useEffect(() => {
    if (isMobile) {
      const cubeHeight = document
        .getElementById("cube")
        ?.getBoundingClientRect().height;
      setCubeHeight!(cubeHeight!);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const windowHeight = window.innerHeight;
      // const scale = windowHeight / 950; // 728
      // scale depends on the height and width of the window
      // min cube width is 650px
      let scale = Math.min(windowHeight / 950, window.innerWidth / 650);
      // top depends on the height of the window
      if (isMobile) {
        const maxScale = 0.78;
        scale = Math.min(scale, maxScale);
        // let cubeHeight = document
        //   .getElementById("cube")
        //   ?.getBoundingClientRect().height;
        // setCubeHeight(cubeHeight!);
      }
      setScale(scale);
    });
  }, [window.innerHeight && window.innerWidth]);

  return (
    <div
      id="cube"
      style={{
        zIndex: 1,
        width: "600px",
        // height: "728px",
        height: "728px",
        position: "absolute",
        display: "flex",
        top: "50%",
        left: "50%",
        transform: isMobile
          ? "translate(-50%, -50%) scale(" + scale + ")"
          : "translate(-50%, -50%) scale(" + scale + ")",
      }}
    >
      {/*First side*/}
      <CubeSide side={"left"} setHoveredSide={setHoveredSide}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
          }}
        >
          {categories.left.map((category) => {
            const cityData = useSelectedCityData();
            const cityName = cityData.City;
            const categoryData = CATEGORY_DATA.find(
              (item) => item.City === cityName
            );
            const categoryValue =
              categoryData[category as keyof typeof categoryData];

            const color = colorsIndexMap[categoryValue - 1]
              ? colorsIndexMap[categoryValue - 1]
              : "#FF632F";

            return (
              <CategoryItem
                title={category}
                color={color}
                key={category}
                setClickedCategory={setClickedCategory}
              />
            );
          })}
        </div>
      </CubeSide>
      <CubeSide
        side={"right"}
        setHoveredSide={setHoveredSide}
        setClickedCategory={setClickedCategory}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
          }}
        >
          {categories.right.map((category) => {
            const cityData = useSelectedCityData();
            const cityName = cityData.City;
            const categoryData = CATEGORY_DATA.find(
              (item) => item.City === cityName
            );
            const categoryValue =
              categoryData[category as keyof typeof categoryData];

            return (
              <CategoryItem
                title={category}
                color={colorsIndexMap[categoryValue - 1]}
                key={category}
                setClickedCategory={setClickedCategory}
              />
            );
          })}
        </div>
      </CubeSide>
      <CubeSide
        side={"top"}
        setHoveredSide={setHoveredSide}
        setClickedCategory={setClickedCategory}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "-1vh",
          }}
        >
          {categories.top.map((category) => {
            const cityData = useSelectedCityData();
            const cityName = cityData.City;
            const categoryData = CATEGORY_DATA.find(
              (item) => item.City === cityName
            );
            const categoryValue =
              categoryData[category as keyof typeof categoryData];

            return (
              <CategoryItem
                title={category}
                color={colorsIndexMap[categoryValue - 1]}
                key={category}
                setClickedCategory={setClickedCategory}
              />
            );
          })}
        </div>
      </CubeSide>
    </div>
  );
};

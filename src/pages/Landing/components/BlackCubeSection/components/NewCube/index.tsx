import { CubeSide } from "./CubeSide";
import { CategoryItem } from "./CategoryItem";
import { useSelectedCityData } from "../../../../../../hooks/useSelectedCityData";
import { CATEGORY_DATA } from "../Cube/data";
const colorsIndexMap = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

export const categories: Record<string, string[]> = {
  left: ["Air pollution", "Water pollution", "Land use and waste"],
  right: ["Accountability", "Public services"],
  top: [
    "Food availability",
    "Energy availability",
    "Wealth",
    "Safety",
    "Livability",
    "Transport",
    "Inclusion",
  ],
};

export const NewCube = () => {
  return (
    <div
      style={{
        zIndex: 1,
        width: "100%",
        height: "100vh",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/*First side*/}
      <CubeSide side={"left"}>
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

            return <CategoryItem title={category} color={color} />;
          })}
        </div>
      </CubeSide>
      <CubeSide side={"right"}>
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
              />
            );
          })}
        </div>
      </CubeSide>
      <CubeSide side={"top"}>
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
              />
            );
          })}
        </div>
      </CubeSide>
    </div>
  );
};

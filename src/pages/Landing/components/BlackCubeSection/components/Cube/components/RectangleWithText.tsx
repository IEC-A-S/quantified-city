import type { FC } from "react";
import { useRef, useState } from "react";
import type { BufferGeometry, Mesh } from "three";
import { Text } from "@react-three/drei";
import { SideEnum } from "../interfaces";
import { useSelectedCityData } from "../../../../../../../hooks/useSelectedCityData";
import { CATEGORY_DATA } from "../data";

const switchFontColor = (bgColor: string) => {
  switch (bgColor) {
    case "#345360":
    case "#D94513":
      return "white";
    default:
      return "black";
  }
};

interface IRectangleWithText {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  text: string;
  side: SideEnum;
  categoryIndex: number;
  onClick(): void;
}

const colorsIndexMap = ["#FF3B29", "#FF632F", "#FF9B3F", "#A0DA8B", "#35CB00"];

export const RectangleWithText: FC<IRectangleWithText> = ({
  position,
  rotation,
  scale,
  text,
  color,
  side,
  categoryIndex,
  onClick,
}) => {
  const meshRef = useRef<Mesh<BufferGeometry, never> | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  // fontSize depends on the length of the text
  const fontSize = 0.06;
  // fontColor depends on the color of the side
  const fontColor = switchFontColor(color);

  const cityData = useSelectedCityData();
  const cityName = cityData.City;
  const categoryData = CATEGORY_DATA.find((item) => item.City === cityName);
  const categoryValue = categoryData[text as keyof typeof categoryData];

  return (
    <group>
      <mesh
        position={position}
        rotation={rotation}
        scale={[
          scale[0], // * (text.length * fontSize),
          scale[1],
          scale[2],
        ]}
        ref={meshRef}
        onClick={() => {
          text && onClick();
        }}
        onPointerOver={() => {
          text && setHovered(true);
        }}
        onPointerOut={() => {
          text && setHovered(false);
        }}
      >
        <planeGeometry />
        <meshStandardMaterial
          color={hovered ? colorsIndexMap[categoryValue - 1] : "#102CA1"}
        />
      </mesh>
      {/*Make small point right above the text to make it look like it's outlined*/}
      {text && (
        <mesh
          position={
            side === "left"
              ? [
                  position[0] + (text.length * fontSize) / 2 - 0.35,
                  position[1],
                  position[2] + 0.01,
                ]
              : side === "right"
              ? [
                  position[0] + 0.01,
                  position[1],
                  position[2] - (text.length * fontSize) / 2 + 0.32,
                ]
              : [
                  position[0],
                  position[1] + 0.01,
                  position[2] - (text.length * fontSize) / 2 + 0.35,
                ]
          }
          rotation={rotation}
        >
          <circleGeometry args={[0.02, 1000]} />
          <meshStandardMaterial color={colorsIndexMap[categoryValue - 1]} />
        </mesh>
      )}
      <Text
        anchorX="left"
        textAlign="left"
        outlineColor={fontColor}
        outlineWidth={0}
        fontSize={fontSize}
        // color={fontColor}
        color={hovered ? "black" : "white"}
        position={
          side === "left"
            ? [position[0] - 0.4, position[1], position[2] + 0.01]
            : side === "right"
            ? [position[0] + 0.01, position[1], position[2] + 0.4]
            : [position[0], position[1] + 0.01, position[2] + 0.4]
        }
        rotation={rotation}
      >
        {text ? text[0].toUpperCase() + text.slice(1).toLowerCase() : ""}
      </Text>
    </group>
  );
};

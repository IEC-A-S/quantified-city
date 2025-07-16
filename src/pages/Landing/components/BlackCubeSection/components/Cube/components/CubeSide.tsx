import { RectangleWithText } from "./RectangleWithText";
import type { FC } from "react";
import type { SideEnum } from "../interfaces";
import { useSelectedCityData } from "../../../../../../../hooks/useSelectedCityData";
import { CATEGORY_DATA } from "../data";

const planePosition: Record<string, [number, number, number]> = {
  left: [0, 0, 0.5],
  right: [0.5, 0, 0],
  top: [0, 0.5, 0],
};

const sideMeshesRotations: Record<string, [number, number, number]> = {
  left: [0, 0, 0],
  right: [0, Math.PI / 2, 0],
  top: [Math.PI * 1.5, 0, Math.PI / 2],
};

const calculateSideMeshesCoords = (side: string, textsLength: number) => {
  const coords = [] as [number, number, number][];
  const height = 1 / textsLength;

  for (let i = 0; i < textsLength; i++) {
    if (side === "left") {
      coords.push([0, -0.5 + height / 2 + height * i, 0.51]);
    }
    if (side === "right") {
      coords.push([0.51, -0.5 + height / 2 + height * i, 0]);
    }
    if (side === "top") {
      coords.push([-0.5 + height / 2 + height * i, 0.51, 0]);
    }
  }

  // for (let i = 0; i < textsLength; i++) {
  //   if (side === "left") {
  //     coords.push([0, -0.5 + height / 2 + height * i, 0.51]);
  //   }
  //   if (side === "right") {
  //     coords.push([0.51, -0.5 + height / 2 + height * i, 0]);
  //   }
  //   if (side === "top") {
  //     coords.push([-0.5 + height / 2 + height * i, 0.51, 0]);
  //   }
  // }

  return coords;
};

interface ICubeSide {
  side: SideEnum;
  texts: string[];
  colors: string[];
  onUnHover(): void;
  onHover(): void;
  setClickedCategory(category: string | null): void;
}

export const CubeSide: FC<ICubeSide> = ({
  side,
  texts,
  colors,
  onUnHover,
  onHover,
  setClickedCategory,
}) => {
  const textsReverse = [...texts].reverse();
  const colorsReverse = [...colors].reverse();

  return (
    <group onPointerOver={onHover} onPointerOut={onUnHover}>
      {calculateSideMeshesCoords(side, texts.length).map((coords, index) => (
        <RectangleWithText
          key={index}
          position={coords}
          rotation={sideMeshesRotations[side]}
          scale={[0.97, 1 / texts.length - 0.03, 0.97]}
          color={colorsReverse[index]}
          text={textsReverse[index]}
          side={side}
          onClick={() => {
            setClickedCategory(textsReverse[index]);
          }}
        />
      ))}
      <mesh position={planePosition[side]} rotation={sideMeshesRotations[side]}>
        <planeGeometry />
        <meshStandardMaterial color="#102CA1" />
      </mesh>
    </group>
  );
};

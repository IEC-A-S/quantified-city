import type { IGraphData } from "../interfaces";
import type { FC } from "react";
import { Axises } from "./Axises";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type * as THREE from "three";
import { Item } from "./Item";

interface IVisualData {
  data: IGraphData[];
  setSelectedCity: (city: string) => void;
}

export const VisualData: FC<IVisualData> = ({
  data,
  color,
  setSelectedCity,
}) => {
  const ref = useRef<THREE.Group>();

  useFrame(({ camera }) => {
    camera.lookAt(2, -6, 0);
  });

  return (
    <group ref={ref} position={[2, -10, 1]} rotation={[0, 1, 0]}>
      <Axises />
      {data.map((item) => (
        <Item
          item={item}
          key={item.id}
          color={item.color}
          setSelectedCity={setSelectedCity}
        />
      ))}
    </group>
  );
};

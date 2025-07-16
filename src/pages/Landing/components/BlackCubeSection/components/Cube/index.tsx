import type { FC } from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CubeObjectsGroup } from "./components/CubeObjectsGroup";

interface ICubePOC {
  /**
   * Sets the hovered side of the cube
   * @param side
   */
  setHoveredSide(side: string | null): void;
  /**
   * The category that is currently clicked
   * @param category
   */
  setClickedCategory(category: string | null): void;
}

export const CubePOC: FC<ICubePOC> = ({
  setHoveredSide,
  setClickedCategory,
}) => {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [5, 5, 5], fov: 15 }}>
        <ambientLight intensity={4} />
        <directionalLight position={[10, 10, 5]} />
        <CubeObjectsGroup
          setHoveredSide={setHoveredSide}
          setClickedCategory={setClickedCategory}
        />
      </Canvas>
    </Suspense>
  );
};

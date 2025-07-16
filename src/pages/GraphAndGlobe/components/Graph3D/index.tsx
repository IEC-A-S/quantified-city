import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { VisualData } from "./components/VisualData";
import { mockData } from "./data";
import { useAppStyles } from "../styles";

export const Graph3D: FC<{
  setSelectedCity: (city: string) => void;
  isMobile?: boolean;
}> = ({ setSelectedCity, isMobile = false }) => {
  const { classes } = useAppStyles();

  return (
    <div
      className={classes.graph3dWrapper}
      style={{
        // width: isMobile ? "100vw" : "100%",
        top: isMobile ? "-20%" : "-30%",
        left: isMobile ? "0" : "8%",
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          style={{
            background: "transparent ",
          }}
          camera={{
            position: isMobile ? [16.5, 16.5, 16.5] : [11, 11, 11],
            fov: 50,
          }}
        >
          <ambientLight intensity={1} castShadow={true} />
          <directionalLight
            intensity={1}
            position={[10, 10, 0]}
            castShadow={true}
          />
          <VisualData data={mockData} setSelectedCity={setSelectedCity} />
          <OrbitControls
            enableZoom={false}
            makeDefault={true}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={Math.PI / 4}
            maxAzimuthAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

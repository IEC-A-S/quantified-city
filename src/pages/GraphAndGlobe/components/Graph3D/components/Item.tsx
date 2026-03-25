import { Text } from "@react-three/drei";
import type { IGraphData } from "../interfaces";
import type { FC } from "react";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface IItemProps {
  item: IGraphData;
  color: string;
  setSelectedCity: (city: string) => void;
}

export const DrawProjections = ([xCoord, yCoord, zCoord]: [
  number,
  number,
  number,
]) => {
  const yAxisProjection = [];
  const xAxisProjection = [];
  const zAxisProjection = [];
  const z2AxisProjection = [];
  const projectionWidth = 0.02;

  for (let i = 0; i <= yCoord; i += 0.5) {
    yAxisProjection.push({ x: xCoord, y: i, z: zCoord });
  }
  for (let i = 0; i <= xCoord; i += 0.5) {
    xAxisProjection.push({ x: i, y: 0, z: zCoord });
  }
  for (let i = 0; i <= zCoord; i += 0.5) {
    zAxisProjection.push({ x: xCoord, y: 0, z: i });
  }
  // from z axis to point
  for (let i = 0; i <= yCoord; i += 0.5) {
    z2AxisProjection.push({
      x: xCoord - (xCoord / yCoord) * i,
      y: yCoord,
      z: zCoord - (zCoord / yCoord) * i,
    });
  }

  return (
    <>
      {yAxisProjection.map((point) => (
        <mesh
          position={[point.x - xCoord, point.y - yCoord, point.z - zCoord]}
          key={point.y}
        >
          <boxGeometry args={[projectionWidth, 0.2, projectionWidth]} />
          <meshStandardMaterial
            transparent={true}
            opacity={0.8}
            color="white"
          />
        </mesh>
      ))}
      {xAxisProjection.map((point) => (
        <mesh
          position={[point.x - xCoord, point.y - yCoord, point.z - zCoord]}
          key={point.x}
        >
          <boxGeometry args={[0.2, projectionWidth, projectionWidth]} />
          <meshStandardMaterial
            transparent={true}
            opacity={0.8}
            color="white"
          />
        </mesh>
      ))}
      {zAxisProjection.map((point) => (
        <mesh
          position={[point.x - xCoord, point.y - yCoord, point.z - zCoord]}
          key={point.z}
        >
          <boxGeometry args={[projectionWidth, projectionWidth, 0.2]} />
          <meshStandardMaterial
            transparent={true}
            opacity={0.8}
            color="white"
          />
        </mesh>
      ))}
      {z2AxisProjection.map((point) => (
        <mesh
          rotation={[0, Math.atan2(point.x - xCoord, point.z - zCoord), 0]}
          position={[point.x - xCoord, point.y - yCoord, point.z - zCoord]}
          key={point.z}
        >
          <boxGeometry args={[projectionWidth, projectionWidth, 0.2]} />
          <meshStandardMaterial
            transparent={true}
            opacity={0.8}
            color="white"
          />
        </mesh>
      ))}
    </>
  );
};

export const Item: FC<IItemProps> = ({ item, color, setSelectedCity }) => {
  const itemRef = useRef<THREE.Group>();
  const textRef = useRef<THREE.Mesh>();
  // const textRef2 = useRef<THREE.Mesh>();
  const circleRef = useRef<THREE.Mesh>();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    textRef.current.lookAt(state.camera.position);
    // textRef2.current.lookAt(state.camera.position);
    circleRef.current.lookAt(state.camera.position);
  });

  return (
    <group ref={itemRef} position={item.position} key={item.id}>
      {/*draw a circle around the item with void*/}
      <mesh ref={circleRef}>
        {/*<circleGeometry*/}
        {/*  args={clicked || hovered ? [0.5, 100, 100] : [0.6, 100, 100]}*/}
        {/*/>*/}
        <torusGeometry
          args={hovered ? [0.32, 0.015, 100, 100] : [0.35, 0.015, 100, 100]}
        />
        <meshStandardMaterial color={color} transparent opacity={1} />
        {/*add shadow*/}
      </mesh>

      <mesh
        onClick={() => {
          setClicked(true);
          setSelectedCity(item.id);
        }}
        onPointerMissed={() => {
          setClicked(false);
        }}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerOut={() => {
          setHovered(false);
        }}
      >
        {/*<boxGeometry args={[1, 1, 1]} />*/}
        <sphereGeometry args={[0.2, 100, 100]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh ref={textRef} position={[0, 1.5, 0]}>
        <Text fontSize={0.45} color="white" anchorX="center" anchorY="middle">
          {hovered && item.label}
        </Text>
        <Text
          fontSize={0.45}
          color={color}
          anchorX="center"
          anchorY="middle"
          position={[0, -0.5, 0]}
        >
          {hovered && item.status}
        </Text>
        <meshStandardMaterial color="black" />
      </mesh>
      {/*<mesh ref={textRef2} position={[0, 1, 0]}>*/}
      {/*  <Text fontSize={0.45} color={color} anchorX="center" anchorY="middle">*/}
      {/*    {hovered && item.status}*/}
      {/*  </Text>*/}
      {/*  <meshStandardMaterial color="black" />*/}
      {/*</mesh>*/}
      {/*  if clicked or hovered, draw projections*/}
      {hovered && DrawProjections(item.position)}
    </group>
  );
};

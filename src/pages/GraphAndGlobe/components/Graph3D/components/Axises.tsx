import * as THREE from "three";
import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

export const Axises = () => {
  const axisX = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(6, 0, 0)];
  const axisY = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 6, 0)];
  const axisZ = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 6)];

  //const lineGeometry = new THREE.BufferGeometry().setFromPoints(axisX);
  const xLineGeometry = new THREE.BufferGeometry().setFromPoints(axisX);
  const yLineGeometry = new THREE.BufferGeometry().setFromPoints(axisY);
  const zLineGeometry = new THREE.BufferGeometry().setFromPoints(axisZ);

  const xAxisPoints = [];
  const yAxisPoints = [];
  const zAxisPoints = [];

  // for (let i = 0; i <= 10; i++) {
  //   xAxisPoints.push({ x: i, y: 0, z: 0 });
  //   yAxisPoints.push({ x: 0, y: i, z: 0 });
  //   zAxisPoints.push({ x: 0, y: 0, z: i });
  // }

  //load svg texture
  const texture = useLoader(
    THREE.TextureLoader,
    "/textures/texture_cage_radial_fade_2.svg"
  );

  return (
    <group>
      {/*Text for x axis*/}
      <mesh position={[4.5, 0.5, 0]}>
        <Text fontSize={0.5} color="white">
          Environmental
        </Text>
      </mesh>
      {/*Text for y axis*/}
      <mesh position={[0.5, 5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <Text fontSize={0.5} color="white">
          Social
        </Text>
      </mesh>
      {/*Text for z axis*/}
      <mesh position={[0, 0.5, 4.5]} rotation={[0, -Math.PI / 2, 0]}>
        <Text fontSize={0.5} color="white">
          Governmental
        </Text>
      </mesh>
      <group>
        <line geometry={xLineGeometry}>
          <lineBasicMaterial color="white" />
        </line>
        {/* draw cone for x axis*/}
        <mesh position={[6, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.1, 0.3, 10]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
      <group>
        <line geometry={yLineGeometry}>
          <lineBasicMaterial color="white" />
        </line>
        {/* draw cone for y axis*/}
        <mesh position={[0, 6, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[0.1, 0.3, 10]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
      <group>
        <line geometry={zLineGeometry}>
          <lineBasicMaterial color="white" />
        </line>
        {/* draw cone for z axis*/}
        <mesh position={[0, 0, 6]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.1, 0.3, 10]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
      {/*Draw plane for x and z axis and rotate it*/}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/*{xAxisPoints.map((point) => (*/}
      {/*  <mesh position={[point.x, point.y, point.z]} key={point.x}>*/}
      {/*    <sphereGeometry args={[0.1, 10, 10]} />*/}
      {/*    <meshStandardMaterial color="red" />*/}
      {/*  </mesh>*/}
      {/*))}*/}
      {/*{yAxisPoints.map((point) => (*/}
      {/*  <mesh position={[point.x, point.y, point.z]} key={point.y}>*/}
      {/*    <sphereGeometry args={[0.1, 10, 10]} />*/}
      {/*    <meshStandardMaterial color="green" />*/}
      {/*  </mesh>*/}
      {/*))}*/}
      {/*{zAxisPoints.map((point) => (*/}
      {/*  <mesh position={[point.x, point.y, point.z]} key={point.z}>*/}
      {/*    <sphereGeometry args={[0.1, 10, 10]} />*/}
      {/*    <meshStandardMaterial color="blue" />*/}
      {/*  </mesh>*/}
      {/*))}*/}
    </group>
  );
};

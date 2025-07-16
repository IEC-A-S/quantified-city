export const PlaneCube = () => {
  return (
    <group>
      <mesh position={[0, 0, 0.5]} rotation={[0, 0, 0]}>
        <planeGeometry />
        <meshBasicMaterial color="#214145" />
      </mesh>
      <mesh position={[0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry />
        <meshBasicMaterial color="#214145" />
      </mesh>
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI * 1.5, 0, Math.PI / 2]}>
        <planeGeometry />
        <meshBasicMaterial color="#214145" />
      </mesh>
    </group>
  );
};

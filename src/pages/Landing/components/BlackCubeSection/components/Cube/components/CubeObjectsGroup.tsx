import { useRef } from "react";
import { CubeSide } from "./CubeSide";
import { useSpring, animated } from "@react-spring/three";
import { SideEnum } from "../interfaces";

import { colors, texts } from "../data";

import type { FC } from "react";
import type { Group } from "three";
import type { SpringRef } from "@react-spring/three";

interface ICubeObjectsGroup {
  setHoveredSide(side: string | null): void;
  setClickedCategory(category: string | null): void;
}

const onHover =
  (
    api: SpringRef<{
      rotationX: number;
      rotationY: number;
      rotationZ: number;
    }>
  ) =>
  (cb: (side: SideEnum | null) => void) =>
  (side: SideEnum | null) =>
  () => {
    cb(side);

    switch (side) {
      case SideEnum.left:
        api.start({
          rotationX: 0,
          rotationY: 0.6,
          rotationZ: 0,
        });

        break;
      case SideEnum.right:
        api.start({
          rotationX: 0,
          rotationY: -0.45,
          rotationZ: 0,
        });

        break;
      case SideEnum.top:
        api.start({
          rotationX: 0.35,
          rotationY: -0.8,
          rotationZ: -0.8,
        });

        break;
      case null:
        api.start({
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
        });

        break;
      default:
        throw new Error("Unknown side");
    }
  };

export const CubeObjectsGroup: FC<ICubeObjectsGroup> = ({
  setHoveredSide,
  setClickedCategory,
}) => {
  const meshRef = useRef<Group | null>(null);
  const [{ rotationX, rotationY, rotationZ }, api] = useSpring(
    {
      rotationX: 0, // initial value of rotation on the X axis
      rotationY: 0, // initial value of rotation on the Y axis
      rotationZ: 0, // initial value of rotation on the Z axis
      config: {
        mass: 100, // mass is the only spring config attribute that is required.
        tension: 4000, // tension determines the speed at which the spring will return to its resting position.
        friction: 60, // friction determines how hard the spring will fight against the incoming force.
        precision: 0.01, // precision is the minimum distance needed before the spring is at rest.
        clamp: true, // clamp determines whether the spring is allowed to overshoot its target and then spring back.
      },
    },
    []
  );

  const onHoverHandler = onHover(api)(setHoveredSide);
  const onUnHoverHandler = onHoverHandler(null);

  return (
    <animated.group
      ref={meshRef}
      rotation-x={rotationX}
      rotation-y={rotationY}
      rotation-z={rotationZ}
      onPointerLeave={onUnHoverHandler}
    >
      <CubeSide
        side={SideEnum.left}
        texts={[...texts.left]}
        colors={[...colors.left]}
        onUnHover={onUnHoverHandler}
        onHover={onHoverHandler(SideEnum.left)}
        setClickedCategory={setClickedCategory}
      />
      <CubeSide
        side={SideEnum.right}
        texts={[...texts.right]}
        colors={[...colors.right]}
        onUnHover={onUnHoverHandler}
        onHover={onHoverHandler(SideEnum.right)}
        setClickedCategory={setClickedCategory}
      />
      <CubeSide
        side={SideEnum.top}
        texts={[...texts.top]}
        colors={[...colors.top]}
        onUnHover={onUnHoverHandler}
        onHover={onHoverHandler(SideEnum.top)}
        setClickedCategory={setClickedCategory}
      />
    </animated.group>
  );
};

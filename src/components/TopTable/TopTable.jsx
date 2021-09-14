import React from "react";
import DeskLamp from "../DeskLamp/DeskLamp";
import { MathUtils } from "three";
import Camera from "../Camera/Camera";
import Popcorn from "../Popcorn/Popcorn";
import Telephone from "../Telephone/Telephone";
import CdsGroup from "../CdsGroup/CdsGroup";

export default function TopTable({ position }) {
  return (
    <group position={position}>
      <DeskLamp
        position={[0.8, 0.027, 0.2]}
        rotation-y={-MathUtils.degToRad(120)}
      />
      <Camera position={[-0.7, 0.1, 0]} rotation-y={Math.PI / 2} />
      <Popcorn
        position={[-0.52, 0.02, -0.35]}
        rotation-y={MathUtils.degToRad(-75)}
      />
      <Telephone position={[0.8, 0.07, -0.25]} />
      <CdsGroup
        img="assets/movies/the-dark-knight-min.jpg"
        position={[0.2, 0, 0.2]}
      />
    </group>
  );
}

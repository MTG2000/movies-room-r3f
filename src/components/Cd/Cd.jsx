import React from "react";
import { TextureLoader } from "three";

const textureLoader = new TextureLoader();

export default function Cd({ img, ...props }) {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[0.4, 0.01, 0.4]} />
      <meshStandardMaterial color={0x000000} metalness={0.7} roughness={0.7} />
      {img && (
        <mesh rotation-x={-Math.PI / 2} rotation-z={Math.PI} position-y={0.009}>
          <circleBufferGeometry args={[0.3 / 2, 48]} />
          <meshBasicMaterial map={textureLoader.load(img)}></meshBasicMaterial>
        </mesh>
      )}
    </mesh>
  );
}

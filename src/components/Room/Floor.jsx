import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

export const roomPlaneSize = 4;

export default function Floor() {
  const texture = useTexture("assets/textures/floor-texture.jpg");

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  const repeats = 16;
  texture.repeat.set(repeats, repeats);
  return (
    <>
      <mesh rotation-x={Math.PI * -0.5} receiveShadow>
        <planeBufferGeometry args={[roomPlaneSize, roomPlaneSize]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh rotation-x={-Math.PI * -0.5} position-y={3}>
        <planeBufferGeometry args={[roomPlaneSize, roomPlaneSize]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}

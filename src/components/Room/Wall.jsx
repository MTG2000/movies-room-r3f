import React from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { roomPlaneSize } from "./Floor";
import { wallHeight } from "./Walls";

export default function Wall({ position, rotation }) {
  const size = { x: roomPlaneSize, y: wallHeight };
  const texture = useTexture("assets/textures/wall-texture.jpg");
  texture.encoding = THREE.sRGBEncoding;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return (
    <mesh rotation-y={rotation} position={position}>
      <planeBufferGeometry args={[size.x, size.y]} />
      <meshStandardMaterial map={texture} roughness={0.4} metalness={0} />
    </mesh>
  );
}

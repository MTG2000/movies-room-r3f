import React, { useRef, useEffect } from "react";
import fontData from "three/examples/fonts/helvetiker_regular.typeface.json";
import { FontLoader, MathUtils } from "three";
import Stick from "./Stick";
import { useFrame } from "@react-three/fiber";

const loader = new FontLoader();

let mxRotation = 0;
let mnRotation = 0;
let rotDir = 1;
export default function Credits({ img, ...props }) {
  const group = useRef();
  const font = loader.parse(fontData);
  useEffect(() => {
    mxRotation = group.current.rotation.y + MathUtils.degToRad(5);
    mnRotation = group.current.rotation.y;
  }, []);
  useFrame((_, delta) => {
    if (mxRotation === 0) return;
    group.current.rotation.y += delta * rotDir * 0.05;
    if (
      group.current.rotation.y > mxRotation ||
      group.current.rotation.y < mnRotation
    ) {
      if (group.current.rotation.y > mxRotation)
        group.current.rotation.y = mxRotation;
      if (group.current.rotation.y < mnRotation)
        group.current.rotation.y = mnRotation;
      rotDir *= -1;
    }
  });
  return (
    <group position={[-1.88, 0.95, -0.43]} rotation-y={Math.PI / 2} ref={group}>
      <mesh position-x={-0.28}>
        <textGeometry
          args={[
            "MTG",
            {
              font,
              size: 0.2,
              height: 0.03,
              curveSegments: 4,
              bevelEnabled: true,
              bevelThickness: 0.01,
              bevelSize: 0.01,
            },
          ]}
        />
        <meshPhongMaterial color={0x3e76c8} flatShading={true} metalness={1} />
      </mesh>
      <mesh rotation-x={Math.PI / 2} position-y={0.1}>
        <boxBufferGeometry args={[1, 0.01, 0.6]} />
        <meshStandardMaterial color={0x000000} metalness={0} roughness={0.7} />
      </mesh>
      <Stick length={1} rotation-z={Math.PI / 2} position-y={0.42} />
      <Stick length={1} rotation-z={Math.PI / 2} position-y={-0.18} />
      <Stick length={0.6} position={[-0.48, 0.12, 0]} />
      <Stick length={0.6} position={[0.48, 0.12, 0]} />
    </group>
  );
}

import React from "react";

export default function Stick({ length, ...props }) {
  return (
    <mesh {...props}>
      <cylinderBufferGeometry args={[0.03, 0.03, length, 8]} />
      <meshStandardMaterial color={0xffe841} metalness={0.4} roughness={0.5} />
    </mesh>
  );
}

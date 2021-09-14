import React from "react";

export default function ProjectionCanvas({ img, ...props }) {
  return (
    <mesh rotation-x={Math.PI / 2} position={[-0.88, 1, 1.95]} {...props}>
      <boxBufferGeometry args={[1.4, 0.01, 1.4 / 2]} />
      <meshStandardMaterial color={0xeeeeee} metalness={0} roughness={0.7} />
      <mesh rotation-z={Math.PI / 2} position-z={-1.4 / 4}>
        <cylinderBufferGeometry args={[0.03, 0.03, 1.4, 8]} />
        <meshStandardMaterial color={0x111111} metalness={1} roughness={0.3} />
      </mesh>
    </mesh>
  );
}

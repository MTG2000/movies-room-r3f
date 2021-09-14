import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import TopTable from "../TopTable/TopTable";

export default function Table(props) {
  const group = useRef();
  const { nodes } = useGLTF("assets/models/wooden_table/scene.gltf");
  const [texture, metalic] = useTexture([
    "assets/models/wooden_table/textures/Material_baseColor.jpeg",
    "assets/models/wooden_table/textures/Material_metallicRoughness.png",
  ]);
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={0.003}
        position-y={0.5}
        castShadow
        receiveShadow
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[330.86, 157.83, 6.75]}
            >
              <mesh
                geometry={nodes.Cube_Material_0.geometry}
                castShadow
                receiveShadow
              >
                <meshStandardMaterial
                  color={0x795548}
                  map={texture}
                  metalnessMap={metalic}
                  roughness={metalic}
                />
              </mesh>
            </group>
          </group>
        </group>
      </group>
      <TopTable position={[0, 0.5 + 0.005, 0]} />
    </>
  );
}

useGLTF.preload("assets/models/wooden_table/scene.gltf");

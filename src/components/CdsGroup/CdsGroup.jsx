import React from "react";
import Cd from "../Cd/Cd";

const numCds = 10;
export default function CdsGroup({ img, ...props }) {
  return (
    <group {...props}>
      {Array(10)
        .fill()
        .map((_, i) => {
          return (
            <Cd
              key={i}
              position-y={i * 0.01}
              rotation-y={(Math.random() * Math.PI) / 6}
              img={i === numCds - 1 ? img : null}
            />
          );
        })}
    </group>
  );
}

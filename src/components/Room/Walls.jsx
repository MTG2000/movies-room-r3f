import { roomPlaneSize as planeSize } from "./Floor";
import Wall from "./Wall";

export const wallHeight = 3;

export default function Walls() {
  return (
    <>
      <Wall position={[0, wallHeight / 2, -planeSize / 2]} rotation={0} />
      <Wall position={[0, wallHeight / 2, planeSize / 2]} rotation={Math.PI} />
      <Wall
        position={[planeSize / 2, wallHeight / 2, 0]}
        rotation={-Math.PI / 2}
      />
      <Wall
        position={[-planeSize / 2, wallHeight / 2, 0]}
        rotation={Math.PI / 2}
      />
    </>
  );
}

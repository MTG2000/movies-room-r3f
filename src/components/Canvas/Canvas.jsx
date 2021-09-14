import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import Room from "../Room";
import { CameraControls } from "../../utils/Camera";

export default function Canvas(props) {
  return (
    <div id="canvas-container">
      <ThreeCanvas
        camera={{
          fov: 75,
          far: 10,
          aspect: window.innerWidth / window.innerHeight,
          position: [-1.2, 1.2, -1.2],
          up: [0, 1, 0],
        }}
        pixelRatio={window.devicePixelRatio}
        onCreated={(canvasCtx) => {
          canvasCtx.gl.shadowMap = true;
          canvasCtx.gl.outputEncoding = THREE.sRGBEncoding;
          canvasCtx.gl.physicallyCorrectLights = true;
        }}
      >
        <Suspense fallback={null}>
          <hemisphereLight args={[0xffffff, 0x753939, 1]} />
          <Room />
        </Suspense>
        <CameraControls />
      </ThreeCanvas>
      <Loader />
    </div>
  );
}

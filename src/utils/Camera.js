import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { lookAts, useStore } from "./Store";
import gsap from "gsap/gsap-core";
import * as THREE from "three";

function moveCamera(camera, moveTo, lookAt, onComplete = () => {}) {
  const duration = 1;
  const startPosition = new THREE.Vector3().copy(camera.position);
  const startOrientation = new THREE.Quaternion().copy(camera.quaternion);

  camera.position.set(moveTo.x, moveTo.y, moveTo.z);
  camera.lookAt(lookAt.x, lookAt.y, lookAt.z);

  const targetOrientation = new THREE.Quaternion().copy(camera.quaternion);

  camera.quaternion.copy(startOrientation);
  camera.position.copy(startPosition);

  gsap.to(camera.position, {
    duration,
    ...moveTo,
    onComplete,
  });
  gsap.to(
    {},
    {
      duration,
      onUpdate: function () {
        camera.quaternion
          .copy(startOrientation)
          .slerp(targetOrientation, this.progress());
      },
    }
  );
}

export const CameraControls = () => {
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    camera.lookAt(0.5, 0.5, 0.5);
  }, [camera]);

  const move = useStore((s) => s.move);

  useEffect(() => {
    const unSub = useStore.subscribe(
      (to) => {
        const { position, lookAt } = lookAts[to];
        moveCamera(camera, position, lookAt);
      },
      (s) => s.curPlace
    );

    return () => {
      unSub();
    };
  }, [move, camera]);

  return <>{/* <OrbitControls /> */}</>;
};

import React, { useRef, useEffect } from "react";
import { useStore } from "../../../utils/Store";
import gsap from "gsap/gsap-core";

export default function UiPanel({ place, id, ...props }) {
  const ref = useRef();
  useEffect(() => {
    const duration = 0.5;
    const unSub = useStore.subscribe(
      (to, from) => {
        if (from === place)
          gsap.to(ref.current.style, {
            opacity: 0,
            duration: duration,
            onComplete: () => {
              ref.current.style.visibility = "hidden";
            },
          });
        else if (to === place) {
          ref.current.style.visibility = "visible";
          gsap.to(ref.current.style, {
            opacity: 1,
            duration: duration,
            delay: duration,
          });
        }
      },
      (s) => s.curPlace
    );
    return () => {
      unSub();
    };
  }, [place]);
  return (
    <div id={id} ref={ref} className="panel">
      {props.children}
    </div>
  );
}

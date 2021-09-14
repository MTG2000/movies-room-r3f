import create from "zustand";

export const PLACES = {
  MOVIES: 0,
  SCENE: 1,
  PROJECTOR: 2,
  PHONE: 3,
  CREDITS: 4,
};

export const lookAts = {
  [PLACES.MOVIES]: {
    position: {
      x: -0.12,
      y: 1.055,
      z: -0.447,
    },
    lookAt: { x: -0.1, y: 0.56, z: -0.22 },
  },
  [PLACES.SCENE]: {
    position: {
      x: -0.003,
      y: 1.3,
      z: -1.5,
    },
    lookAt: { x: 0, y: 0.6, z: 0 },
  },
  [PLACES.PHONE]: {
    position: {
      x: 0.7,
      y: 1.04,
      z: -0.5,
    },
    lookAt: { x: 0.7, y: 0.57, z: -0.25 },
  },
  [PLACES.PROJECTOR]: {
    position: { x: -0.92, y: 1.1, z: 0.94 },
    lookAt: { x: -0.92, y: 1, z: 1.95 },
  },
  [PLACES.CREDITS]: {
    position: { x: -0.98, y: 0.85, z: -0.43 },
    lookAt: { x: -1.98, y: 0.95, z: -0.43 },
  },
};

export const useStore = create((set, get) => ({
  curMovie: 0,
  isAnimating: false,
  curPlace: -1,

  move: function (to) {
    set({ curPlace: to });
  },
}));

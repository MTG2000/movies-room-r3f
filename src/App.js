import "./App.css";
import { extend } from "@react-three/fiber";
import { Object3D } from "three";
import Canvas from "./components/Canvas/Canvas";
import UIs from "./components/UIs/UIs";
extend({ Object3D });

function App() {
  return (
    <>
      <Canvas />
      <UIs />
    </>
  );
}

export default App;

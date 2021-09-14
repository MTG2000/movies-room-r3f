import React from "react";
import Floor from "./Floor";
import Walls from "./Walls";
import Table from "../Table/Table";
import ProjectionCanvas from "../ProjectionCanvas/ProjectionCanvas";
import Credits from "../Credits/Credits";

export default function Room() {
  return (
    <group>
      <Floor />
      <Walls />
      <Table />
      <ProjectionCanvas />
      <Credits />
    </group>
  );
}

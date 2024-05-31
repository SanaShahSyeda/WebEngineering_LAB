import React from "react";
import Rectangle from "./Rectangle";
import Square from "./Square";
import Circle from "./Circle";
import "./Users.css";

export default function Shapecontainer() {
  return (
    <div className="container">
      ShapeContainer
      <Rectangle></Rectangle>
      <Square color="purple"></Square>
      <Circle color="violet" size={50}></Circle>
      <Circle color="green" size={120}></Circle>
      <Circle color="pink" size={120}></Circle>
    </div>
  );
}

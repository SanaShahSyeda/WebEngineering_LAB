import React from "react";
import { useState } from "react";
import Circle from "./Circle";
import "./Chameleon.css";

const Chameleon = () => {
  let colors = { green: "green", cyan: "cyan", purple: "purple", red: "red" };

  const [colour, setColor] = useState("yellow");

  return (
    <div className="container">
      <div className="buttonArea">
        <button
          style={{ color: "purple" }}
          onClick={() => {
            setColor(colors.purple);
          }}
        >
          Purple
        </button>
        <button
          style={{ color: "red" }}
          onClick={() => {
            setColor(colors.red);
          }}
        >
          Red
        </button>
        <button
          style={{ color: "cyan" }}
          onClick={() => {
            setColor(colors.cyan);
          }}
        >
          Cyan
        </button>
        <button
          style={{ color: "green" }}
          onClick={() => {
            setColor(colors.green);
          }}
        >
          Green
        </button>
      </div>
      <div className="circle">
        <Circle size={150} color={colour} />
      </div>
    </div>
  );
};

export default Chameleon;

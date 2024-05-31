import React from "react";

export default function FillArea({
  color = "yellow",
  width = 1200,
  height = 100,
  name = " component",
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: width,
        height: height,
        textAlign: "center",
      }}
    >
      {name}
    </div>
  );
}

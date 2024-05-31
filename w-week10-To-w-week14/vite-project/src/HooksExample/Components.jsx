import React from "react";

export default function Components({
  width = 200,
  height = 100,
  text = "Navbar",
  color = "yellow",
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
        textAlign: "center",
      }}
    >
      {text}
    </div>
  );
}

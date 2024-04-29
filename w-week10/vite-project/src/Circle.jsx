import React from "react";

export default function Circle({ size = 100, color = "green" }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
      }}
    ></div>
  );
}

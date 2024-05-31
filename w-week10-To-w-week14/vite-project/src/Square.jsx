import React from "react";

export default function Square(props) {
  return (
    <div
      style={{
        width: `${props.size || 100}px`,
        height: `${props.size || 100}px`,
        backgroundColor: `${props.color || "red"}`,
      }}
    >
      Square
    </div>
  );
}

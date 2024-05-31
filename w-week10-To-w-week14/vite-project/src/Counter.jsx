import React from "react";
import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      Count value
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        &minus;
      </button>
      <input type="text" value={count} />
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        &#43;
      </button>
    </div>
  );
}

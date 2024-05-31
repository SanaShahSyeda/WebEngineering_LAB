import React from "react";
import { useState } from "react";
import Components from "./Components";

export default function IndependentHooks() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Components width={1520} height={50} text="hello"></Components>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <Components
            width={450}
            height={613}
            text="Aside"
            color="yellowgreen"
          ></Components>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Components
              width={550}
              height={306}
              text="Counter 1"
              color="cyan"
            ></Components>
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
          <div>
            <Components
              width={550}
              height={306}
              text="Counter 2"
              color="pink"
            ></Components>
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
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Components
              width={520}
              height={306}
              text="Advertisement 1"
              color="dodgerblue"
            ></Components>
          </div>
          <div>
            <Components
              width={520}
              height={306}
              text="Advertisement 2"
              color="tomato"
            ></Components>
          </div>
        </div>
      </div>
      <div>
        <Components width={1520} height={50} text="hello"></Components>
      </div>
      <div></div>
    </div>
  );
}

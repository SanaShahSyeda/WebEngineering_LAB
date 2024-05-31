import React from "react";
import FillArea from "./FillArea";
import { useState } from "react";

export default function App() {
  const counters = [{ id: 1 }];
  let [count, setCountValue] = useState(0);

  function addValue() {
    if (count >= 9) {
      alert("count range is 0 to 9");
    } else {
      count = count + 1;
      setCountValue(count);
    }
  }

  function subValue() {
    if (count < 0) {
      alert("count range is 0 to 9");
    } else {
      count = count - 1;
      setCountValue(count);
    }
  }

  return (
    <div>
      <FillArea color="pink" height={30} width={1200} name="Navbar"></FillArea>
      <button>Add Counter</button>
      {counters.map((item, index) => {
        <div className="my_container">
          <button onClick={addValue}>+</button>
          <label>{count}</label>
          <button onClick={subValue}>-</button>
          <button>Delete</button>
        </div>;
      })}

      <button onClick={addValue}>+</button>
      <label>{count}</label>
      <button onClick={subValue}>-</button>
      <button>Delete</button>

      <FillArea color="pink" height={30} width={1200} name="Footer"></FillArea>
    </div>
  );
}

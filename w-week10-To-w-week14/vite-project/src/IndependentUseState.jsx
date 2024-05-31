import { useState } from "react";

export default function IndependentUseState() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function updateCounter() {
    setCount(count + 1);
  }

  return <button onClick={updateCounter}>Clicked {count} times</button>;
}

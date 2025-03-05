import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-success"
        id="wd-counter-up-click"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Up
      </button>
      <button
        className="btn btn-danger"
        id="wd-counter-down-click"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Down
      </button>
      <hr />
    </div>
  );
}

export default function Counter() {
  let count = 7;
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-success"
        id="wd-counter-up-click"
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Up
      </button>
      <button
        className="btn btn-danger"
        id="wd-counter-down-click"
        onClick={() => {
          count--;
          console.log(count);
        }}
      >
        Down
      </button>
    </div>
  );
}

export default function ChildStateComponent({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Counter: {counter}</h3>
      <button
        id="wd-increment-child-state-click"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
      <button
        id="wd-decrement-child-state-click"
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
      <hr />
    </div>
  );
}

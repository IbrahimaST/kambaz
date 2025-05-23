const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};

export default function PassingDataOnEvent() {
  return (
    <div>
      <h2>Passing Data On Event</h2>
      <button
        onClick={() => add(2, 3)}
        className="btn btn-primary"
        id="wd-pass-data-click"
      >
        Pass 2 and 3 to add()
      </button>
      <hr />
    </div>
  );
}

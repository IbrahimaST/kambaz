export default function PassingFunctions({
  theFunction,
}: {
  theFunction: () => void;
}) {
  return (
    <div>
      <h2>Passing Functions</h2>
      <button onClick={theFunction}>Invoke the Function</button>
    </div>
  );
}

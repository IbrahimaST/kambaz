const subtract = (a: number, b: number): number => {
  return a - b;
};

export default function ArrowFunctions() {
  const threeMinusOne = 2;
  console.log(subtract(3, 1));

  return (
    <div id="wd-arrow-functions">
      <h4>New ES6 arrow functions</h4>
      threeMinusOne = {threeMinusOne} <br />
      subtract(3, 1) = {subtract(3, 1)} <hr />
    </div>
  );
}

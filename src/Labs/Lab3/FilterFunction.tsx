export default function FilterFunction() {
  let numberArray1 = [1, 2, 4, 5, 6];
  let numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  let evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  let oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  return (
    <div id="wd-filter-function">
      <h4>Filter function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2} <br />
      evenNumbers = {evenNumbers} <br />
      oddNumbers = {oddNumbers} <hr />
    </div>
  );
}

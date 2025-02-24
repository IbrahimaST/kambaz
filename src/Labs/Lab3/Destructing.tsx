export default function Destructing() {
  // const name = person.name
  // const age = person.age
  const person = {
    name: "Ibrahima",
    age: 25,
  };
  const numbers = ["one", "two", "three"];
  const { name, age } = person;
  const [first, second, third] = numbers;

  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;
      <br />
      <br />
      name = {name} <br />
      age = {age} <br />
      <h3>Array Destructing</h3>
      const [first, second, third] = ["one", "two", "three"] <br />
      <br />
      first = {first} <br />
      second = {second} <br />
      third = {third} <hr />
    </div>
  );
}

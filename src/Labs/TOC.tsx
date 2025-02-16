import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Labs">Labs</Link>
        </li>
        <li>
          <Link to="/Labs/Lab1">Lab1</Link>
        </li>
        <li>
          <Link to="/Labs/Lab2">Lab2</Link>
        </li>
        <li>
          <Link to="/Labs/Lab3">Lab3</Link>
        </li>
        <li>
          <Link to="/Kambaz">Kambaz</Link>
        </li>
      </ul>
    </div>
  );
}

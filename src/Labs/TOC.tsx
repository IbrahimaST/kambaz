import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Kambaz">Kambaz</Link>
        </li>
        <li>
          <Link to="/Labs">Labs</Link>
        </li>
        <li>
          <Link to="/Lab1">Lab1</Link>
        </li>
        <li>
          <Link to="/Lab2">Lab2</Link>
        </li>
        <li>
          <Link to="/Lab3">Lab3</Link>
        </li>
      </ul>
    </div>
  );
}

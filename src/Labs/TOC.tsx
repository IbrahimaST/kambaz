/*
In the Labs component, add the following Routes to navigate to Labs, Lab1, Lab2, and Lab3. 
Create a table of content (TOC) component that implements links to navigate to each lab. 
Also make Lab1 the default screen. Confirm that the Lab1 component displays as the default landing screen, 
and clicking on each of the links navigates to the different labs.
*/

import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <div>
      <ul>
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

/*
In the Labs component, add the following Routes to navigate to Labs, Lab1, Lab2, and Lab3. 
Create a table of content (TOC) component that implements links to navigate to each lab. 
Also make Lab1 the default screen. Confirm that the Lab1 component displays as the default landing screen, 
and clicking on each of the links navigates to the different labs.
*/

import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { HashRouter, Navigate, Route, Routes } from "react-router";

export default function Labs() {
  return (
    <HashRouter>
      <div>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />}></Route>
          <Route path="/Lab1" element={<Lab1 />}></Route>
          <Route path="/Lab2/*" element={<Lab2 />}></Route>
          <Route path="/Lab3" element={<Lab3 />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

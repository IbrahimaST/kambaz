import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";
import { Navigate, Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />}></Route>
          <Route path="/Lab1" element={<Lab1 />}></Route>
          <Route path="/Lab2/*" element={<Lab2 />}></Route>
          <Route path="/Lab3" element={<Lab3 />}></Route>
          <Route path="/Lab4" element={<Lab4 />}></Route>
          <Route path="/Lab5/*" element={<Lab5 />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

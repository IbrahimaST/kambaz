import { HashRouter, Routes, Route, Navigate } from "react-router";
import Kambaz from "./Kambaz";
import Labs from "./Labs";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kambaz" />}></Route>
          <Route path="/Labs/*" element={<Labs />}></Route>
          <Route path="/Kambaz/*" element={<Kambaz />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

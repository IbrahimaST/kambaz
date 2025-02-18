import { HashRouter, Routes, Route, Navigate } from "react-router";
import Kambaz from "./Kambaz";
import Labs from "./Labs";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

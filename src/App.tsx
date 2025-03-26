import { HashRouter, Routes, Route, Navigate } from "react-router";
import Kambaz from "./Kambaz";
import Labs from "./Labs";
import Courses from "./Kambaz/Courses";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

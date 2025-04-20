import { HashRouter, Routes, Route, Navigate } from "react-router";
import Kambaz from "./Kambaz";
import Labs from "./Labs";
import Courses from "./Kambaz/Courses";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/Kambaz/Account/Signin" />}
            />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
            <Route path="/Courses/:cid/*" element={<Courses />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;

import Account from "./Account";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

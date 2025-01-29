import Account from "./Account";
import { Route, Routes, Navigate } from "react-router";

/**
 * In the Kambaz screen, add the following routes so that the Account screen is the default.
 * Confirm that the Signin screen is the landing page of the Kambaz Web application.
 */
export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/Kambaz/Account/index" />} />
        <Route path="/Account/" element={<Account />} />
      </Routes>
    </div>
  );
}

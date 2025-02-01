import Account from "./Account";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <table>
        <tr>
          <td valign="top">
            <KambazNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/Kambaz/Account/Signin" />}
              />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/Courses" element={<Courses />}></Route>
              <Route path="/Calendar" element={<h1>Calendar</h1>}></Route>
              <Route path="/Inbox" element={<h1>Inbox</h1>}></Route>
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}

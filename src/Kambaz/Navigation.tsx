import { Link } from "react-router-dom";
import Account from "./Account";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
        Northeastern
      </a>
      <Link to="/Kambaz/Account" id="wd-account-link">
        Account
      </Link>
      <Link id="wd-dashboard-link" to="/Kambaz/Dashboard">
        Dashboard
      </Link>
      <Link id="wd-courses-link" to="/Kambaz/Dashboard">
        Courses
      </Link>
      <Link id="wd-calendar-link" to="/Kambaz/Calendar">
        Calendar
      </Link>
      <Link id="wd-inbox-link" to="/Kambaz/Inbox">
        Inbox
      </Link>
      <Link id="wd-labs-link" to="/Labs">
        Labs
      </Link>
    </div>
  );
}

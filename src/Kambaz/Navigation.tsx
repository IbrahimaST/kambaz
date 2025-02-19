import { Link } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">
        Northeastern
      </a>{" "}
      <br />
      <Link to="/Kambaz/Account" id="wd-account-link">
        Account
      </Link>{" "}
      <br />
      <Link id="wd-dashboard-link" to="/Kambaz/Dashboard">
        Dashboard
      </Link>{" "}
      <br />
      <Link id="wd-courses-link" to="/Kambaz/Courses">
        Courses
      </Link>{" "}
      <br />
      <Link id="wd-calendar-link" to="/Kambaz/Calendar">
        Calendar
      </Link>{" "}
      <br />
      <Link id="wd-inbox-link" to="/Kambaz/Inbox">
        Inbox
      </Link>{" "}
      <br />
      <Link id="wd-labs-link" to="/Labs">
        Labs
      </Link>
    </div>
  );
}

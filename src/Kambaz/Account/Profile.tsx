import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        type="text"
        title="Enter Username"
        placeholder="Enter Username"
        defaultValue="alice"
        id="wd-username"
      />{" "}
      <br />
      <input
        type="password"
        title="Enter Password"
        id="wd-password"
        defaultValue="password"
      />{" "}
      <br />
      <input
        type="text"
        title="Enter First Name"
        placeholder="Enter First Name"
        defaultValue="Alice"
        id="wd-first-name"
      />{" "}
      <br />
      <input
        type="text"
        title="Enter Last Name"
        placeholder="Enter Last Name"
        defaultValue="Wonderland"
        id="wd-first-name"
      />{" "}
      <br />
      <input
        type="date"
        value="01-01-2000"
        name=""
        id="wd-date"
        title="Enter a Date"
      />{" "}
      <br />
      <input
        type="email"
        defaultValue="alice@wonderland.com"
        id="wd-email"
        title="Enter an email"
      />{" "}
      <br />
      <select defaultValue="FACULTY" id="wd-role" title="Pick One">
        <option value="USER">User</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="ADMIN">Admin</option>
      </select>{" "}
      <br />
      <Link to="../Signup" id="wd-signup-link">
        Sign Out
      </Link>
    </div>
  );
}

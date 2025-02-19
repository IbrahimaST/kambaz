import { FormControl, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <FormControl
        type="text"
        title="Enter Username"
        placeholder="Enter Username"
        defaultValue="alice"
        id="wd-username"
        className="mb-2"
      />
      <FormControl
        type="password"
        title="Enter Password"
        id="wd-password"
        defaultValue="password"
        className="mb-2"
      />
      <FormControl
        type="text"
        title="Enter First Name"
        placeholder="Enter First Name"
        defaultValue="Alice"
        id="wd-first-name"
        className="mb-2"
      />
      <FormControl
        type="text"
        title="Enter Last Name"
        placeholder="Enter Last Name"
        defaultValue="Wonderland"
        id="wd-first-name"
        className="mb-2"
      />
      <FormControl
        type="date"
        value="01-01-2000"
        name=""
        id="wd-date"
        title="Enter a Date"
        className="mb-2"
      />
      <FormControl
        type="email"
        defaultValue="alice@wonderland.com"
        id="wd-email"
        title="Enter an email"
        className="mb-2"
      />
      <FormSelect
        defaultValue="FACULTY"
        id="wd-role"
        title="Pick One"
        className="mb-2"
      >
        <option value="USER">User</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="ADMIN">Admin</option>
      </FormSelect>
      <Link
        to="../Signup"
        id="wd-signup-link"
        className="btn btn-danger w-100 mb-2"
      >
        Sign Out
      </Link>
    </div>
  );
}

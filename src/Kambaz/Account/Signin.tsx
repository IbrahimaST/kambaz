import { Link } from "react-router";

export default function Signin() {
  return (
    <div className="wd-signin-screen">
      <h3>Sign In</h3>
      <input placeholder="username" title="" className="wd-username" /> <br />
      <input
        type="password"
        placeholder="password"
        className="wd-password"
      />{" "}
      <br />
      <Link to="../Profile" id="wd-signin-btn">
        Sign In
      </Link>{" "}
      <br />
      <Link to="../Signin" id="wd-signup-link">
        Sign Up
      </Link>
    </div>
  );
}

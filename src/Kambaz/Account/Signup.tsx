import { Link } from "react-router-dom";
import React from "react";

export default function Signup() {
  return (
    <div id="wd-signup">
      <h3>Sign Up</h3>
      <input
        type="text"
        title="Enter Username"
        placeholder="username"
        className="wd-username"
      />{" "}
      <br />
      <input
        type="password"
        title=""
        placeholder="password"
        className="wd-password"
      />{" "}
      <br />
      <input
        type="password"
        title=""
        placeholder="verify password"
        className="wd-verify-password"
      />{" "}
      <br />
      <Link to="/Kambaz/Account/Signup">Sign up</Link> <br />
      <Link to="/Kambaz/Account/Signin">Sign in</Link>
    </div>
  );
}

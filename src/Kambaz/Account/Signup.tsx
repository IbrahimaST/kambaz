import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup">
      <h3>Sign Up</h3>
      <FormControl
        type="text"
        title="Enter Username"
        placeholder="username"
        className="wd-username mb-2"
      />
      <FormControl
        type="password"
        title=""
        placeholder="password"
        className="wd-password mb-2"
      />
      <Link to="../Signup" className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link to="../Signin">Sign in</Link>
    </div>
  );
}

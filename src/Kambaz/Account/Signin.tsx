import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        id="wd-username"
        placeholder="username"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
      />
      <FormControl
        id="wd-password"
        placeholder="password"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        type="password"
        className="mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
        onClick={(e) => {
          e.preventDefault();
          signin();
        }}
      >
        Sign in
      </Link>
      <br />
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}

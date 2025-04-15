import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        className="list-group-item active border border-0"
        to="/Kambaz/Account/Signin"
      >
        Signin
      </Link>{" "}
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kambaz/Account/Signup"
      >
        Signup
      </Link>{" "}
      <Link
        className="list-group-item text-danger border border-0"
        to="/Kambaz/Account/Profile"
      >
        Profile
      </Link>
    </div>
  );
}

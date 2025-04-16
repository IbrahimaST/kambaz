import { Button, FormControl, FormSelect } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
          <FormControl
            type="text"
            title="Enter Username"
            placeholder="Enter Username"
            defaultValue={profile.username}
            id="wd-username"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <FormControl
            type="password"
            title="Enter Password"
            defaultValue={profile.password}
            id="wd-password"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <FormControl
            type="text"
            title="Enter First Name"
            placeholder="Enter First Name"
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="mb-2"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
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
            value="01-01-2000"
            name=""
            defaultValue={profile.dob}
            id="wd-dob"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <FormControl
            type="email"
            defaultValue={profile.email}
            id="wd-email"
            className="mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />

          <FormSelect
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
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
          <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}

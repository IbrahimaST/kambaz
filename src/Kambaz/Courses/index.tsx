import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import "../styles.css";
import { useSelector } from "react-redux";

export default function Courses() {
  const { cid } = useParams();
  const location = useLocation();
  const { pathname } = location;

  const { courses } = useSelector((state: any) => state.courses);
  const course = courses.find(
    (c: { _id: string | undefined }) => c._id === cid
  );
  const enrollments = useSelector((state: any) => state.enrollments);
  const currentUser = useSelector(
    (state: any) => state.accountReducer.currentUser
  );

  if (!course) {
    return <div>Course not found.</div>;
  }

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid
  );

  if (!isEnrolled && currentUser?.role !== "FACULTY") {
    return <Navigate to="/Kambaz/Dashboard" replace />;
  }

  const isAssignmentEditor = pathname.includes("Assignments/");

  if (!isEnrolled && currentUser?.role !== "FACULTY") {
    return <Navigate to="/Kambaz/Dashboard" />;
  }

  return (
    <div
      id="wd-courses"
      className={`wd-main-content-offset ${isAssignmentEditor ? "p-3" : ""}`}
    >
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course.name} &gt; {pathname.split("/").pop()}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation cid={cid!} />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

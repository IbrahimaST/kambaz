import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import "../styles.css";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();

  const course = courses.find((course) => course._id === cid);

  if (!course) {
    console.error("No course found for ID:", cid);
    return <div>Course not found. Current path: {pathname}</div>;
  }

  const isAssignmentEditor = pathname.includes("Assignments/");

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

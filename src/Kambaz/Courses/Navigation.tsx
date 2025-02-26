import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { pathname } = useLocation();
  const { cid } = useParams();
  const currentPage = pathname.split("/").pop();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kambaz/Courses/${cid}/${link}`}
          id="wd-course-home-link"
          className={`list-group-item ${
            currentPage === link ? "active" : ""
          } border border-0`}
        >
          {link}
        </Link>
      ))}
      <br />
    </div>
  );
}

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CourseNavigation({ cid }) {
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
  const currentPage = pathname.split("/").pop();
  console.log("Current Path:", pathname);
  console.log("Receiving CID in navigation", cid);

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kambaz/Courses/${cid}/${link}`}
          className={`list-group-item text-danger ${
            currentPage === link ? "active text-black" : ""
          } border border-0`}
        >
          {link}
        </Link>
      ))}
      <br />
    </div>
  );
}

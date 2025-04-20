import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CourseNavigation({ cid }: { cid: string }) {
  const { pathname } = useLocation();
  const currentPage = pathname.split("/").pop();

  const currentUser = useSelector(
    (state: any) => state.accountReducer?.currentUser
  );
  const enrollments = useSelector((state: any) => state.enrollments || []);

  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const isEnrolled = enrollments.some(
    (e: any) => e.user === currentUser?._id && e.course === cid
  );

  if (!isFaculty && !isEnrolled) {
    return null;
  }

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

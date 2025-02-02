import { Link } from "react-router-dom";

export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link to="Home">Home</Link> <br />
      <Link to="Modules">Modules</Link> <br />
      <Link to="Piazza">Piazza</Link> <br />
      <Link to="Zoom">Zoom</Link> <br />
      <Link to="Assignments">Assignments</Link> <br />
      <Link to="Quizzes">Quizzes</Link> <br />
      <Link to="People">People</Link>
    </div>
  );
}

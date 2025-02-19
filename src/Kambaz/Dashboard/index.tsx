import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (6)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/COOK1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cooking.webp" width={200} />
            <div>
              <h5>COOK1234 Cooking</h5>
              <p className="wd-dashboard-course-title">Studying Food</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/COMM1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/debate.webp" width={200} />
            <div>
              <h5>COMM1234 Debate</h5>
              <p className="wd-dashboard-course-title">Argumentation</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/LANG1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/french.jpg" width={200} />
            <div>
              <h5>LANG1234 French</h5>
              <p className="wd-dashboard-course-title">Language of Love</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/SCI1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/geology.jpeg" width={200} />
            <div>
              <h5>SCI1234 Geology</h5>
              <p className="wd-dashboard-course-title">Study of Rocks</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/LANG1235/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/latin.jpg" width={200} />
            <div>
              <h5>LANG1235 Latin</h5>
              <p className="wd-dashboard-course-title">Language of the Dead</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/PSYCH1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/psychology.jpg" width={200} />
            <div>
              <h5>PSYCH1234 Psychology</h5>
              <p className="wd-dashboard-course-title">The Human Mind</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

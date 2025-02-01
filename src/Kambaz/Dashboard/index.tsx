import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="id-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/cartography.jpg" width={200} />
            <div>
              <h5> HIST1234 Cartography </h5>
              <p className="wd-dashboard-course-title">
                Studying Maps: Deep Dive into Cartography{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/cooking.webp" width={200} />
            <div>
              <h5> COOK1234 Cooking </h5>
              <p className="wd-dashboard-course-title">
                Studying Food: Deep Dive into Cooking{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/debate.webp" width={200} />
            <div>
              <h5> COMM1234 Debate </h5>
              <p className="wd-dashboard-course-title">
                Studying Debate: Deep Dive into Argumentation{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/french.jpg" width={200} />
            <div>
              <h5> LANG1234 French </h5>
              <p className="wd-dashboard-course-title">
                Studying French: Deep Dive into Language of Love{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/geology.jpeg" width={200} />
            <div>
              <h5> SCI1234 Geology </h5>
              <p className="wd-dashboard-course-title">
                Studying Geology: Deep Dive into Rocks{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/latin.jpg" width={200} />
            <div>
              <h5> LANG1234 Latin </h5>
              <p className="wd-dashboard-course-title">
                Studying Latin: Deep Dive into Language of the Dead{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses" className="wd-dashboard-course-link">
            <img src="/images/psychology.jpg" width={200} />
            <div>
              <h5> PSYCH1234 Psychology </h5>
              <p className="wd-dashboard-course-title">
                Studying Psychology: Deep Dive into the Human Mind{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {
      id: "COOK1234",
      title: "Cooking",
      image: "/images/cooking.webp",
      description: "Studying Food",
    },
    {
      id: "COMM1234",
      title: "Debate",
      image: "/images/debate.webp",
      description: "Argumentation",
    },
    {
      id: "LANG1234",
      title: "French",
      image: "/images/french.jpg",
      description: "Language of Love",
    },
    {
      id: "SCI1234",
      title: "Geology",
      image: "/images/geology.jpeg",
      description: "Study of Rocks",
    },
    {
      id: "LANG1235",
      title: "Latin",
      image: "/images/latin.jpg",
      description: "Language of the Dead",
    },
    {
      id: "PSYCH1234",
      title: "Psychology",
      image: "/images/psychology.jpg",
      description: "The Human Mind",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {courses.map((course) => (
          <div key={course.id} className="wd-dashboard-course">
            <Link
              to={`/Kambaz/Courses/${course.id}/Home`}
              className="wd-dashboard-course-link"
            >
              <img src={course.image} width={200} />
              <div>
                <h5>
                  {course.id} {course.title}
                </h5>
                <p className="wd-dashboard-course-title">
                  {course.description}
                </p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

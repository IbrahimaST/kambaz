import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  FormControl,
  Button,
} from "react-bootstrap";
import "../styles.css";
import KambazNavigation from "../Navigation";
import { useSelector, useDispatch } from "react-redux";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setSelectedCourse,
} from "../Courses/reducer";
import { useState } from "react";
import { unenroll, enroll } from "../enrollments/reducer";

type Course = {
  _id: string;
  name: string;
  number: string;
  description: string;
  startDate?: string;
  endDate?: string;
  department?: string;
  credits?: number;
};

type Enrollment = {
  user: string;
  course: string;
};

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: any) => state.accountReducer || {}
  );
  const {
    courses,
    selectedCourse,
  }: { courses: Course[]; selectedCourse: Course | null } = useSelector(
    (state: any) => state.courses || {}
  );
  const enrollments: Enrollment[] = useSelector(
    (state: any) => state.enrollments || []
  );

  const dispatch = useDispatch();

  const isFaculty =
    currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleEnrollmentsView = () => {
    setShowAllCourses(!showAllCourses);
  };

  const isUserEnrolled = (courseId: string) =>
    enrollments.some(
      (e) => e.user === currentUser?._id && e.course === courseId
    );

  return (
    <div id="wd-dashboard" className="wd-main-content-offset">
      <KambazNavigation />
      <Button
        className="btn btn-info float-end"
        onClick={toggleEnrollmentsView}
      >
        {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
      </Button>
      <h1 id="wd-dashboard-title">Dashboard</h1>

      <hr />

      {isFaculty && (
        <div>
          <h5>
            New Course
            <Button
              id="wd-add-new-course-click"
              className="btn btn-primary float-end"
              onClick={() => dispatch(addCourse())}
            >
              Add
            </Button>
            <Button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(selectedCourse))}
              id="wd-update-course-click"
            >
              Update
            </Button>
          </h5>
          <br />
          <FormControl
            value={selectedCourse?.name || ""}
            className="mb-2"
            onChange={(e) =>
              dispatch(
                setSelectedCourse({ ...selectedCourse, name: e.target.value })
              )
            }
          />
          <FormControl
            as="textarea"
            value={selectedCourse?.description || ""}
            rows={3}
            onChange={(e) =>
              dispatch(
                setSelectedCourse({
                  ...selectedCourse,
                  description: e.target.value,
                })
              )
            }
          />
        </div>
      )}

      <br />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} lg={5} className="g-4">
          {(isFaculty
            ? courses
            : showAllCourses
            ? courses
            : courses.filter((c) => isUserEnrolled(c._id))
          ).map((course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "260px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg
                    variant="top"
                    src="public/images/psychology.jpg"
                    width={200}
                  />
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}: {course.number}
                    </CardTitle>
                    <CardText
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </CardText>

                    {/* Non-faculty users: show enroll/unenroll buttons */}
                    {!isFaculty &&
                      (isUserEnrolled(course._id) ? (
                        <Button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              unenroll({
                                userId: currentUser._id,
                                courseId: course._id,
                              })
                            );
                          }}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          className="btn btn-success"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              enroll({
                                userId: currentUser._id,
                                courseId: course._id,
                              })
                            );
                          }}
                        >
                          Enroll
                        </Button>
                      ))}

                    {/* Faculty-only actions */}
                    {isFaculty && (
                      <>
                        <Button className="btn btn-primary">Go</Button>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(setSelectedCourse(course));
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

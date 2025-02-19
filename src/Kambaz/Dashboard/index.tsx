import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "../styles.css";
import KambazNavigation from "../Navigation";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="wd-main-content-offset">
      <KambazNavigation />
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} lg={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/COOK1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/cooking.webp" width={200} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    COOK1234 Cooking
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Studying Food
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/COMM1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/debate.webp" width={200} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    COMM1234 Debate
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    Argumentation
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/LANG1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/french.jpg" width={200} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    LANG1234 French
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description"
                    style={{ height: "100px" }}
                  >
                    Language of Love
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/SCI1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/geology.jpeg" width={200} />
                <CardBody>
                  <CardTitle>SCI1234 Geology</CardTitle>
                  <CardText
                    className="wd-dashboard-course-description"
                    style={{ height: "100px" }}
                  >
                    Study of Rocks
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/LANG1235/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg variant="top" src="/images/latin.jpg" width={200} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-description">
                    LANG1235 Latin
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description"
                    style={{ height: "100px" }}
                  >
                    Language of the Dead
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/PSYCH1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/psychology.jpg"
                  width={200}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title">
                    PSYCH1234 Psychology
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description"
                    style={{ height: "100px" }}
                  >
                    The Human Mind
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link
                to="/Kambaz/Courses/CART1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src="/images/cartography.jpg"
                  width={200}
                />
                <CardBody>
                  <CardTitle>GEO1234 Cartography</CardTitle>
                  <CardText
                    className="wd-dashboard-course-description"
                    style={{ height: "100px" }}
                  >
                    Study of Maps
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

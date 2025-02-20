import { Button, FormControl, ListGroup, Badge } from "react-bootstrap";
import { BsPlus, BsGripVertical, BsThreeDots } from "react-icons/bs";
import { LuClipboardPen } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <FormControl
          className="w-50"
          placeholder="Search..."
          id="wd-search-assignment"
        />
        <div>
          <Button variant="secondary" className="me-2">
            <BsPlus size={20} /> Group
          </Button>
          <Button variant="danger">
            <BsPlus size={20} /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="p-0 fs-5" variant="secondary">
          <div className="p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            </div>
            <div>
              <Badge
                bg="light"
                text="dark"
                className="px-3 py-2 rounded-pill d-flex align-items-center"
              >
                40% of Total <BsPlus />
                <BsThreeDots />
              </Badge>
            </div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="p-0 border-start border-success border-3">
          <div className="p-3 ps-2">
            <div className="d-flex align-items-center">
              <BsGripVertical size={25} className="me-2 fs-3" />
              <LuClipboardPen size={25} className="text-success me-2" />
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="text-decoration-none text-dark fw-bold"
              >
                A1 - ENV + HTML
              </a>
              <FaCheckCircle size={25} className="text-success ms-auto" />
              <BsGripVertical size={25} className="ms-2" />
            </div>
            <div className="ms-5">
              <p className="mb-0">
                <span className="text-danger">Multiple Modules</span> |
                <b> Not available until</b> May 6 at 12:00am | <b>Due</b> May 13
                at 11:59pm | 100 pts
              </p>
            </div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="p-0 border-start border-success border-3">
          <div className="p-3 ps-2">
            <div className="d-flex align-items-center">
              <BsGripVertical size={25} className="me-2 fs-3" />
              <LuClipboardPen size={25} className="text-success me-2" />
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="text-decoration-none text-dark fw-bold"
              >
                A2 - CSS + BOOTSTRAP
              </a>
              <FaCheckCircle size={25} className="text-success ms-auto" />
              <BsGripVertical size={25} className="ms-2" />
            </div>
            <div className="ms-5">
              <p className="mb-0">
                <span className="text-danger">Multiple Modules</span> |
                <b> Not available until</b> May 13 at 12:00am | <b>Due</b> May
                20 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
        </ListGroup.Item>

        <ListGroup.Item className="p-0 border-start border-success border-3">
          <div className="p-3 ps-2">
            <div className="d-flex align-items-center">
              <BsGripVertical size={25} className="me-2 fs-3" />
              <LuClipboardPen size={25} className="text-success me-2" />
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="text-decoration-none text-dark fw-bold"
              >
                A3 - JAVASCRIPT + REACT
              </a>
              <FaCheckCircle size={25} className="text-success ms-auto" />
              <BsGripVertical size={25} className="ms-2 " />
            </div>
            <div className="ms-5">
              <p className="mb-0">
                <span className="text-danger">Multiple Modules</span> |
                <b> Not available until</b> May 20 at 12:00am | <b>Due</b> May
                27 at 11:59pm | 100 pts
              </p>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

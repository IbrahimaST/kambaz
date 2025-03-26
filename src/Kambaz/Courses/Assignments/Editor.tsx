import { useParams, Link } from "react-router-dom";
import { Form, Card } from "react-bootstrap";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const assignment = assignments.find(
    (assign) => assign._id === aid && assign.course === cid
  );

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-4">
          <Form.Label htmlFor="wd-name" className="fw-bold">
            Assignment Name
          </Form.Label>
          <Form.Control
            type="text"
            id="wd-name"
            defaultValue={assignment.title}
            className="w-100"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Assignment Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={10}
            defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
            className="w-100"
          />
        </Form.Group>

        <div className="row mb-4">
          <div className="col-md-6">
            <Form.Group>
              <Form.Label htmlFor="wd-points" className="fw-bold">
                Points
              </Form.Label>
              <Form.Control
                type="text"
                id="wd-points"
                defaultValue="100"
                className="w-100"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <Form.Group>
              <Form.Label htmlFor="wd-group" className="fw-bold">
                Assignment Group
              </Form.Label>
              <Form.Select id="wd-group" className="w-100">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Select>
            </Form.Group>
          </div>

          <div className="col-md-6">
            <Form.Group>
              <Form.Label htmlFor="wd-display-grade-as" className="fw-bold">
                Display Grade as
              </Form.Label>
              <Form.Select id="wd-display-grade-as" className="w-100">
                <option value="Percentage">Percentage</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-4">
          <Form.Label htmlFor="wd-submission-type" className="fw-bold">
            Submission Type
          </Form.Label>
          <Form.Select id="wd-submission-type" className="w-100">
            <option value="Online">Online</option>
          </Form.Select>
        </Form.Group>

        <Card className="mb-4">
          <Card.Body>
            <h5 className="mb-3">Online Entry Options</h5>
            <Form.Check
              type="checkbox"
              id="wd-text-entry"
              label="Text Entry"
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              id="wd-website-url"
              label="Website URL"
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              id="wd-media-recordings"
              label="Media Recordings"
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              id="wd-student-annotation"
              label="Student Annotation"
              className="mb-2"
            />
            <Form.Check
              type="checkbox"
              id="wd-file-upload"
              label="File Uploads"
              className="mb-2"
            />
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Body>
            <Form.Group className="mb-4">
              <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </Form.Label>
              <Form.Control
                type="text"
                id="wd-assign-to"
                defaultValue="Everyone"
                className="w-100"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label htmlFor="wd-due-date" className="fw-bold">
                Due Date
              </Form.Label>
              <Form.Control
                type="date"
                id="wd-due-date"
                defaultValue="2024-05-13"
                className="w-100"
              />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-available-from"
                    defaultValue="2024-05-06"
                    className="w-100"
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </Form.Label>
                  <Form.Control
                    type="date"
                    id="wd-available-until"
                    defaultValue="2024-05-20"
                    className="w-100"
                  />
                </Form.Group>
              </div>
            </div>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-end gap-2">
          <Link
            to={`/Courses/${courseId}/Assignments`}
            className="btn btn-secondary"
          >
            Cancel
          </Link>
          <Link
            to={`/Courses/${courseId}/Assignments`}
            className="btn btn-danger"
          >
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}

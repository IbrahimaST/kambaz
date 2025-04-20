import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Card } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const isEditing = aid !== "new";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState("100");
  const [dueDate, setDueDate] = useState("2024-05-13");
  const [availableFrom, setAvailableFrom] = useState("2024-05-06");
  const [availableUntil, setAvailableUntil] = useState("2024-05-20");

  useEffect(() => {
    if (isEditing && existingAssignment) {
      setTitle(existingAssignment.title || "");
      setDescription(existingAssignment.description || "");
      setPoints(existingAssignment.points || "100");
      setDueDate(existingAssignment.dueDate || "2024-05-13");
      setAvailableFrom(existingAssignment.availableFrom || "2024-05-06");
      setAvailableUntil(existingAssignment.availableUntil || "2024-05-20");
    }
  }, [isEditing, existingAssignment]);

  const handleSave = () => {
    const data = {
      _id: isEditing ? aid : uuidv4(),
      course: cid,
      title,
      description,
      points,
      dueDate,
      availableFrom,
      availableUntil,
    };

    if (isEditing) {
      dispatch(updateAssignment(data));
    } else {
      dispatch(addAssignment(data));
    }

    navigate(`/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Courses/${cid}/Assignments`);
  };

  return (
    <div className="p-4">
      <Form>
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Assignment Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Points</Form.Label>
          <Form.Control
            type="text"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </Form.Group>

        <Card className="mb-4">
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Due Date</Form.Label>
              <Form.Control
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label className="fw-bold">Available from</Form.Label>
                  <Form.Control
                    type="date"
                    value={availableFrom}
                    onChange={(e) => setAvailableFrom(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group>
                  <Form.Label className="fw-bold">Until</Form.Label>
                  <Form.Control
                    type="date"
                    value={availableUntil}
                    onChange={(e) => setAvailableUntil(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-end gap-2">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="button" className="btn btn-danger" onClick={handleSave}>
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

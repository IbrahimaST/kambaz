export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input type="text" value="A1 - ENV + HTML" id="wd-name" />
      <br />
      <br />

      <textarea id="wd-description" cols={30} rows={10}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />

      <div className="form-section">
        <label htmlFor="wd-points">Points</label>
        <input type="text" id="wd-points" value="100" />
      </div>

      <div className="form-section">
        <label htmlFor="wd-group">Assignment Group</label>
        <select id="wd-group">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        </select>
      </div>

      <div className="form-section">
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
        <select id="wd-display-grade-as">
          <option value="Percentage">Percentage</option>
        </select>
      </div>

      <div className="form-section">
        <label htmlFor="wd-submission-type">Submission Type</label>
        <select id="wd-submission-type">
          <option value="Online">Online</option>
        </select>
      </div>

      <div className="online-entry-options">
        <h4>Online Entry Options</h4>
        <div>
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div>
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div>
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div>
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div>
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Uploads</label>
        </div>
      </div>

      <div className="assign-section">
        <label htmlFor="wd-assign-to">Assign</label>
        <input type="text" id="wd-assign-to" value="Everyone" />
      </div>

      <div className="due-dates">
        <div>
          <label htmlFor="wd-due-date">Due</label>
          <input type="date" id="wd-due-date" value="2024-05-13" />
        </div>

        <div className="availability">
          <div>
            <label htmlFor="wd-available-from">Available from</label>
            <input type="date" id="wd-available-from" value="2024-05-06" />
          </div>
          <div>
            <label htmlFor="wd-available-until">Until</label>
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </div>
        </div>
      </div>

      <div className="button-section">
        <button type="button">Cancel</button>
        <button type="button">Save</button>
      </div>
    </div>
  );
}

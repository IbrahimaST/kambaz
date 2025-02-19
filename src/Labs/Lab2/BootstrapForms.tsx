import {
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  FormCheck,
  InputGroup,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function BootstrapForms() {
  return (
    <div>
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <FormGroup className="mb-3" controlId="wd-email">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-textarea">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </FormGroup>
      </div>

      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <FormSelect>
          <option value="default" selected>
            Open this select menu
          </option>
          <option value="1" selected>
            One
          </option>
          <option value="2" selected>
            Two
          </option>
          <option value="3" selected>
            Three
          </option>
        </FormSelect>
      </div>

      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <FormCheck
          type="switch"
          checked={false}
          id="wd-switch-1"
          label="Unchecked switch checkbox input"
        />
        <FormCheck
          type="switch"
          checked={true}
          id="wd-switch-2"
          label="Checked switch checkbox input"
        />
        <FormCheck
          type="switch"
          checked={false}
          disabled
          id="wd-switch-3"
          label="Unchecked disabled switch checkbox input"
        />
        <FormCheck
          type="switch"
          checked={true}
          disabled
          id="wd-switch-1"
          label="Checked disabled switch checkbox input"
        />
      </div>

      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <FormGroup>
          <FormLabel>Example range</FormLabel>
          <FormRange min={0} max={5} step={0.5} />
        </FormGroup>
      </div>

      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
          <FormControl />
        </InputGroup>
        <InputGroup>
          <FormControl />
          <InputGroupText>$</InputGroupText>
          <InputGroupText>0.00</InputGroupText>
        </InputGroup>
      </div>

      <div id="wd-css-responsive-forms-1">
        <h3>Responsive forms</h3>
        <FormGroup className="mb-3" controlId="email1" as={Row}>
          <FormLabel column sm={2}>
            Email
          </FormLabel>
          <Col sm={10}>
            <FormControl type="email" value="placeholder@example.com" />
          </Col>
        </FormGroup>

        <FormGroup className="mb-3" as={Row} controlId="password1">
          <FormLabel column sm={2}>
            Password
          </FormLabel>
          <Col sm={10}>
            <FormControl type="password" />
          </Col>
        </FormGroup>
        <FormGroup className="mb-3" as={Row} controlId="textarea2">
          <FormLabel column sm={2}>
            Bio
          </FormLabel>
          <Col sm={10}>
            <FormControl
              as="textarea"
              style={{
                height: "100px",
              }}
            />
          </Col>
        </FormGroup>
      </div>

      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms</h3>
        <Form>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column sm={2}>
              {" "}
              Email{" "}
            </FormLabel>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <FormLabel column sm={2}>
              {" "}
              Password{" "}
            </FormLabel>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>
          <fieldset>
            <FormGroup as={Row} className="mb-3">
              <FormLabel as="legend" column sm={2}>
                Radios{" "}
              </FormLabel>
              <Col sm={10}>
                <FormCheck
                  type="radio"
                  label="first radio"
                  checked
                  name="formHorizontalRadios"
                />
                <FormCheck
                  type="radio"
                  label="second radio"
                  name="formHorizontalRadios"
                />
                <FormCheck
                  type="radio"
                  label="third radio"
                  name="formHorizontalRadios"
                />
              </Col>
            </FormGroup>
          </fieldset>
          <FormGroup as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <FormCheck label="Remember me" />
            </Col>
          </FormGroup>
          <FormGroup as={Row} className="mb-3">
            <Col>
              <Button type="submit">Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

import { Form, Button, Collapse } from "react-bootstrap";
import "./Login.css";

export default function Login({ open }) {
  return (
    <>
      <Collapse in={open}>
        <Form className="LoginForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>אי-מייל:</Form.Label>
            <Form.Control type="email" placeholder="Enter E-mail" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>סיסמא:</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <div className="button-space">
            <Button variant="primary" type="submit">
              התחבר
            </Button>
            <Button variant="secondary" type="close">
              סגור
            </Button>
          </div>
        </Form>
      </Collapse>
    </>
  );
}

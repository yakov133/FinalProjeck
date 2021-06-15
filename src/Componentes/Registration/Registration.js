import "./Registration.css";
import {
  Navbar,
  Form,
  Container,
  Col,
  Row,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";

export default function Registration() {
  return (
    <>
      <Container>
        <Col >
        
          <div id="rotator" className="row justify-content-center">
          <img
            className="alignnone"
            src="https://thumbs.dreamstime.com/b/exciting-word-abstract-star-background-design-29536880.jpg"
            alt="Card image cap"
          />
          </div>
        </Col>

        <Row className="header-h1">
          <h1> רישום למחברת המתכונים</h1>
        </Row>

        <Form>
          <Form.Group
            as={Row}
            className="mb-3 form-row"
            controlId="formPlaintextUserName"
          >
            <Form.Label column sm="2">
              שם משתמש
            </Form.Label>
            <Col sm="5">
              <Form.Control type="text" defaultValue="שם משתמש" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 form-row"
            controlId="formPlaintextEmail"
          >
            <Form.Label column sm="2">
              אי-מייל
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="email"
                defaultValue="כתובת מייל שנמצאת בשימוש"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 form-row"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              סיסמא
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Form.Text>
            דרישות מינימום לסיסמא תקינה: לפחות ספרה, אות קטנה ואות גדולה
            (באנגלית). ולא פחות מ-8 תווים
          </Form.Text>

          <Form.Group
            as={Row}
            className="mb-3 form-row"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              אימות סיסמא
            </Form.Label>
            <Col sm="5">
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Form.Text>תוכן השדה יהיה זהה לתוכן שהוקלד עבור הסיסמה </Form.Text>

          <Form.Group>
            <span >מתכונים שאני רוצה לראות:</span>

            <div class="form-row ">
              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="vegan" id="vegan" />
                <label for="vegan">טבעוני</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="gluten-free" id="gluten-free" />
                <label for="gluten-free">ללא גלוטן</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="kosher" id="kosher" />
                <label for="kosher">כשר</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="parve" id="parve" />
                <label for="parve">פרווה</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="paleo" id="paleo" />
                <label for="paleo">פליאו</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="ketogenic" id="ketogenic" />
                <label for="ketogenic">קטוגני</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="vegetarian" id="vegetarian" />
                <label for="vegetarian">צמחוני</label>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <input type="checkbox" value="raw" id="raw" />
                <label for="raw">רואו</label>
              </div>
            </div>
          </Form.Group>
        </Form>
        <div className="space">
          <Button disabled variant="warning">
            רישום
          </Button>
        </div>
      </Container>
    </>
  );
}

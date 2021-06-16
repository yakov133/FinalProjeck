import {
  Navbar,
  Form,
  Container,
  Col,
  Row,
  Nav,
  NavDropdown,
  Button,
  Card,
} from "react-bootstrap";

export default function comment({item}) {
  let {name, imgsrc, text, time}=item
  
    return (
    <>
      <Card className="text-end">
        <blockquote className="blockquote mb-0 card-body">
          <Card.Img src={imgsrc} />
          <p> {time} </p>
          <span> {name} </span>
          <p> {text} </p>
        </blockquote>
      </Card>
    </>
  );
}

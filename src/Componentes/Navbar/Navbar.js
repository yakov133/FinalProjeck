import { Navbar, Container, Col,Row, Nav, NavDropdown } from "react-bootstrap";
import React, { useState } from "react";
import Login from "../Login/Login"
import "./Navebar.css";


export default function Navebar() {
  let userAfterLogin = JSON.parse(localStorage.getItem("key"));
  // userAfterLogin =true;

  const [showForm,setShowForm]=useState(false);


function show(){
  setShowForm(!showForm);
}

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className=" justify-content-around">
          <Navbar.Brand href="/" className=" justify-content-between">
            {" "}
            מחברת המתכונים{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className=" justify-content-between"
          >
            <Nav className="pad-left me-auto">

              <Nav.Link href="/">כל המתכונים</Nav.Link>
              
              {userAfterLogin ? (
                <Nav.Link href="#deets"> המתכונים שלי</Nav.Link>
              ) : (
                ""
              )}
              {" "}
              {userAfterLogin ? (
                <Nav.Link href="#deets">מתכון חדש</Nav.Link>
              ) : (
                ""
              )}
              {" "}
              {userAfterLogin ? (
                <Nav.Link href="#deets">הפרופיל שלי</Nav.Link>
              ) : (
                ""
              )}
            </Nav>

            
              
            <Nav>
            
               {(userAfterLogin) ? "" : <Nav.Link href="/registration">רישום</Nav.Link>}
               {(userAfterLogin) ? "" : <Nav.Link onClick={()=>show()} >התחברות</Nav.Link>}
               {(userAfterLogin) ? <Nav.Link href="#deets">התנתקות</Nav.Link>: ""}
               <Nav.Link href="/about">אודות</Nav.Link>
               <Nav.Link href="#deets">קהילה</Nav.Link>
             </Nav>
             

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-center">
          <Login open={showForm} />
        </Row>
      </Container>
      
    </>
  );
}

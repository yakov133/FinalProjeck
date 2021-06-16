import "./community.css";
import { Container, Col, Row } from "react-bootstrap";
import Comment from "./newcomment";
import { useState } from "react";

export default function Community() {
  let arr = [
    {
      name: "yema",
      imgsrc:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
      text: "basdasas",
      time: "13/13/13",
    },
    {
      name: "yakov",
      imgsrc:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
      text: "safas",
      time: "13/13/13",
    },
    {
      name: "israela",
      imgsrc:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
      text: "fasfsafsaf",
      time: "13/13/13",
    },
  ];

  localStorage.setItem("comments", JSON.stringify(arr));
  const [state,setState] = useState(true);
  const [values,setValues] = useState({name:"",text:""});


  function handelChnge(){
    if(values.name && values.text){
        setState(false)
    }else{setState(true)}
  }

  function showComment(){
      if(values.name && values.text){
          let tempArr = JSON.parse(localStorage.comments)
          tempArr.push({
            name: values.name,
            imgsrc:
              "https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg",
            text: values.text,
            time: "13/13/13",
          })
      }
  }

  return (
    <>
      <Container>
        <Row className="row justify-content-center">
          <h1>מתכונגרם</h1>
        </Row>
        <Row>
          <h2>כאן תוכלו לשתף חויות ורגשות!</h2>
        </Row>

        <Row class="justify-content-center">
          <form class="form-communt">
            <div class="d-flex justify-content-center">
              <div class="form-group col-md-6">
                <label for="inputEmail4">שם:</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue=""
                //   onChange={(e) => {setValues(...values,...{name:e.target.value}); handelChnge()}}
                onChange={(e) => {console.log(...values);}}
                  placeholder="שם מלא"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">העלה תמונה:</label>
                <input
                  type="file"
                  defaultValue=""
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">ספר לנו:</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                defaultValue=""
                onChange={(e)=> {setValues(...values,...{text:e.target.value}); handelChnge()}}
                placeholder="רשום כאן"
              ></textarea>
            </div>
            <button
                disabled={state}
              type="button"
              onClick={showComment}
              class="btn btn-secondary btn-lg btn-block"
            >
              פרסם
            </button>
          </form>
        </Row>

        <Col className=" justify-content-center">
          {JSON.parse(localStorage.comments).map((item) => (
            <Comment item={item} />
          ))}
        </Col>
      </Container>
    </>
  );
}

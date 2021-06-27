import "./search.css";
import { getDifficulties,getRecipe } from "../DAL/api";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Search() {
  const [dif, setdif] = useState(null);

   useEffect(() => {
    getDifficulties().then(data => { setdif(data);});
  }, []); 


  
  return (
    <>
      <Container>
        <h1>חיפוש</h1>
        <Row>
          <div className="searchRecipe d-flex">
            <div class="col-lg-3  ">
              <h4>הצג לי את המתכונים</h4>
            </div>

            <div className="form-check-inline">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio1">
                  חדשים
                </label>
              </div>

              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio2">
                  פופולרים
                </label>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Container >
        <div class="input-group">
          <select class="custom-select" id="inputGroupSelect04">
            <option selected>Choose...</option>
              {dif ? dif.map((level, index) => (
                <option value={level.id}> {level.difficultyLevelName} </option>
              )):""
              }
          </select>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
      </Container>
      
    </>
  );
}

import "./search.css";
import {Container } from "react-bootstrap";

export default function Search() {
  return (
    <>
      <Container>
        <h1>חיפוש</h1>

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
      </Container>
    </>
  );
}

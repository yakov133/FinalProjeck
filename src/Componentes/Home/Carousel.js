import { Carousel,Container} from "react-bootstrap";
import "./Carousel.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Container>
      <Carousel className="carosela w-100">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.dailyhive.com/20200107152300/52057146_774296726286494_6084927626781349160_n.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://napita.co/wp-content/uploads/2020/02/Zeret-Kitchen.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static01.nyt.com/images/2017/10/18/dining/18HUNGRY-BENYAM-slide-9MRG/18HUNGRY-BENYAM-slide-9MRG-superJumbo.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

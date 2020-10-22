import React from "react";
import { Carousel, Container } from "react-bootstrap";
import EditProduct from "../../images/EditProduct.jpg";
import NewProduct from "../../images/NewProduct.jpg";
import PI from "../../images/PI.jpg";
import Viewproduct from "../../images/Viewproduct.jpg";
function About() {
  return (
    <Container fluid className="p-0" style={{ Height: "100vh !important" }}>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={PI} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={NewProduct} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={EditProduct} alt="Third slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Viewproduct}
            alt="TFourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default About;

import React from "react";
// import Card from "../../components/Card";
// import data from "./data";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import "./services.css";

const Services = () => {
  return (
    <section>
      <div className="services_container">
      <div className="services_right">

<h2>What Makes Us Special</h2>
<p>lorem ipsum dolor sit amet, consectetur adip lorem lorem loreme lorem lorem lorem</p>


</div>




<div className="services_left" style={{ display: 'block', width: 700, padding: 30 }}>

<Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
      alt="Image One"
    />
    <Carousel.Caption>
      {/* <h3>Label for first slide</h3>
      <p>Sample Text for Image One</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
      alt="Image Two"
    />
    <Carousel.Caption>
      {/* <h3>Label for second slide</h3>
      <p>Sample Text for Image Two</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
      </div>
      
      
    </section>
  );
};

export default Services;

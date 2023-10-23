import React from 'react';
import { Container, Row, Col ,} from 'react-bootstrap';


const Footer = () => {
  return ( 
    <footer className="bg-dark text-white py-15  ">
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h4>Contact Us</h4>
            <p>Email: nannubanna967@gmail.com</p>
            <p>Phone: +916367277533</p>
          </Col>
          <Col xs={12} sm={6}>
            <h4>Follow Us</h4>
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>&copy; 2023 Your Gym. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  
  );
};

export default Footer;


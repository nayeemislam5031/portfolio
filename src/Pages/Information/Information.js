import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import "./Information.css"

import Intro from '../Intro/Intro';
import Resume from '../Resume/Resume';




const Information = () => {
 
  return (
    
      <Container className="theme">
        <Row>
          <Col sm={4} xs={12} md={6}>
            <Intro></Intro>
          </Col>

          <Col sm={8} xs={12} md={6} className="Resume-area">
            <Resume></Resume>
          </Col>
        </Row>
      </Container>
    
  );
}

export default Information
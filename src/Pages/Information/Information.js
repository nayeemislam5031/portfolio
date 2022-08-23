import React from 'react'
import { Col, Container,Row,ThemeProvider } from 'react-bootstrap'
import "./Information.css"

import Intro from '../Intro/Intro';
import Resume from '../Resume/Resume';




const Information = () => {
 
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="theme">
        <Container>
          <Row>
            <Col sm={4} xs={6}>
              <Intro></Intro>
            </Col>

            <Col sm={8} xs={6} className="Resume-area">
              <Resume></Resume>
            </Col>
          </Row>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Information
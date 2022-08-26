import React from 'react'
import "./Resune.css";
import { Card,Container,Row } from "react-bootstrap";


const Resume = () => {
  return (
    <Container className="resume">
      <Row>
        <Card className="Custom-Card">
          <Card.Header>
            <span className="bold"> Career Objective</span>
          </Card.Header>

          <p className="pt-2 pb-3 peragraph">
            Ultimate objective is to work in a challenging position to
            contribute the country through achieving unparalleled skills. I
            would like to work in such a congenial work place where sincerity is
            highly appreciated, performance and creativity is recognized and
            rewarded and an innovative working atmosphere is provided with
            up-to-date resources.
          </p>
        </Card>
        <Card className="Custom-Card mt-3">
          <Card.Header>
            <span className="bold"> Programming Skills</span>
          </Card.Header>

          <p className="pt-2  peragraph">
            <span className="bold">Efficiency : </span>React.js, React Router,
            React Bootstrap, Material UI, HTML5, CSS3, Bootstrap 4/5, JavaScript
            (ES6), RESTful API, Sass , Redux, Redux thunk
          </p>
          <p className="peragraph">
            <span className="bold">Comfortable : </span>Node js, React Nastive,
            Mongo DB, Express Js
          </p>
          <p className="peragraph">
            <span className="bold">Familiar : </span> mySQL, C, Angular js
          </p>
          <p className="peragraph">
            <span className="bold">Design : </span> Adobe Photoshop, Adobe XD
          </p>
          <p className="peragraph">
            <span className="bold">Systems : </span> Windows (7,8 and 10), Linux
            (Ubuntu, Mint)
          </p>
          <p className="peragraph">
            <span className="bold">Tools and Software : </span> Git, VS Code,
            Chrome Dev Tools, Heroku, Netlify, Firebase, MS Office, Filmora,
            Andorid Studio.
          </p>
        </Card>

        <Card className="Custom-Card mt-3">
          <Card.Header>
            <span className="bold"> Educational Qualification</span>
          </Card.Header>

          <p className="pt-2  peragraph">
            BSc in Computer Science and Technology
          </p>
          <p className=" peragraph">Jiangnan University (China)</p>
          <p className=" peragraph">Start - September 2019</p>
          <p className=" peragraph">End - June 2023</p>
        </Card>

        <Card className="Custom-Card mt-3">
          <Card.Header>
            <span className="bold"> Language Proficency</span>
          </Card.Header>

          <p className="pt-2  peragraph">
            <span className="bold">English -- </span> Excellent
          </p>
          <p className="peragraph">
            <span className="bold">Chinese -- </span>Good
          </p>
          <p className="peragraph">
            <span className="bold">Hindi -- </span>Excellent
          </p>
        </Card>
      </Row>
    </Container>
  );
}

export default Resume
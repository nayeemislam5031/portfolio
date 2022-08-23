import React from 'react'
import "./Intro.css" 
import {Card } from "react-bootstrap";
import img from "../../images/Nayeem_Miah.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Intro = () => {
  return (
    <div className="intro">
      <Card style={{ backgroundColor: "#086670" }} className="">
        <Card.Img variant="top" src={img} />
        <Card.Body className="card-body">
          <Card.Title>Nayeem Miah</Card.Title>
          <Card.Text>Front-end Developer</Card.Text>
          <div className="link">
            <Card.Link
              className="link-tag"
              href="https://www.linkedin.com/in/nayeem-islam-237aa0220/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Card.Link>

            <Card.Link
              className="link-tag"
              href="https://github.com/nayeemislam5031"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Card.Link>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ backgroundColor: "#086670" }} className="mt-2">
        <Card.Body className="card-body">
          <Card.Title className="">Address</Card.Title>
          <Card.Text>Present Address : Wuxi, Jiangsu, China</Card.Text>
          <Card.Text>
            Permanent Address: Narayanganj, Dhaka, Bangladesh
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ backgroundColor: "#086670" }} className="mt-2">
        <Card.Body className="card-body">
          <Card.Title className="">Contact</Card.Title>
          <Card.Text href="tel:01743196139"> Phone : +88 01743196139</Card.Text>
          <Card.Text>
            Email :
            <a className="email-link" href="mailto:nayeemislam5031@gmail.com">
              nayeemislam5031@gmail.com
            </a>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ backgroundColor: "#086670" }} className="mt-2">
        <Card.Body className="card-body">
          <Card.Title className="">Hobbies</Card.Title>
          <Card.Text> Science and Technology Studies, Research, Travelling, Badminton, Watching Movies   </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Intro

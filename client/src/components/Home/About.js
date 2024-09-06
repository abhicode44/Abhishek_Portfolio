import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assests/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // Email icon import

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow"> Abhishek Chudasama </span>
              and I'm from <span className="yellow"> Mumbai, India.</span>
              <br />
              <br />
              As a <b className="yellow"> Full-Stack </b> developer, I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in <b className="yellow">MERN Stack</b>, as well as have knowledge in programming languages such as Python.
              <br />
              <br />
              I have a passion for working with <b className="yellow">Node.js, MongoDB,</b> and
              <i><b className="yellow"> modern Javascript libraries and frameworks</b></i>
              &nbsp; like <i><b className="yellow">React.js</b></i>
              <br />
              <br />
              I am also interested in building new <i><b className="yellow">Web Technologies and Products,</b></i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhicode44"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chudasama-abhishek/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:abhishekchudasama49@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <HiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;

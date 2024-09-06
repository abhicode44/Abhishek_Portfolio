import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaGithub } from "react-icons/fa";

import {
  SiVisualstudiocode,
  SiPostman,
  SiNetlify ,
  SiRender
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3>Visual Studio</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3>Postman</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
        <h3>GitHub</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender/>
        <h3>Render</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h3>Netlify</h3>
      </Col>

      
    </Row>
  );
}

export default Toolstack;

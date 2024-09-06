import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlinePython } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  
} from "react-icons/di";

import { LiaCss3Alt } from "react-icons/lia";

import { RiTailwindCssLine  ,  RiBootstrapLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

import {
    SiRedux,
    SiMongodb,
    SiHtml5 ,
    SiExpress 
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h3>HTML</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <LiaCss3Alt />
        <h3>CSS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiBootstrapLine />
        <h3>BOOTSTRAP</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JAVASCRIPT</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>REACT.JS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <RiTailwindCssLine />
        <h3>Tailwind Css</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h3>REDUX</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>NODE.JS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
        <h3>EXPRESS.JS</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h3>MONDODB</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GrMysql />
        <h3>MYSQL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <AiOutlinePython />
        <h3>PYTHON</h3>
      </Col>
      
    </Row>
  );
}

export default Techstack;

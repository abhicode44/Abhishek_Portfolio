import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";

import grocery from "../assests/projects/grocery_store.png";
import chat from "../assests/projects/chat.png";
import bank from "../assests/projects/Bank.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">

      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Grocery Store Management"
              description="Developed a three-tier web application for grocery store management, including product
management and order tracking.
 Design the user interface for your grocery store management application. Implement responsive
and user-friendly
"
              ghLink="https://github.com/abhicode44/Grocery_Store_Management"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="The real-time chat application was designed to provide users with a seamless and responsive
communication platform, ensuring instant messaging capabilities and maintaining a persistent chat
history."
              ghLink="https://github.com/abhicode44/Chat_Application"
              demoLink=" https://chat-application-website-live.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Banking System"
              description="Developed a comprehensive MERN stack banking system with role-based access for customers
and bankers. Implemented secure authentication with token-based authorization, enabling
customers to view and manage transactions while bankers oversee account details. Enhanced user
interaction with deposit/withdrawal functionalities and balance validation. "
              ghLink="https://github.com/abhicode44/system"
              demoLink="https://bank-system-app.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";

import movies from "../assests/projects/movies.png";
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
              imgPath={movies}
              isBlog={false}
              title="🎬 Movie Review Application"
              description="Developed a robust Movie Review Application using the MERN stack (MongoDB , Express.js, React.js, Node.js) that allows users to explore movies, read and submit reviews, and manage their content seamlessly. 
              The application provides an interactive user experience, focusing on movie ratings and community feedback.
              To create an engaging platform for movie enthusiasts to share their thoughts and ratings.
              To facilitate easy management of movie and review data through a user-friendly interface."
              ghLink="https://github.com/abhicode44/MovieReview"
              demoLink="https://moviereview-website.onrender.com/"
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

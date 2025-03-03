import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center my-5 flex-grow-1">
        <h1 className="display-4 fw-bold">Hi, I'm Ji Im.</h1>
        <p className="lead">
          I'm a software developer who's passionate about learning and growing. Click through my website to learn more about me!
        </p>

        <div className="mt-5 p-4 bg-light rounded">
          <h2 className="fw-semibold">Education</h2>
          <p>Bachelor of Science in Computer Science, <strong>Drexel University</strong><br />(2019 - 2024, Cum Laude)</p>
        </div>

        <div className="mt-5 p-4 bg-white shadow-sm rounded">
          <h2 className="fw-semibold">Skills</h2>
          <div className="row">
            <div className="col-md-4">
              <h4 className="text-primary">Programming Languages</h4>
              <ul className="list-unstyled">
                <li>Python</li>
                <li>Java</li>
                <li>Racket</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-primary">Web Development</h4>
              <ul className="list-unstyled">
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-primary">Tools & Platforms</h4>
              <ul className="list-unstyled">
                <li>AWS</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Figma</li>
                <li>Storybook</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 bg-light rounded">
          <h2 className="fw-semibold">Involvement</h2>
          <ul className="list-unstyled">
            <li><strong>Choreographer & Dance Teacher</strong>, Filipino Intercultural Society of Drexel University (2021 - 2023)</li>
            <li><strong>Vice President</strong>, Action Team Leading Asian Solidarity/APIDA Caucus (2020 - 2023)</li>
            <li><strong>Performing & Fine Arts Committee Board Member</strong>, Campus Activity Board (2020 - 2023)</li>
          </ul>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Experiences = () => (
  <div className="container text-center my-5">
    <h1 className="display-4 fw-bold">Work Experience</h1>

    {/* RightOn Education Experience */}
    <div className="mt-5 p-4 bg-light rounded shadow-sm">
      <h2 className="fw-semibold">RightOn Education</h2>
      <p className="text-muted">Full Stack Developer (April 2022 - January 2024)</p>
      <ul className="list-unstyled">
        <li>Developed and deployed full-stack, responsive web and mobile applications using React, React Native, and JavaScript.</li>
        <li>Integrated AWS AppSync and GraphQL subscriptions to manage real-time data features like leaderboards.</li>
        <li>Collaborated with cross-functional teams in an Agile environment to improve user experiences with Storybook and testing.</li>
      </ul>
    </div>

    {/* Framewrk Experience */}
    <div className="mt-5 p-4 bg-white rounded shadow-sm">
      <h2 className="fw-semibold">Framewrk</h2>
      <p className="text-muted">Software Developer (April 2023 - September 2023)</p>
      <ul className="list-unstyled">
        <li>Built a mobile app feature with interactive elements to improve user engagement.</li>
        <li>Customized a React web application display using HTML and CSS for improved onboarding.</li>
        <li>Conducted in-person usability testing with product and design teams, translating insights into JIRA tasks.</li>
      </ul>
    </div>
    
  </div>
);

export default Experiences;

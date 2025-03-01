import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => (
  <div className="container text-center my-5">
    <h1 className="display-4 fw-bold">Projects</h1>

    {/* CampUs Project */}
    <div className="mt-5 p-4 bg-light rounded shadow-sm">
      <h2 className="fw-semibold">CampUs</h2>
      <p className="text-muted">Full-stack React Native mobile app using TypeScript and Figma</p>
      <ul className="list-unstyled">
        <li>Built features with a focus on code reliability and conducted unit testing with Jest.</li>
        <li>Created a project plan and software requirements specifications document.</li>
        <li>Engaged with stakeholders to gather and translate product preferences into software designs.</li>
      </ul>
    </div>

    {/* The Game Project */}
    <div className="mt-5 p-4 bg-white rounded shadow-sm">
      <h2 className="fw-semibold">The Game</h2>
      <p className="text-muted">Card game web application using JavaScript and Node with Express</p>
      <ul className="list-unstyled">
        <li>Collaborated with a team to develop an interactive web-based card game.</li>
        <li>Conducted meetings and delegated tasks for efficient milestone completion.</li>
        <li>Enhanced user engagement with private game rooms and instant chat functionality.</li>
      </ul>
    </div>

    {/* Meteoroids Project */}
    <div className="mt-5 p-4 bg-light rounded shadow-sm">
      <h2 className="fw-semibold">Meteoroids</h2>
      <p className="text-muted">Interactive game using Lua and the LÖVE game engine</p>
      <ul className="list-unstyled">
        <li>Led a team to develop an engaging game targeted at young audiences.</li>
        <li>Designed gameplay rules, visual assets, and player interaction frameworks.</li>
        <li>Established streamlined workflows using Git for parallel development.</li>
      </ul>
    </div>
  </div>
);

export default Projects;

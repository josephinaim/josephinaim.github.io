import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Projects = () => (
  <div className="container text-center my-5">
    <motion.h1 className="display-4 fw-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h1>

    {/* CampUs Project */}
    <motion.div className="mt-5 p-4 bg-light rounded shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h2 className="fw-semibold">CampUs</h2>
      <p className="text-muted">Full-stack React Native mobile app using TypeScript and Figma</p>
      <ul className="list-unstyled">
        <li>Built features with a focus on code reliability and conducted unit testing with Jest.</li>
        <li>Created a project plan and software requirements specifications document.</li>
        <li>Engaged with stakeholders to gather and translate product preferences into software designs.</li>
      </ul>
    </motion.div>

    {/* The Game Project */}
    <motion.div className="mt-5 p-4 bg-white rounded shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <h2 className="fw-semibold">The Game</h2>
      <p className="text-muted">Card game web application using JavaScript and Node with Express</p>
      <ul className="list-unstyled">
        <li>Collaborated with a team to develop an interactive web-based card game.</li>
        <li>Conducted meetings and delegated tasks for efficient milestone completion.</li>
        <li>Enhanced user engagement with private game rooms and instant chat functionality.</li>
      </ul>
    </motion.div>

    {/* Meteoroids Project */}
    <motion.div className="mt-5 p-4 bg-light rounded shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <h2 className="fw-semibold">Meteoroids</h2>
      <p className="text-muted">Interactive game using Lua and the LÖVE game engine</p>
      <ul className="list-unstyled">
        <li>Led a team to develop an engaging game targeted at young audiences.</li>
        <li>Designed gameplay rules, visual assets, and player interaction frameworks.</li>
        <li>Established streamlined workflows using Git for parallel development.</li>
      </ul>
    </motion.div>
  </div>
);

export default Projects;

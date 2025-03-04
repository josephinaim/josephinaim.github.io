import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Experiences = () => (
  <div className="container text-center my-5">
    <motion.h1 className="display-4 fw-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Work Experience
    </motion.h1>

    {/* RightOn Education Experience */}
    <motion.div className="mt-5 p-4 bg-light rounded shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <h2 className="fw-semibold">RightOn Education</h2>
      <p className="text-muted">Full Stack Developer (April 2022 - January 2024)</p>
      <ul className="list-unstyled">
        <li>Developed and deployed full-stack, responsive web and mobile applications using React, React Native, and JavaScript.</li>
        <li>Integrated AWS AppSync and GraphQL subscriptions to manage real-time data features like leaderboards.</li>
        <li>Collaborated with cross-functional teams in an Agile environment to improve user experiences with Storybook and testing.</li>
      </ul>
    </motion.div>

    {/* Framewrk Experience */}
    <motion.div className="mt-5 p-4 bg-white rounded shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <h2 className="fw-semibold">Framewrk</h2>
      <p className="text-muted">Software Developer (April 2023 - September 2023)</p>
      <ul className="list-unstyled">
        <li>Built a mobile app feature with interactive elements to improve user engagement.</li>
        <li>Customized a React web application display using HTML and CSS for improved onboarding.</li>
        <li>Conducted in-person usability testing with product and design teams, translating insights into JIRA tasks.</li>
      </ul>
    </motion.div>
  </div>
);

export default Experiences;

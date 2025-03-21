import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import SkillsTag from "../components/SkillsTag";

const Experiences = () => (
  <div className="container my-5">
    <motion.h1
      className="display-4 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Work Experience
    </motion.h1>

    <motion.div
      className="mt-5 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="row align-items-start">
        <div className="col-md-6 text-start">
          <h2 className="d-flex align-items-center gap-2">
            RightOn Education
            <a
              href="https://www.linkedin.com/company/righton-education/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/24/174/174857.png"
                alt="LinkedIn"
                className="linkedin-icon"
                style={{ width: "20px", height: "20px" }} 
              />
            </a>
          </h2>
          <p className="text-muted">Full Stack Developer (April 2022 - January 2024)</p>
          <SkillsTag skills={["React", "React Native", "JavaScript", "TypeScript", "Git", "Figma", "AWS", "GraphQL", "Storybook", "Xcode", "Slack", "MUI"]} />
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled ps-3" style={{ listStyleType: "disc" }}>
            <li>Developed and deployed full-stack, responsive web and mobile applications using React, React Native, and JavaScript.</li>
            <li>Integrated AWS AppSync and GraphQL subscriptions to manage real-time data features like leaderboards.</li>
            <li>Collaborated with cross-functional teams in an Agile environment to improve user experiences with Storybook and testing.</li>
          </ul>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="mt-5 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <div className="row align-items-start">
        <div className="col-md-6 text-start">
          <h2 className="d-flex align-items-center gap-2">
            Framewrk
            <a
              href="https://www.linkedin.com/company/framewrkapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="d-flex align-items-center"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/24/174/174857.png"
                alt="LinkedIn"
                className="linkedin-icon"
                style={{ width: "20px", height: "20px" }} 
              />
            </a>
          </h2>
          <p className="text-muted">Software Developer (April 2023 - September 2023)</p>
          <SkillsTag skills={["React", "React Native", "JavaScript", "HTML", "CSS", "JIRA", "Usability Testing"]} />
        </div>

        <div className="col-md-6">
          <ul className="list-unstyled ps-3" style={{ listStyleType: "disc" }}>
            <li>Built a mobile app feature with interactive elements to improve user engagement.</li>
            <li>Customized a React web application display using HTML and CSS for improved onboarding.</li>
            <li>Conducted in-person usability testing with product and design teams, translating insights into JIRA tasks.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
);

export default Experiences;

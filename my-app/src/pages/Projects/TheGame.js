import React from "react";
import { motion } from "framer-motion";
import SkillsTag from "../../components/SkillsTag";

const TheGame = () => (
  <div className="container my-5">
    {/* Animated Title */}
    <motion.h1 className="display-4 text-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      The Game
    </motion.h1>

    {/* Project Description Section with Two Columns */}
    <motion.div
      className="row align-items-start mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      {/* Left Side: Project Name, Description, and Skill Tags */}
      <div className="col-md-6 text-start">
        <motion.p className="text-muted mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Card game web application using JavaScript and Node with Express
        </motion.p>

        {/* Skill Tags Below Description */}
        <SkillsTag skills={["JavaScript", "Node.js", "Express", "HTML", "CSS"]} />
      </div>

      {/* Right Side: Bullet Points */}
      <div className="col-md-6">
        <motion.ul
          className="list-unstyled ps-3"  // Adds left padding for bullets
          style={{ listStyleType: "disc" }} // Forces bullet points
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <li>Collaborated with a team to develop an interactive web-based card game.</li>
          <li>Conducted meetings and delegated tasks for efficient milestone completion.</li>
          <li>Enhanced user engagement with private game rooms and instant chat functionality.</li>
        </motion.ul>
      </div>
    </motion.div>

    {/* Project Images Section */}
    <motion.div
      className="d-flex justify-content-center" // Centering the content
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <img
        className="w-75 rounded shadow-sm"
        src={`${process.env.PUBLIC_URL}/images/the-game.png`}
        alt="The Game Screenshot"
      />
    </motion.div>
  </div>
);

export default TheGame;

import React from "react";
import { motion } from "framer-motion";
import SkillsTag from "../../components/SkillsTag";

const Campus = () => (
  <div className="container my-5">
    <motion.h1 className="display-4 text-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      CampUs
    </motion.h1>

    <motion.div
      className="row align-items-start mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="col-md-6 text-start">
        <motion.p className="text-muted mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full-stack React Native mobile app using TypeScript and Figma
        </motion.p>

        <SkillsTag skills={["React Native", "TypeScript", "Jest", "Figma", "Expo", "Documentation"]} />
      </div>

      <div className="col-md-6">
        <motion.ul
          className="list-unstyled ps-3" 
          style={{ listStyleType: "disc" }} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <li>Built features with a focus on code reliability and conducted unit testing with Jest.</li>
          <li>Created a project plan and software requirements specifications document.</li>
          <li>Engaged with stakeholders to gather and translate product preferences into software designs.</li>
        </motion.ul>
      </div>
    </motion.div>

    <motion.div
      className="row justify-content-center mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      {[...Array(6)].map((_, index) => (
        <motion.div
          className="col-md-2 mb-3"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + 0.1 * index, duration: 0.8 }}
        >
          <img
            className="w-100 rounded shadow-sm"
            src={`${process.env.PUBLIC_URL}/images/campus-screenshot/campus-screenshot-${index}.jpg`}
            alt={`CampUs Screenshot ${index}`}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Campus;

import React from "react";
import { motion } from "framer-motion";
import SkillsTag from "../../components/SkillsTag";

const Meteoroids = () => (
  <div className="container my-5">
    <motion.h1 className="display-4 text-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Meteoroids
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
          Interactive game using Lua and the LÖVE game engine
        </motion.p>

        <SkillsTag skills={["Git", "Lua", "LÖVE"]} />
      </div>

      <div className="col-md-6">
        <motion.ul
          className="list-unstyled ps-3" 
          style={{ listStyleType: "disc" }} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <li>Led a team to develop an engaging game targeted at young audiences.</li>
          <li>Designed gameplay rules, visual assets, and player interaction frameworks.</li>
          <li>Established streamlined workflows using Git for parallel development.</li>
        </motion.ul>
      </div>
    </motion.div>

    <motion.div
      className="row row-cols-md-3 justify-content-center mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      {[...Array(3)].map((_, index) => (
        <motion.div
          className="col-md-4 mb-3"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + 0.1 * index, duration: 0.8 }}
        >
          <img
            className="w-100 rounded shadow-sm"
            src={`${process.env.PUBLIC_URL}/images/meteoroids/meteoroids-${index + 1}.png`}
            alt={`Meteoroids Screenshot ${index + 1}`}
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Meteoroids;

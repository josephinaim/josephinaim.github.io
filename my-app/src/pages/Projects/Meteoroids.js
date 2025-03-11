import React from "react";
import { motion } from "framer-motion";

const skillTags = (skills) => (
  <motion.div
    className="d-flex flex-wrap justify-content-center gap-2 mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    {skills.map((skill, index) => (
      <span key={index} className="badge bg-primary rounded-pill px-3 py-2">
        {skill}
      </span>
    ))}
  </motion.div>
);

const Meteoroids = () => (
  <div className="container text-center my-5">
    {/* Animated Title */}
    <motion.h1 className="display-4 fw-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Meteoroids
    </motion.h1>

    {/* Animated Project Description Section */}
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8">
          <motion.p className="text-muted mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Interactive game using Lua and the LÖVE game engine
          </motion.p>

          {/* Animated skill tags */}
          {skillTags(["Git", "Lua", "LÖVE"])}

          <motion.ul
            className="list-unstyled mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <li>Led a team to develop an engaging game targeted at young audiences.</li>
            <li>Designed gameplay rules, visual assets, and player interaction frameworks.</li>
            <li>Established streamlined workflows using Git for parallel development.</li>
          </motion.ul>
        </div>
      </div>

      {/* Animated Project Images Section */}
      <motion.div
        className="row row-cols-md-3 justify-content-center"
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
    </motion.div>
  </div>
);

export default Meteoroids;

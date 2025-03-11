import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => (
  <div className="container text-center my-5">
    <motion.h1 className="display-4 fw-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h1>

    {/* Projects Row */}
    <motion.div className="row mt-5 mb-5 justify-content-center">

      {/* CampUs Project */}
      <motion.div className="col-md-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Link to="/projects/campus" className="project-link d-block">
          <div className="project-container p-2 rounded shadow-sm flex-column" >
            <img 
              className="img-fluid rounded-top" 
              src={`${process.env.PUBLIC_URL}/images/campus-screenshot/campus-front.png`} 
              alt="CampUs Project Screenshot" 
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="caption mt-2 text-center">
              <h5 className="fw-bold">CampUs</h5>
              <p className="text-muted small">Full-stack React Native mobile app using TypeScript and Figma</p>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* The Game Project */}
      <motion.div className="col-md-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Link to="/projects/thegame" className="project-link d-block">
          <div className="project-container p-2 rounded shadow-sm flex-column">
            <img 
              className="img-fluid rounded-top" 
              src={`${process.env.PUBLIC_URL}/images/the-game.png`} 
              alt="The Game Project Screenshot" 
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="caption mt-2 text-center">
              <h5 className="fw-bold">The Game</h5>
              <p className="text-muted small">Card game web application using JavaScript and Node with Express</p>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Meteoroids Project */}
      <motion.div className="col-md-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Link to="/projects/meteoroids" className="project-link d-block">
          <div className="project-container p-2 rounded shadow-sm flex-column">
            <img 
              className="img-fluid rounded-top" 
              src={`${process.env.PUBLIC_URL}/images/meteoroids/meteoroids-1.png`} 
              alt="Meteoroids Project Screenshot" 
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="caption mt-2 text-center">
              <h5 className="fw-bold">Meteoroids</h5>
              <p className="text-muted small">Interactive game using Lua and the LÖVE game engine</p>
            </div>
          </div>
        </Link>
      </motion.div>

    </motion.div>
  </div>
);

export default Projects;

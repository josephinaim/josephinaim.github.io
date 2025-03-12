import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion"; // Corrected import for motion

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container text-center my-5 ">
        <motion.h1 className="display-4 text-start mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Ji Im!
        </motion.h1>

        <motion.p className="lead text-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Software developer passionate about learning and growing in everything.
        </motion.p>
      </div>

      <div className="container">
        <div className="underline"></div>
      </div>

      <div className="container text-start flex-grow-1">
        <div className="row">

          <motion.div className="col-md-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2>Skills</h2>
            <div className="row">
              {/* Programming Languages Column */}
              <div className="col-md-6">
                <h6 className="text-primary">Programming Languages</h6>
                <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>PHP</li>
                  <li>SQL</li>
                </ul>
              </div>
              {/* Web Development Column */}
              <div className="col-md-6">
                <h6 className="text-primary">Web Development</h6>
                <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Node.js</li>
                  <li>Wordpress</li>
                  <li>Express</li>
                  <li>Expo</li>
                  <li>MUI</li>
                </ul>
              </div>
            </div>
            {/* Tools & Platforms Column */}
            <div className="col-md-12">
              <h6 className="text-primary">Tools & Platforms</h6>
              <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
                <li>AWS</li>
                <li>Git</li>
                <li>Figma</li>
                <li>Storybook</li>
                <li>PostgreSQL</li>
                <li>Xcode</li>
                <li>Slack</li>
                <li>JIRA</li>
              </ul>
            </div>
          </motion.div>

          <motion.div className="col-md-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h2>Experience</h2>
            <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
              <li><strong>Full Stack Developer</strong>, RightOn Education (2022 - 2024)</li>
              <li><strong>Software Developer</strong>, Framewrk (2023 - 2023)</li>
            </ul>

            <motion.a className="btn btn-primary lead"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              href="#"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              View My Resume
            </motion.a>
          </motion.div>

          <motion.div className="col-md-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2>Education</h2>
            <p>Bachelor of Science in Computer Science, <strong>Drexel University</strong><br />(2019 - 2024, Cum Laude)</p>

            <h3 className="mt-4">Involvement</h3>
            <ul className="list-unstyled" style={{ fontSize: "0.8rem" }}>
              <li><strong>Choreographer & Dance Teacher</strong>, Filipino Intercultural Society of Drexel University (2021 - 2023)</li>
              <li><strong>Vice President</strong>, Action Team Leading Asian Solidarity/APIDA Caucus (2020 - 2023)</li>
              <li><strong>Performing & Fine Arts Committee Board Member</strong>, Campus Activity Board (2020 - 2023)</li>
              <li><strong>Professional Chair</strong>, Society of Asian Scientists and Engineers (2019 - 2020)</li>
            </ul>
          </motion.div>
        </div>


      </div>
    </div>
  );
};

export default Home;

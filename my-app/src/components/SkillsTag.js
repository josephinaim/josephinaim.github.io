import React from "react";

const SkillsTag = ({ skills }) => (
  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
    {skills.map((skill, index) => (
      <span key={index} className="badge rounded-pill px-3 py-2" style={{ backgroundColor: "#63585E" }}>
        {skill}
      </span>
    ))}
  </div>
);

export default SkillsTag;

import React, { useState, useEffect } from "react";

const Home = () => {
  const word = "learning";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < word.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(word.slice(0, index + 1)); // Update text up to the current index
        setIndex(index + 1);
      }, 200); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [index, word]); // Re-run effect when index changes

  return (
    <div>
      <h1>Hi, I'm Ji Im.</h1>
      <p>
        I'm a software developer who's passionate about{" "}
        <span style={{ fontWeight: "bold", color: "#007bff" }}>{displayedText}</span>
        &nbsp;and growing. Click through my website to learn more about me!
      </p>
    </div>
  );
};

export default Home;
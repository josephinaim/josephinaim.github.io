import './App.scss';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects";
import Experiences from "./pages/Experiences";
import Footer from './components/Footer';
import Contact from './pages/Contact';
import CampUs from './pages/Projects/Campus';
import Meteoroids from './pages/Projects/Meteoroids';
import TheGame from './pages/Projects/TheGame';

const App = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const clearSuccessMessage = () => setSuccessMessage("");
  return (
    <Router>
      <NavigationBar clearSuccessMessage={clearSuccessMessage}/>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/campus" element={<CampUs/>} />
          <Route path="/projects/meteoroids" element={<Meteoroids/>} />
          <Route path="/projects/thegame" element={<TheGame/>} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact successMessage={successMessage} setSuccessMessage={setSuccessMessage} />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};


export default App;

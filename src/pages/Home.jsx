import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';
import Navbar from '../components/Navbar';
import profilePic from './../assets/profile-pic.jpg'
import Contact from "./Contact";


const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home-container">
      
      <section className="hero">
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Amruta!</span>
            </h1>
            <h2>
              <span className="animate-text">Web Developer</span> & 
              <span className="animate-text"> Blockchain Enthusiast</span>
            </h2>
            <p>
            Innovate. Integrate. Elevate.
            </p>
            <div className="cta-buttons">
              <Link to="/projects" className="cta-button">View My Work</Link>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src={profilePic}
              alt="Amruta - Web Developer and Blockchain Enthusiast" 
              className="profile-image"
            />
           
            </div>

        </div>
      </section>
    </div>
    <Contact/>
    </>
  );
};

export default Home;
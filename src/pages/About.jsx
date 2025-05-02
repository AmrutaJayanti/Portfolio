import React from 'react';
import './../styles/About.css';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <p className="about-text">
          Driven by a passion for creating intuitive, high-impact web applications and exploring the endless possibilities of blockchain technology.
        </p>
        <p className="about-text">
          I specialize in building seamless user experiences, sleek interfaces, and innovative solutions that shape the future of the digital world.
        </p>
        <p className="about-text">
          My journey is fueled by curiosity, creativity, and a constant desire to learn and adapt, blending design with cutting-edge technology to bring ideas to life.
        </p>

        <div className="skills-container">
          <h3>Skills & Technologies</h3>
          <div className="skills-grid">
            <div className="skill">
              <div className="skill-icon">
                <i className="fab fa-react"></i>
              </div>
              <div className="skill-name">React</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '85%' }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-icon">
                <i className="fab fa-js"></i>
              </div>
              <div className="skill-name">JavaScript</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-icon">
                <i className="fab fa-html5"></i>
              </div>
              <div className="skill-name">HTML</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-icon">
                <i className="fab fa-css3-alt"></i>
              </div>
              <div className="skill-name">CSS</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '90%' }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-icon">
                <i className="fab fa-node-js"></i>
              </div>
              <div className="skill-name">Node.js</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-icon">
                <i className="fab fa-ethereum"></i>
              </div>
              <div className="skill-name">Blockchain</div>
              <div className="skill-level">
                <div className="level-bar" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

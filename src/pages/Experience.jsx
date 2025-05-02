import React from 'react';
import './../styles/Experience.css'
import Navbar from '../components/Navbar';
const experiences = [
  {
    role: "GDSC Web Development Lead",
    period: "Sept 2023 – Oct 2024",
    description: "Leading web development initiatives, mentoring juniors, and managing projects under Google Developer Student Clubs.",
    link:"https://drive.google.com/file/d/1ZMOFWq_zwKTtmn5znUL7qn5LUo2KDL8M/view?usp=sharing"
  },
  {
    role: "GDSC Blockchain Development Lead",
    period: "Dec 2024 - Present",
    description: "Focusing on building decentralized applications,promoting decentralized solutions and mentoring peers",
    link:"#"
  },
  {
    role: "GSSoC Open Source Contributor",
    period: "May 2024 - Aug 2024",
    description: "Contribution to various projects and merged 61 PRs. Also secured 71st rank among 25,000+ Participants",
    link:"https://drive.google.com/file/d/1aPPWXEzSgopHWwqVHhobrD7UqidunKkp/view?usp=sharing"
  }
];

const Experience = () => {
  return (
    <>
    <Navbar/>
    <div className="experience-timeline-container">
      <h1 className="timeline-heading">Experience Timeline</h1>
      <div className="timeline">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p>{item.period}</p>
              <p>{item.description}</p>
              <a href={item.link}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Experience;

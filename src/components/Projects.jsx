import React, { useState } from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Genderless Kei - Japan\'s Hot',
      description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...',
      image: project1
    },
    {
      title: 'Better Strategy & Quality',
      description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...',
      image: project2
    },
    {
      title: 'Genderless Kei - Japan\'s Hot',
      description: 'Set to launch on the manufacturer\'s new A330neo aircraft in 2017, it\'s offering lots of...',
      image: project3
    }
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  return (
    <section className="projects container">
      <h3>OUR PROJECT</h3>
      <h1>WHY WE ARE BEST</h1>
      <div className="project-content">
        <div className="project-image">
          <img src={projects[selectedProject].image} alt={projects[selectedProject].title} />
        </div>
        <div className="project-details">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-item ${index === selectedProject ? 'active' : ''}`} 
              onClick={() => handleProjectClick(index)}
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

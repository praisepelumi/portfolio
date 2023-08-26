import React from 'react';
import { useEffect } from 'react';
// Json Imports
import experienceData from '../data/experience.json';
import projectsData from '../data/projects.json';
import resumeData from '../data/resume.json';
import skillsData from '../data/skills.json';
import AboutMeData from '../data/about.json'


//import resume from '../docs/Praise_Emmanuel_Resume.pdf';

// Component imports
import ExpContainer from './ExpContainer';
import ProjectsContainer from './ProjectsContainer';
import AboutMe from './AboutMe';

function RightContainer () {
  const projects = projectsData.projects.map((project) => {
    return <ProjectsContainer projectName={project.projectName} info={project.info} repo={project.repo}/>
  });

  const skills = skillsData.skills.map(skill => {
    return 
  })

  return (
    <div>
      <div>
        <AboutMe about={AboutMeData.about}/>
      </div>

      <div>
        {projects}
      </div>

      <div>

      </div>

      <div>
        <a href="Praise_Emmanuel_Resume.pdf" target="_blank">Click here to view my Resume</a>
      </div>
      <div>
      </div>
    </div>
  )
};

export default RightContainer;
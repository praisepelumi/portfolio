import React from 'react';
import { useEffect } from 'react';
// Json Imports
import experienceData from '../data/experience.json';
import projectsData from '../data/projects.json';
import resumeData from '../data/resume.json';
import skillsData from '../data/skills.json';

// Component imports
import ExpContainer from './ExpContainer';
import ProjectsContainer from './projectsContainer';

function RightContainer () {
  const experience = experienceData
  const projects = projectsData.projects.map((project) => {
    return <ProjectsContainer projectName={project.projectName} info={project.info} repo={project.repo}/>
  })
  console.log(projects)
  return (
    <div>
      <div>
        {projects}
      </div>
      <div>
      </div>
    </div>
  )
};

export default RightContainer;
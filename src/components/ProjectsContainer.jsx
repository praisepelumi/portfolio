import React from 'react';

function ProjectsContainer ({projectName, info, repo}) {
  return (
    <div>
      <p>{projectName}</p>
      <p>{info}</p>
      <a href={repo}>Github Repo</a>
    </div>
  )
}

export default ProjectsContainer;
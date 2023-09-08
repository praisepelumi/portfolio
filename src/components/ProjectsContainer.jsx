import React from 'react';
import styles from './RightContainer.module.scss';

function ProjectsContainer ({projectName, info, repo}) {
  return (
    <div className={styles.projectDiv}>
      <p>{projectName}</p>
      <p>{info}</p>
      <a href={repo}>Github Repo</a>
    </div>
  )
}

export default ProjectsContainer;
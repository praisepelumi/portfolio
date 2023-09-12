import React from 'react';
import styles from './RightContainer.module.scss';

function ProjectsContainer ({projectName, info, repo}) {
  return (
    <div className={styles.projectDiv}>
      <p className={styles.projectName}>{projectName}</p>
      <p>{info}</p>
      <a href={repo} target="_blank">Github Repo</a>
    </div>
  )
}

export default ProjectsContainer;
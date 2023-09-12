import React from 'react';
import styles from './RightContainer.module.scss'

export default function Skill ({skillType}) {
  return (
    <div className={styles.skillsItem}>
      <p>{skillType}</p>
    </div>
  )
}
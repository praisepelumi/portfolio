import React from 'react';
import styles from './LeftContainer.module.scss'

function LeftContainer () {
  return (
    <div className={styles.container}>
      <div>
      <h1>Praise Emmanuel</h1>
      <h2>Software Engineer</h2>
      </div>

      <div>
        <p>
          I am Software Engineer who is passionate about solving complex problems and building accesible, inclusive, and robust applications. 
        </p>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">
            <span>i</span> 
            <span></span>
            <span>ABOUT</span>
            </a>
          </li>
          <li>
            <a href="">
            <span>ii</span> 
            <span></span>
            <span>PROJECTS</span>
            </a>
          </li>
          <li>
            <a href="">
            <span>iii</span> 
            <span></span>
            <span>SKILLS</span>
            </a>
          </li>
          <li>
            <a href="">
            <span>iv</span> 
            <span></span>
            <span>EXPERIENCE - RESUME</span>
            </a>
          </li>
       
        </ul>
      </nav>

      <div>
        <ul>
          <li><a href="">Github</a></li>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Email Me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default LeftContainer;
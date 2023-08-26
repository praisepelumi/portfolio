import React from 'react';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import styles from '../src/App.module.scss';

function App () {
  return(
    <div className={styles.container}>
      <LeftContainer className={styles.leftSide} />
      <RightContainer className={styles.rightSide}/>
    </div>
  )
}

export default App;
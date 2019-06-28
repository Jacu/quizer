import React from 'react';
import styles from './App.css';
import StartPage from './containers/StartPage/StartPage';
import Background from './components/Background/Background';

function App() {
  return (
    <div className={styles.App}>
      <Background/>
      <StartPage/>
    </div>
  );
}

export default App;

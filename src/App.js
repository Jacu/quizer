import React from 'react';
import './App.css';
import StartPage from './containers/StartPage/StartPage';
import Background from './components/Background/Background';

function App() {
  return (
    <div className='App'>
      <Background/>
      <StartPage/>
    </div>
  );
}

export default App;

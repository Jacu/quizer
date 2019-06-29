import React, { Component } from 'react';
import styles from './App.css';
import StartPage from './containers/StartPage/StartPage';
import Background from './components/Background/Background';
import { Route, Switch, Redirect } from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
  state = {
    
  }
  render() {
    const routes = (
      <Switch>
        <Route path="/quiz" component={Quiz} />
        <Route path="/" exact component={StartPage} />        
        <Redirect to="/"/>
      </Switch>
    )
    return (
      <div className={styles.App}>
        <Background />
        {routes}
      </div>
    );
  }
}
export default App;

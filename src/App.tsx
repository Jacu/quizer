import React, { Component } from 'react';
import * as styles from './App.css';
import Menu from './containers/Menu/Menu';
import Background from './components/Background/Background';
import { Route, Switch, Redirect } from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/" exact component={Menu} />
        <Redirect to="/" />
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

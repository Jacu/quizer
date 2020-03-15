import React, { Component } from 'react';
import * as styled from './styles';
import Menu from './containers/Menu/Menu';
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
      <styled.App>
        {routes}
      </styled.App>
    );
  }
}
export default App;

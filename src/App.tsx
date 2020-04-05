import React from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import Menu from './containers/Menu';
import Quiz from './containers/Quiz';
import { AppState } from "./";

interface StateProps {
  quizStarted: boolean,
  dataLoading: boolean,
}

const App: React.FC<StateProps> = ({ quizStarted, dataLoading }) =>
  <styled.App>
    {quizStarted || dataLoading ? <Quiz /> : <Menu />}
  </styled.App>

const mapStateToProps = ({quiz}: AppState): StateProps => {
  return {
    quizStarted: quiz.started,
    dataLoading: quiz.fetching,
  }
}

export default connect(mapStateToProps)(App);

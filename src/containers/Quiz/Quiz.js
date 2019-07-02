import React from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/quiz';
import Spinner from '../../components/UI/Spinner/Spinner';
import Arrow from '../../components/UI/Arrow/Arrow';

const Quiz = props => (
    <div className={styles.Quiz}>
        <Arrow disable={props.currentQuestion <= 1} direction="left" />
        {props.quizStarted ? <Redirect to="/quiz/1" /> : <Spinner />}
        {props.quizStarted ? <Route path="/quiz/:id" component={Question}/> : null}
        <Arrow disable={props.currentQuestion >= props.questionsAmount} />
    </div>
)

const mapStateToProps = state => {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        questionsAmount: state.selectedSetting.amount,
        quizStarted: state.quizStarted
    }
}

export default connect(mapStateToProps)(Quiz);
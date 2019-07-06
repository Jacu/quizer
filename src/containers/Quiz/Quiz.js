import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Arrow from '../../components/UI/Arrow/Arrow';

class Quiz extends Component {

    componentDidMount() {        
        this.props.init(this.props.url)
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <Arrow disable={this.props.currentQuestion <= 1} direction="left" />
                {this.props.quizStarted ? <Redirect to="/quiz/1" /> : <Spinner />}
                {this.props.quizStarted ? <Route path="/quiz/:id" component={Question} /> : null}
                <Arrow disable={this.props.currentQuestion >= this.props.questionsAmount} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.quiz.questions.current,
        questionsAmount: state.quiz.questions.amount,
        quizStarted: state.quiz.started,
        url: state.startPage.settings.apiURL
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: (url) => dispatch(actions.initQuiz(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
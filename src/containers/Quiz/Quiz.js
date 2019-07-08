import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Arrow from '../../components/UI/Arrow/Arrow';
import Button from '../../components/UI/Button/Button';

class Quiz extends Component {

    componentDidMount() {
        if (!this.props.ended)
            this.props.init(this.props.url)
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.Questions}>
                    <Arrow
                        disable={this.props.currentQuestion <= 1}
                        direction="left">
                    </Arrow>
                    {this.props.quizStarted ? <Redirect to="/quiz/1" /> : <Spinner />}
                    {this.props.quizStarted ? <Route path="/quiz/:id" component={Question} /> : null}
                    <Arrow
                        disable={this.props.currentQuestion >= this.props.questionsAmount}>
                    </Arrow>
                </div>
                <Button link='/summary' label={this.props.ended ? "View score" : "Submit"} onClick={this.props.end} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.quiz.questions.current,
        questionsAmount: state.quiz.questions.amount,
        quizStarted: state.quiz.started,
        url: state.startPage.settings.apiURL,
        ended: state.quiz.finished
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: (url) => dispatch(actions.initQuiz(url)),
        end: () => dispatch(actions.quizEnded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
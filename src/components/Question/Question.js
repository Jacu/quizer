import React, { Component } from 'react';
import styles from './Question.css';
import { connect } from 'react-redux';
import Answer from '../Answer/Answer';
import * as actions from '../../store/actions/quiz';
import unescape from '@favware/unescape';

class Question extends Component {
    render() {
        let allAnswers = [...this.props.question[this.props.match.params.id - 1].incorrect_answers];
        allAnswers.splice(this.props.answers[this.props.match.params.id - 1] - 1, 0, this.props.question[this.props.match.params.id - 1].correct_answer);

        const redirect = (
            Number(this.props.match.params.id) <= 0 || Number(this.props.match.params.id) > this.props.totalQuestions ? this.props.history.goBack() : null
        )
        return (
            <div className={styles.Question}>
                {redirect}
                <h1>Question {this.props.match.params.id}/{this.props.totalQuestions}</h1>
                <h3>Category: {this.props.question[this.props.match.params.id - 1].category}</h3>
                <p>{unescape(this.props.question[this.props.match.params.id - 1].question)}</p>
                <div className={styles.Answers}>
                    {
                        allAnswers.map((answer, i) => (
                            <Answer key={i}
                                answer={unescape(answer)}
                                selected={this.props.questionsPicked[this.props.match.params.id - 1] === i + 1}
                                onClick={() => this.props.pickAnswer(this.props.match.params.id - 1, i + 1)} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: [...state.quiz.questions.all],
        totalQuestions: state.quiz.questions.amount,
        answers: [...state.quiz.answers.correct],
        questionsPicked: [...state.quiz.answers.picked]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pickAnswer: (index, newPick) => dispatch(actions.pickAnswer(index, newPick))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
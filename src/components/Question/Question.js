import React, { Component } from 'react';
import styles from './Question.css';
import { connect } from 'react-redux';
import Answer from '../Answer/Answer';
import * as actions from '../../store/actions/quiz';
import unescape from '@favware/unescape';

const Question = (props) =>  {
    const {totalQuestions, questions, questionsPicked, correctAnswers, ended } = props;
    const questionId = props.match.params.id - 1;
    let allAnswers = [...questions[questionId].incorrect_answers];
    allAnswers.splice(correctAnswers[questionId] - 1, 0, questions[questionId].correct_answer);

    const redirect = (
        Number(questionId) < 0 || Number(questionId) > totalQuestions - 1 ? props.history.goBack() : null
    )
    return (
        <div className={styles.Question}>
            {redirect}
            <h1>Question {questionId + 1}/{totalQuestions}</h1>
            <h3>Category: {questions[questionId].category}</h3>
            <p>{unescape(questions[questionId].question)}</p>
            <div className={styles.Answers}>
                {
                    allAnswers.map((answer, i) => (
                        <Answer 
                            key={i}
                            answer={unescape(answer)}
                            selected={questionsPicked[questionId] === i}
                            onClick={() => props.pickAnswer(questionId, i )} 
                            ended={ended}
                            correct={correctAnswers[questionId] === i + 1}
                            />
                    ))
                }
            </div>
        </div>
    );
};

const mapStateToProps = ({quiz}) => {
    return {
        questions: [...quiz.questions.all],
        totalQuestions: quiz.questions.amount,
        correctAnswers: [...quiz.answers.correct],
        questionsPicked: [...quiz.answers.picked],
        ended: quiz.finished
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pickAnswer: (index, newPick) => dispatch(actions.pickAnswer(index, newPick))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
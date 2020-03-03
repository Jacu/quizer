import React from 'react';
import styles from './Question.css';
import { connect } from 'react-redux';
import Answer from '../Answer/Answer';
import * as actions from '../../store/actions/quiz';
import unescape from '@favware/unescape';

interface Question {
    totalQuestions, 
    questions, 
    questionsPicked, 
    correctAnswers, 
    ended
}

const Question = (props) =>  {
    const {totalQuestions, questions, questionsPicked, correctAnswers, ended } = props;
    const questionId = props.match.params.id - 1;
    const question = questions[questionId];
    const correctAnswerId = correctAnswers[questionId];
    const selectedAnswerId = questionsPicked[questionId];
    const allAnswers = [...question.incorrect_answers];
    allAnswers.splice(correctAnswerId, 0, question.correct_answer);

    const redirect = (
        Number(questionId) < 0 || Number(questionId) > totalQuestions - 1 ? props.history.goBack() : null
    )

    const handleAnswerPick = (answerId) => {
        return () => props.pickAnswer(questionId, answerId)
    }

    const score = !ended ? null :
        (<div className={styles.Score}>{correctAnswerId === selectedAnswerId ? 'GREAT!' : 'BAD LUCK'}</div>)

    return (
        <div className={styles.Question}>
            {redirect}
            <h1>Question {questionId + 1}/{totalQuestions}</h1>
            <h3>Category: {question.category}</h3>
            <p>{unescape(question.question)}</p>
            <div className={styles.Answers}>
                {
                    allAnswers.map((answer, i) => (
                        <Answer 
                            key={i}
                            answer={unescape(answer)}
                            selected={selectedAnswerId === i}
                            onClick={handleAnswerPick(i)} 
                            ended={ended}
                            correct={correctAnswerId === i}
                            />
                    ))
                }
            </div>
            {score}
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
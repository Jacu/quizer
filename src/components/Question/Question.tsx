import React from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import Answer from '../Answer/Answer';
import * as actions from '../../store/actions/quiz';
import unescape from '@favware/unescape';
import { Question as IQuiestion } from "~/store/reducers/quiz";
import { AppState } from "~/index";

interface QuestionProps {
    id: number;
}

interface StateProps {
    questions: IQuiestion[],
    totalQuestions: number,
    correctAnswers: number[],
    questionsPicked: number[],
    ended: boolean,
};

interface DispatchProps {
    pickAnswer: (index: number, newPick: number) => void,
};

type Props = StateProps & QuestionProps & DispatchProps;

const Question: React.FC<Props> = (props) => {
    const { totalQuestions, questions, questionsPicked, correctAnswers, ended } = props;

    const questionId = props.id - 1;
    const question = questions[questionId];
    const correctAnswerId = correctAnswers[questionId];
    const selectedAnswerId = questionsPicked[questionId];
    const allAnswers = [...question.incorrect_answers];
    allAnswers.splice(correctAnswerId, 0, question.correct_answer);

    const header = `Question ${questionId + 1}/${totalQuestions}`;
    const categoryLabel = `Category: ${question.category}`;
    const scoreLabel = correctAnswerId === selectedAnswerId ? 'GREAT!' : 'BAD LUCK';

    const handleAnswerPick = (answerId: number) => {
        return () => props.pickAnswer(questionId, answerId)
    }

    return (
        <styled.Question>
            <styled.QuestionHeader>{header}</styled.QuestionHeader>
            <styled.CategoryLabel>{categoryLabel}</styled.CategoryLabel>
            <p>{unescape(question.question)}</p>
            <styled.AnswersContainer>
                {allAnswers.map((answer, i) => (
                    <Answer
                        key={i}
                        answer={unescape(answer)}
                        selected={selectedAnswerId === i}
                        onClick={handleAnswerPick(i)}
                        ended={ended}
                        correct={correctAnswerId === i}
                    />
                ))}
            </styled.AnswersContainer>
            {!ended ? null
                : <styled.Score>{scoreLabel}</styled.Score>}
        </styled.Question>
    );
};

const mapStateToProps = ({ quiz }: AppState): StateProps => {
    return {
        questions: [...quiz.questions.all],
        totalQuestions: quiz.questions.amount,
        correctAnswers: [...quiz.answers.correct],
        questionsPicked: [...quiz.answers.picked],
        ended: quiz.finished,
    }
}

const mapDispatchToProps = (dispatch ): DispatchProps => {
    return {
        pickAnswer: (index, newPick) => dispatch(actions.pickAnswer(index, newPick))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
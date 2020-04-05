import React from 'react';
import * as styled from './styles';
import Score from '~/components/UI/Score';
import { IQuestion } from "~/store/reducers/quiz";

interface ISummary {
    questions: IQuestion[],
    correctAnswers: boolean[],
    score: number,
}

const Summary: React.FC<ISummary> = ({ questions, correctAnswers, score }) => {
    return (
        <styled.Summary>
            <Score score={score}/>
            {questions.map((question, questionId) =>
            <styled.AnswerContainer key={questionId} isCorrect={correctAnswers[questionId]}>
                <styled.Question>
                    {question.question}
                </styled.Question>
                <styled.CorrectAnswer>
                    {question.correct_answer}
                </styled.CorrectAnswer>
            </styled.AnswerContainer>
            )}
        </styled.Summary>
    )
};

export default Summary;
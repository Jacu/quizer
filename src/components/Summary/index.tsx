import React from 'react';
import * as styled from './styles';
import Score from '~/components/UI/Score';

interface ISummary {
    questions: {
        question: string,
        answer: string,
        isCorrect: boolean,
    }[],
    score: number,
}

const Summary: React.FC<ISummary> = ({ questions, score }) => {
    return (
        <styled.Summary>
            <Score score={score} />
            {questions.map(({ question, answer, isCorrect }, questionId) =>
                <styled.AnswerContainer key={questionId} isCorrect={isCorrect}>
                    <styled.Question> {question} </styled.Question>
                    <styled.CorrectAnswer> {answer} </styled.CorrectAnswer>
                </styled.AnswerContainer>
            )}
        </styled.Summary>
    )
};

export default Summary;
import React from 'react';
import * as styled from './styles';
import { Question as IQuiestion } from "~/store/reducers/quiz";

interface SummaryProps {
    questions: IQuiestion[],
    correctAnswers: boolean[],
}

type Props = SummaryProps;

const Summary: React.FC<Props> = ({ questions, correctAnswers }) => {

    return (
        <styled.Summary>
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
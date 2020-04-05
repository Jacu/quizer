import React from 'react';
import * as styled from './styles';
import { Question as IQuiestion } from "~/store/reducers/quiz";
import Score from '~/components/UI/Score';

interface SummaryProps {
    questions: IQuiestion[],
    correctAnswers: boolean[],
    score: number,
}

type Props = SummaryProps;

const Summary: React.FC<Props> = ({ questions, correctAnswers, score }) => {

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
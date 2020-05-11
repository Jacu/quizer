import React from 'react';
import * as styled from './styles';
import Answer from './Answer';

interface QuestionProps {
    question: string,
    category: string,
    answers: string[],
    correctId: number,
    reveal: boolean,
    selectedId?: number,
    onAnswerPicked: (answerId: number) => void,
}

const Question: React.FunctionComponent<QuestionProps> = ({ question, category, answers, correctId, reveal, onAnswerPicked, selectedId }) =>
    (
        <styled.QuestionComponent>
            <styled.CategoryLabel>{`Category: ${category}`}</styled.CategoryLabel>
            <styled.Question>{question}</styled.Question>
            <styled.AnswersContainer>
                {answers.map((answer, i) => (
                    <Answer
                        key={i}
                        answer={answer}
                        selected={(selectedId == null && reveal) || selectedId === i || (reveal && correctId === i)}
                        correct={correctId === i}
                        reveal={reveal}
                        onClick={() => onAnswerPicked(i)} />
                ))}
            </styled.AnswersContainer>
        </styled.QuestionComponent>
    );

export default Question;
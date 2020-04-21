import React from 'react';
import * as styled from './styles';
import Answer from './Answer';
import unescape from '@favware/unescape';

interface QuestionProps {
    question: string,
    category: string,
    answers: string[],
    correctId: number,
    reveal: boolean,
    selectedId?: number,
    onAnswerPicked: (answerId: number) => void,
}

const Question: React.FunctionComponent<QuestionProps> = ({ question, category, answers, correctId, reveal, onAnswerPicked, selectedId }) => {
    const categoryLabel = `Category: ${category}`;

    return (
        <styled.QuestionComponent>
            <styled.CategoryLabel>{categoryLabel}</styled.CategoryLabel>
            <styled.Question>{unescape(question)}</styled.Question>
            <styled.AnswersContainer>
                {answers.map((answer, i) => (
                    <Answer
                        key={i}
                        answer={unescape(answer)}
                        selected={(selectedId == null && reveal) || selectedId === i || (reveal && correctId === i)}
                        correct={correctId === i}
                        reveal={reveal}
                        onClick={() => onAnswerPicked(i)} />
                ))}
            </styled.AnswersContainer>
        </styled.QuestionComponent>
    );
};

export default Question;
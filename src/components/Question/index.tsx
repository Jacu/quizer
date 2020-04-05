import React from 'react';
import * as styled from './styles';
import Answer from './Answer';
import { IQuestion } from "~/store/reducers/quiz";
import unescape from '@favware/unescape';

interface QuestionProps {
    question: IQuestion,
    answers: string[],
    correctId: number,
    reveal: boolean,
    selectedId?: number,
    onAnswerPicked: (answerId: number) => void,
}

const Question: React.FunctionComponent<QuestionProps> = ({ question, answers, correctId, reveal, onAnswerPicked, selectedId }) => {
    const categoryLabel = `Category: ${question.category}`;

    return (
        <styled.QuestionComponent>
            <styled.CategoryLabel>{categoryLabel}</styled.CategoryLabel>
            <styled.Question>{unescape(question.question)}</styled.Question>
            <styled.AnswersContainer>
                {answers.map((answer, i) => (
                    <Answer
                        key={i}
                        answer={unescape(answer)}
                        isSelected={(!selectedId && reveal) || selectedId === i}
                        isCorrect={correctId === i}
                        reveal={reveal}
                        onClick={() => onAnswerPicked(i)} />
                ))}
            </styled.AnswersContainer>
        </styled.QuestionComponent>
    );
};

export default Question;
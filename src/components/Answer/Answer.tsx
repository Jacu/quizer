import React from 'react';
import * as styled from './styles';

interface AnswerProps {
    selected: boolean;
    answer: string;
    correct: boolean;
    ended: boolean;
    onClick: () => void;
}

const Answer: React.FC<AnswerProps> = ({selected, onClick, answer, correct, ended}) => {
    const handleClick = () => {
        if(!ended) onClick();
    };

    return (
    <styled.Answer
        children={answer}
        isSelected={selected}
        isCorrect={correct}
        showAnswer={ended}
        onClick={handleClick} />
    );
};

export default Answer;
import React from 'react';
import * as styled from './styles';

interface IAnswerProps {
    answer: string,
    selected: boolean,
    correct: boolean,
    reveal: boolean,
    onClick: () => void,
}

const Answer: React.FC<IAnswerProps> = ({ selected, onClick, answer, correct, reveal }) =>
    <styled.Answer
        selected={selected}
        correct={correct}
        showAnswer={reveal}
        onClick={!reveal ? onClick : undefined} >
        <styled.Checkbox showAnswer={reveal} correct={correct} selected={selected} />
        {answer}
    </styled.Answer>

export default Answer;
import React from 'react';
import * as styled from './styles';

interface AnswerProps {
    answer: string,
    isSelected: boolean,
    isCorrect: boolean,
    reveal: boolean,
    onClick: () => void,
}

const Answer: React.FC<AnswerProps> = ({isSelected, onClick, answer, isCorrect, reveal}) => 
    <styled.Answer 
        isSelected={isSelected}
        isCorrect={isCorrect}
        showAnswer={reveal} 
        onClick={!reveal ? onClick : undefined} >
        <styled.Checkbox showAnswer={reveal} isCorrect={isCorrect} isSelected={isSelected} />
        {answer} 
    </styled.Answer>

export default Answer;
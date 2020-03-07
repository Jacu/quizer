import styled from 'styled-components';

interface AnswerProps {
    isSelected: boolean,
    showAnswer: boolean,
    isCorrect: boolean,
}

export const Answer = styled.div<AnswerProps>`
    display: inline-block;
    width: 50%;
    padding: 15px;
    cursor: pointer;
    color: ${props => props.isSelected || (props.showAnswer && props.isCorrect) ? 'white' : 'inherit' };
    background: ${props => props.isSelected 
        ? props.showAnswer
            ? props.isCorrect ? 'green' : 'red'
            : `#125271` 
        : props.showAnswer
            ? props.isCorrect ? 'green' : 'inherit'
            : 'inherit' };
    :hover {
        background: #b3d8e9;
    }
`;
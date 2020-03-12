import styled from 'styled-components';

interface AnswerProps {
    // isSelected: boolean,
    // showAnswer: boolean,
    // isCorrect: boolean,
}

interface CheckboxProps {
    isSelected: boolean,
    // showAnswer: boolean,
    // isCorrect: boolean,
}

export const Answer = styled.div<AnswerProps>`
    display: flex;
    width: 100%;
    padding: 15px 0;
    cursor: pointer;
    :hover {
        background: #F2F2F2;
    }
    border: 1px solid lightgrey;
    margin: 5px 0;
    border-radius: 5px;
`;

export const Checkbox = styled.div<CheckboxProps>`
    width: 20px;
    height: 20px;
    border: ${props => props.isSelected ? '6px' : '1px'} solid ${props => props.isSelected ? '#19729f' : 'lightgrey'};
    margin: 0 10px;
    border-radius: 50%;
`;
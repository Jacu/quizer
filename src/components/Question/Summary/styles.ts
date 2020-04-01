import styled from 'styled-components';
import * as colors from '~/utils/Colors';

interface IAnswerContainer {
    isCorrect: boolean,
}

export const Summary = styled.div`
`;

export const AnswerContainer = styled.div<IAnswerContainer>`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    margin: 5px;
    background-color: ${({isCorrect}) => isCorrect ? colors.correct.light : colors.wrong.light};
    border-width: 1px;
    border-style: solid;
    border-color: ${({isCorrect}) => isCorrect ? colors.correct.base : colors.wrong.base };
    border-radius: 5px;
`;

export const Question = styled.div`
    text-align: left;
    width: 80%;
    padding: 0 15px;
`;

export const CorrectAnswer = styled.div`
    width: 20%;
    text-align: left;
    border-left: 1px solid lightgray;
    display: flex;
    padding: 0 15px;
    align-items: center;
    overflow: hidden;
`;
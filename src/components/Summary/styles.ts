import styled from 'styled-components';
import { PRIMARY_THEME, CORRECT, WRONG } from '~/utils/colors';

interface IAnswerContainerStyle {
    isCorrect: boolean,
}

export const Summary = styled.div`
    color: ${PRIMARY_THEME.BASE};
    display: flex;
    flex-direction: column;
`;

export const ScoreContainer = styled.div`
    padding: 50px 0;
    font-size: 3rem;
    font-weight: 500;
`;

export const AnswerContainer = styled.div<IAnswerContainerStyle>`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    margin: 5px;
    background-color: ${({isCorrect}) => isCorrect ? CORRECT.LIGHT : WRONG.LIGHT};
    border-width: 1px;
    border-style: solid;
    border-color: ${({isCorrect}) => isCorrect ? CORRECT.BASE : WRONG.BASE };
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
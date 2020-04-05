import styled from 'styled-components';
import { CORRECT, WRONG, GRAY, PRIMARY_THEME } from '~/utils/colors';

interface IAnswerProps {
    isSelected: boolean,
    showAnswer: boolean,
    isCorrect: boolean,
}

enum StyleState { CorrectSelected, IncorrectSelected, Selected, CorrectNotSelected, Notselected }

const getState = (props: IAnswerProps): StyleState => {
    const { isSelected, showAnswer, isCorrect} = props;
    return isSelected 
        ? showAnswer
            ? isCorrect 
                ? StyleState.CorrectSelected 
                : StyleState.IncorrectSelected
            : StyleState.Selected
        : showAnswer && isCorrect 
            ? StyleState.CorrectNotSelected
            : StyleState.Notselected
};

const answerBackgroundColor = {
    [StyleState.CorrectSelected]: CORRECT.LIGHT,
    [StyleState.IncorrectSelected]: WRONG.LIGHT,
    [StyleState.Selected]: 'transparent',
    [StyleState.CorrectNotSelected]: CORRECT.LIGHT,
    [StyleState.Notselected]: 'transparent',
}

const answerBorderColor = {
    [StyleState.CorrectSelected]: CORRECT.BASE,
    [StyleState.IncorrectSelected]: WRONG.BASE,
    [StyleState.Selected]: GRAY.BASE,
    [StyleState.CorrectNotSelected]: GRAY.BASE,
    [StyleState.Notselected]: GRAY.BASE,
}

export const Answer = styled.div<IAnswerProps>`
    display: flex;
    width: 100%;
    padding: 15px 0;
    cursor: pointer;
    background-color: ${props => answerBackgroundColor[getState(props)]};
    :hover {
        background: ${GRAY.LIGHT};
    }
    border-width: 1px;
    border-style: solid;
    border-color: ${props => answerBorderColor[getState(props)]};
    margin: 5px 0;
    border-radius: 5px;
`;

const checkboxBorderColor = {
    [StyleState.CorrectSelected]: CORRECT.BASE,
    [StyleState.IncorrectSelected]: WRONG.BASE,
    [StyleState.Selected]: PRIMARY_THEME.BASE,
    [StyleState.CorrectNotSelected]: CORRECT.BASE,
    [StyleState.Notselected]: GRAY.BASE,
}

const checkboxBorderWidth = {
    [StyleState.CorrectSelected]: '10px',
    [StyleState.IncorrectSelected]: '6px',
    [StyleState.Selected]: '6px',
    [StyleState.CorrectNotSelected]: '10px',
    [StyleState.Notselected]: '1px',
}

export const Checkbox = styled.div<IAnswerProps>`
    width: 20px;
    height: 20px;
    border-width: ${props => checkboxBorderWidth[getState(props)]};
    border-style: solid;
    border-color: ${props => checkboxBorderColor[getState(props)]};
    margin: 0 10px;
    border-radius: 50%;
`;
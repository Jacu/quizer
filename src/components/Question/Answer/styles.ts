import styled from 'styled-components';
import * as colors from '~/utils/Colors';

interface AnswerProps {
    isSelected: boolean,
    showAnswer: boolean,
    isCorrect: boolean,
}

enum StyleState { CorrectSelected, IncorrectSelected, Selected, CorrectNotSelected, Notselected }

const getState = (props: AnswerProps): StyleState => {
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
    [StyleState.CorrectSelected]: colors.correct.light,
    [StyleState.IncorrectSelected]: colors.wrong.light,
    [StyleState.Selected]: 'transparent',
    [StyleState.CorrectNotSelected]: colors.correct.light,
    [StyleState.Notselected]: 'transparent',
}

const answerBorderColor = {
    [StyleState.CorrectSelected]: colors.correct.base,
    [StyleState.IncorrectSelected]: colors.wrong.base,
    [StyleState.Selected]: colors.gray.base,
    [StyleState.CorrectNotSelected]: colors.gray.base,
    [StyleState.Notselected]: colors.gray.base,
}

export const Answer = styled.div<AnswerProps>`
    display: flex;
    width: 100%;
    padding: 15px 0;
    cursor: pointer;
    background-color: ${props => answerBackgroundColor[getState(props)]};
    :hover {
        background: ${colors.gray.light};
    }
    border-width: 1px;
    border-style: solid;
    border-color: ${props => answerBorderColor[getState(props)]};
    margin: 5px 0;
    border-radius: 5px;
`;

const checkboxBorderColor = {
    [StyleState.CorrectSelected]: colors.correct.base,
    [StyleState.IncorrectSelected]: colors.wrong.base,
    [StyleState.Selected]: colors.primaryTheme.base,
    [StyleState.CorrectNotSelected]: colors.correct.base,
    [StyleState.Notselected]: colors.gray.base,
}

const checkboxBorderWidth = {
    [StyleState.CorrectSelected]: '10px',
    [StyleState.IncorrectSelected]: '6px',
    [StyleState.Selected]: '6px',
    [StyleState.CorrectNotSelected]: '10px',
    [StyleState.Notselected]: '1px',
}

export const Checkbox = styled.div<AnswerProps>`
    width: 20px;
    height: 20px;
    border-width: ${props => checkboxBorderWidth[getState(props)]};
    border-style: solid;
    border-color: ${props => checkboxBorderColor[getState(props)]};
    margin: 0 10px;
    border-radius: 50%;
`;
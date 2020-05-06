import styled from 'styled-components';
import { CORRECT, WRONG, GRAY, PRIMARY_THEME } from '~/utils/colors';
import { AnswerStates } from "./config";

interface IAnswerProps {
    selected: boolean,
    showAnswer: boolean,
    correct: boolean,
}

const getState = (props: IAnswerProps): AnswerStates => {
    const { selected, showAnswer, correct } = props;
    if (selected) {
        if (showAnswer) {
            if (correct) {
                return AnswerStates.CorrectSelected;
            } else {
                return AnswerStates.IncorrectSelected;
            }
        } else {
            return AnswerStates.Selected;
        }
    }
    return AnswerStates.Notselected;
};

const answerBackgroundColor = {
    [AnswerStates.CorrectSelected]: CORRECT.LIGHT,
    [AnswerStates.IncorrectSelected]: WRONG.LIGHT,
    [AnswerStates.Selected]: 'transparent',
    [AnswerStates.Notselected]: 'transparent',
}

const answerBorderColor = {
    [AnswerStates.CorrectSelected]: CORRECT.BASE,
    [AnswerStates.IncorrectSelected]: WRONG.BASE,
    [AnswerStates.Selected]: GRAY.BASE,
    [AnswerStates.Notselected]: GRAY.BASE,
}

export const Answer = styled.div.attrs<IAnswerProps>(props => ({
    'data-testid': getState(props),
})) <IAnswerProps>`
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
    [AnswerStates.CorrectSelected]: CORRECT.BASE,
    [AnswerStates.IncorrectSelected]: WRONG.BASE,
    [AnswerStates.Selected]: PRIMARY_THEME.BASE,
    [AnswerStates.Notselected]: GRAY.BASE,
}

const checkboxBorderWidth = {
    [AnswerStates.CorrectSelected]: '10px',
    [AnswerStates.IncorrectSelected]: '6px',
    [AnswerStates.Selected]: '6px',
    [AnswerStates.Notselected]: '1px',
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
import React from 'react'
import * as styled from './styles'
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface INavBarProps {
    currentQuestionNumber: number,
    questionsAmount: number,
    loading: boolean,
    finished: boolean,
    onQuit: () => void,
};

const NavBar: React.FC<INavBarProps> = ({ currentQuestionNumber, questionsAmount, loading, finished, onQuit }) => {
    let counterLabel = '';
    if(loading) {
        counterLabel = 'Loading...';
    } else {
        if(questionsAmount){
            counterLabel = `Question ${currentQuestionNumber} of ${questionsAmount}`;
        }
    }
    return (
        <styled.NavBar>
            <styled.QuestionCounter>{counterLabel}</styled.QuestionCounter>
            <styled.ButtonContainer>
                <styled.Icon onClick={onQuit} icon={faHome}/>
            </styled.ButtonContainer>
        </styled.NavBar>
    );
};

export default NavBar;
import React from 'react'
import * as styled from './styles'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '~/store/actions/index';

interface DispatchProps {
    quit: () => void,
};

interface StateProps {

};

interface NavBarProps {
    currentQuestionNumber: number,
    questionsAmount: number,
    loading: boolean,
    finished: boolean,
};

type Props = DispatchProps & StateProps & NavBarProps;

const NavBar: React.FC<Props> = ({quit, currentQuestionNumber, questionsAmount, loading, finished}) => {
    const counterLabel = finished ? null : loading ? 'Loading...' : `Question ${currentQuestionNumber} of ${questionsAmount}`
    return (
    <styled.NavBar>
        <styled.QuestionCounter>{counterLabel}</styled.QuestionCounter>
        <styled.ButtonContainer>
            <Link to="/" onClick={quit}> <styled.Icon icon={faHome}/> </Link>
        </styled.ButtonContainer>
    </styled.NavBar>
);}

const mapStateToProps = ({ quiz, startPage }: AppState): StateProps => {
    return {
        // questionsAmount: quiz.questions.amount,
        // quizStarted: quiz.started,
        // quizFinished: quiz.finished,
        // ended: quiz.finished,
        // dataLoading: quiz.questions.fetching,
        // isDataAvailable: startPage.dataFetched,
    }
}

const mapDispatchToProps = (dispatch ): DispatchProps => {
    return {
        quit: () => dispatch(actions.quizQuit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
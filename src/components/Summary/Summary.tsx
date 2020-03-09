import React from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import Option from '../Option/Option';
import { faBackward, faUndo, faHome } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions';
import { AppState } from "~/index";

interface StateProps {
    finished: boolean,
    percentage: number,
    score: number,
    max: number,
}

interface DispatchProps {
    quit: () => void,
    initQuiz: () => void,
}

type Props = StateProps & DispatchProps;

const Summary: React.FC<Props> = props => {
    const handleTryAgainButton = () => {
        props.initQuiz();
    }

    const handleHomeButton = () => {
        props.quit();
    }

    return (
    <styled.Summary>        
        <styled.Container>
            <styled.Percentage>{props.percentage}%</styled.Percentage>
            <styled.Score>{props.score}/{props.max}</styled.Score>
            <styled.OptionsContainer>
                <Option link={"/quiz"} icon={faBackward} label="Review"/>
                <Option link={"/quiz"} icon={faUndo} label="Try again" onClick={handleTryAgainButton} />
                <Option link={"/"} icon={faHome} label="Home" onClick={handleHomeButton} />
            </styled.OptionsContainer>
        </styled.Container>
    </styled.Summary>
)};

const mapStateToProps = ({quiz}: AppState): StateProps => {
    return {
        finished: quiz.finished,
        percentage: quiz.score.percentage,
        score: quiz.score.correct,
        max: quiz.questions.amount,
    }
}

const mapDispatchToProps = (dispatch ): DispatchProps => {
    return {
        quit: () => dispatch(actions.quizQuit()),
        initQuiz: () => dispatch(actions.initQuiz()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary);
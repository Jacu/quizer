import React from 'react';
import * as styled from './styles';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Arrow, { ArrowDirection } from '../../components/UI/Arrow/Arrow';
import Button from '../../components/UI/Button/Button';
import { AppState } from '../../index';

interface QuizProps {
}

interface StateProps {
    currentQuestion: number,
    questionsAmount: number,
    quizStarted: boolean,
    quizFinished: boolean,
    ended: boolean,
    dataLoading: boolean,
}

interface DispatchProps {
    end: () => void,
}

type Props = QuizProps & StateProps & DispatchProps;

const Quiz: React.FC<Props> = props => {
    const loading = !(props.quizStarted || props.quizFinished) || props.dataLoading;
    const buttonLabel = props.ended ? "View score" : "Submit"

    const handleButtonClick = () => {
        if(!props.ended){
            props.end();
        }
    }
    
    return (
        <styled.Quiz>
            <styled.Questions>
                <Arrow
                    disable={props.currentQuestion <= 1}
                    direction={ArrowDirection.Left} />
                { loading ? <Spinner /> : <Route path="/quiz/:id" component={Question} />}
                <Arrow
                    disable={props.currentQuestion >= props.questionsAmount}
                    direction={ArrowDirection.Right} />
            </styled.Questions>
            <Button link='/summary' label={buttonLabel} onClick={handleButtonClick} />
        </styled.Quiz>
    )
}

const mapStateToProps = ({ quiz }: AppState): StateProps => {
    return {
        currentQuestion: quiz.questions.current,
        questionsAmount: quiz.questions.amount,
        quizStarted: quiz.started,
        quizFinished: quiz.finished,
        ended: quiz.finished,
        dataLoading: quiz.questions.fetching,
    }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        end: () => dispatch(actions.quizEnded()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
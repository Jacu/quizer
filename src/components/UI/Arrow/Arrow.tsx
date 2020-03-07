import React from 'react';
import * as styled from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../../store/actions';
import { AllActions } from '../../../store/actions/actionTypes';
import { connect } from 'react-redux';
import { AppState } from '../../../index';
import { Dispatch } from 'redux';

export enum ArrowDirection { Left, Right}

interface ArrowProps {
    direction: ArrowDirection,
    disable: boolean,
}

interface DispatchProps {
    prevQuestion: () => void,
    nextQuestion: () => void,
}

interface StateProps {
    currentQuestion: number,
}

type Props = ArrowProps & DispatchProps & StateProps;

const Arrow: React.FC<Props> = props => {
    const isLeft = props.direction === ArrowDirection.Left;
    const icon = isLeft ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />
    const link = props.disable 
        ?  `${props.currentQuestion}` 
        :  isLeft 
            ? `${props.currentQuestion - 1}` 
            : `${props.currentQuestion + 1}`

    const handleClick = () => {
        if(!props.disable) {
            if (isLeft){
                props.prevQuestion();
            } else {
                props.nextQuestion();
            }
        }
    };

    return (
        <styled.ArrowLink children={icon} to={link} onClick={handleClick} disabled={props.disable} />
    );
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        currentQuestion: state.quiz.questions.current,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<AllActions>): DispatchProps => {
    return {
        nextQuestion: () => dispatch(actions.nextQuestion()),
        prevQuestion: () => dispatch(actions.prevQuestion()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
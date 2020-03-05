import React from 'react';
import styles from './Arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as actions from '../../../store/actions/quiz';
import * as actionTypes from '../../../store/actions/actionTypes';
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

const Arrow = (props: Props) => {
    const isLeft = props.direction === ArrowDirection.Left;
    const icon = isLeft ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />
    const link = props.disable
        ? `/quiz/${props.currentQuestion}`
        : isLeft
            ? `/quiz/${props.currentQuestion - 1}`
            : `/quiz/${props.currentQuestion + 1}`;

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
        <Link to={link} className={styles.Arrow} onClick={handleClick} >
            {icon}
        </Link>
    );
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
        currentQuestion: state.quiz.questions.current,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.AllActions>): DispatchProps => {
    return {
        nextQuestion: () => dispatch(actions.nextQuestion()),
        prevQuestion: () => dispatch(actions.prevQuestion()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
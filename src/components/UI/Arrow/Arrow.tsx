import React, { Component } from 'react';
import styles from './Arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as actions from '../../../store/actions/quiz';
import { connect } from 'react-redux';

interface Arrow {

}

const Arrow = (props) => {
    const icon = props.direction === "left" ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />
    const link =
        props.disable ?
            `/quiz/${props.currentQuestion}` :
            props.direction === "left" ?
                `/quiz/${props.currentQuestion - 1}` :
                `/quiz/${props.currentQuestion + 1}`


    return (
        <Link
            to={link}
            className={styles.Arrow}
            onClick={props.disable ? null : props.direction === "left" ? props.prevQuestion : props.nextQuestion}
            //disabled={props.disable}
            >
            {icon}
        </Link>
    )

}

const mapStateToProps = state => {
    return {
        currentQuestion: state.quiz.questions.current
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextQuestion: () => dispatch(actions.nextQuestion()),
        prevQuestion: () => dispatch(actions.prevQuestion())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
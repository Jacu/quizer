import React, { Component } from 'react';
import styles from './Arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as actions from '../../../store/actions/quiz';
import { connect } from 'react-redux';

class Arrow extends Component {
    render() {

        const icon = this.props.direction === "left" ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />
        const link =
            this.props.disable ?
                `/quiz/${this.props.currentQuestion}` :
                this.props.direction === "left" ?
                    `/quiz/${this.props.currentQuestion - 1}` :
                    `/quiz/${this.props.currentQuestion + 1}`


        return (
            <Link
                to={link}
                className={styles.Arrow}
                onClick={this.props.disable ? null : this.props.direction === "left" ? this.props.prevQuestion : this.props.nextQuestion}
                disabled={this.props.disable}>
                {icon}
            </Link>
        )
    }
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
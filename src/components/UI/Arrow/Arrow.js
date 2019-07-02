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
        const link = this.props.direction === "left" ? `/quiz/${this.props.currentQuestion - 1}` : `/quiz/${this.props.currentQuestion + 1}`;

        return (
            <Link
                to={this.props.disable ? null : link}
                className={[styles.Arrow, this.props.disable === true ? styles.disabled : null].join(' ')}
                onClick={this.props.disable ? null : this.props.direction === "left" ? this.props.prevQuestion : this.props.nextQuestion}>
                {icon}
            </Link>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.currentQuestion
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextQuestion: () => dispatch(actions.nextQuestion()),
        prevQuestion: () => dispatch(actions.prevQuestion())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Arrow);
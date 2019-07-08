import React from 'react'
import styles from './Background.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Background = props => (
    <div className={styles.Background} onClick={props.reset()}>
        <Link to="/">
            <FontAwesomeIcon className={styles.icon} icon={faHome} />
        </Link>
    </div>
)

const mapStateToProps = state => {
    return {
        ended: state.quiz.finished
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reset: () => dispatch(actions.reset)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background);
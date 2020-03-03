import React from 'react'
import styles from './Background.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const Background = (props) => (
    <div className={styles.Background}>
        <Link to="/">
            {/* <FontAwesomeIcon className={styles.icon} icon={faHome} onClick={props.quit}/> */}
        </Link>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        quit: () => dispatch(actions.quizQuit()),
    }
}

export default connect(null, mapDispatchToProps)(Background);
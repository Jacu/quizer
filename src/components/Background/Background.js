import React, { Component } from 'react'
import styles from './Background.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Background extends Component {
    render() {
        return (
            <div className={styles.Background}>
                <Link to="/">
                    <FontAwesomeIcon className={styles.icon} icon={faHome} />
                </Link>
            </div>
        )
    }
}

export default Background;
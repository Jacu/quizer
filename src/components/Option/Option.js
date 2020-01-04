import React from 'react';
import styles from './Option.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Option = props => {
    return (
        <Link to={props.link} className={styles.Option}>
            <FontAwesomeIcon className={styles.icon} icon={props.icon} onClick={props.onClick} />
            <h3>{props.label}</h3>
        </Link>
    )
}


export default Option;
import React from 'react';
import styles from './Option.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Option = ({icon, link, label, onClick}) => {
    return (
        <Link to={link} className={styles.Option} onClick={onClick}>
            <FontAwesomeIcon className={styles.icon} icon={icon}/>
            <h3>{label}</h3>
        </Link>
    )
}


export default Option;
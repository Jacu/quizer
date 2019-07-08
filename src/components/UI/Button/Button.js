import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.css';

const Button = props => {
    return (
        <Link
            className={styles.Button}
            to={props.link}
            onClick={props.onClick}>
            {props.label}
        </Link>
    )
}

export default Button;
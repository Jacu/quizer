import React from 'react';
import styles from './Input.css';

const Input = props => (
    <div className={styles.Input}>
        <div className={styles.Label}>{props.label}</div>
        <select onChange={event => props.onChange(props.name, event.target.value)}>
            {props.options.map(option =>
                <option
                    key={option}
                    value={option}>
                    {option}
                </option>)}
        </select>
    </div>
)


export default Input;
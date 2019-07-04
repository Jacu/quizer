import React from 'react';
import styles from './Answer.css'

const Answer = props => (
    <div 
        className={props.selected === true ? [styles.Answer,styles.selected].join(' ') : styles.Answer}
        onClick={() => props.onClick()}>
        {props.answer}
    </div>
)

export default Answer;
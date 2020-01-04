import React from 'react';
import styles from './Answer.css'

const Answer = ({selected,onClick,answer,correct,ended}) => {    
    const className = [styles.Answer,selected ? ended ? correct ? styles.correct : styles.incorrect : styles.selected : ended ? correct ? styles.correct : '' : ''];
    return (
    <div 
        className={className.join(' ')}
        onClick={ended ? null : onClick}>
        {answer}
    </div>)
};

export default Answer;
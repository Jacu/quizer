import React from 'react';
import styles from './Summary.css';
import { connect } from 'react-redux';
import Option from '../Option/Option';
import { faBackward, faUndo, faHome } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions';

const Summary = props => {
    const handleTryAgainButton = () => {
        props.initQuiz();
    }

    const handleHomeButton = () => {
        props.quit();
    }

    return (
    <div className={styles.Summary}>        
        <div className={styles.container}>
            <h1>{props.percentage}%</h1>
            <h2>{props.score}/{props.max}</h2>
            <div className={styles.Options}>
                <Option link={"/quiz/1"} icon={faBackward} label="Review"/>
                <Option link={"/quiz/1"} icon={faUndo} label="Try again" onClick={handleTryAgainButton} />
                <Option link={"/"} icon={faHome} label="Home" onClick={handleHomeButton} />
            </div>
        </div>
    </div>
)};

const mapStateToProps = ({quiz}) => {
    return {
        finished: quiz.finished,
        percentage: quiz.score.percentage,
        score: quiz.score.correct,
        max: quiz.questions.amount,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        quit: () => dispatch(actions.quizQuit()),
        initQuiz: () => dispatch(actions.initQuiz()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary);
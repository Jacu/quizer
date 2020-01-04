import React from 'react';
import styles from './Summary.css';
import { connect } from 'react-redux';
import Option from '../Option/Option';
import { faBackward, faUndo, faHome } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actions';

const Summary = props => (
    <div className={styles.Summary}>        
        <div className={styles.container}>
            <h1>{props.percentage}%</h1>
            <h2>{props.score}/{props.max}</h2>
            <div className={styles.Options}>
                <Option link={"/quiz/1"} icon={faBackward} label="Review" onClick={""} />
                <Option link={"/quiz/1"} icon={faUndo} label="Try again" onClick={""} />
                <Option link={"/"} icon={faHome} label="Home" onClick={props.quit} />
            </div>
        </div>
    </div>
)

const mapStateToProps = state => {
    return {
        finished: state.quiz.finished,
        percentage: state.quiz.score.percentage,
        score: state.quiz.score.correct,
        max: state.quiz.questions.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        quit: () => dispatch(actions.quizQuit()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Summary);
import React from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Arrow from '../../components/UI/Arrow/Arrow';
import Button from '../../components/UI/Button/Button';
import { initialState } from '../../store/reducers/quiz';

interface Quiz {
    quizStarted: boolean,
    quizFinished: boolean,
    dataLoading: boolean,
    currentQuestion: number,
    questionsAmount: number,
    ended: boolean,
    end: () => any,
}

const Quiz: React.FC<Quiz> = (props) => {
    const loading = !(props.quizStarted || props.quizFinished) || props.dataLoading;
    
    
    return (
        <div className={styles.Quiz}>
            <div className={styles.Questions}>
                <Arrow
                    disable={props.currentQuestion <= 1}
                    direction="left">
                </Arrow>
                {loading ? <Spinner /> : <Route path="/quiz/:id" component={Question} /> }
                <Arrow
                    disable={props.currentQuestion >= props.questionsAmount}>
                </Arrow>
            </div>
            <Button link='/summary' label={props.ended ? "View score" : "Submit"} onClick={!props.ended ? props.end : null} />
        </div>
    )
}

const mapStateToProps = (state: {quiz: typeof initialState}) => {
    const { quiz } = state;
    return {
        currentQuestion: quiz.questions.current,
        questionsAmount: quiz.questions.amount,
        quizStarted: quiz.started,
        quizFinished: quiz.finished,
        ended: quiz.finished,
        dataLoading: quiz.questions.fetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        end: () => dispatch(actions.quizEnded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions/quiz';



class Quiz extends Component {
    
    

    render() {
        return (
            <div className={styles.Quiz}>                
                <Link to={`/quiz/${this.props.currentQuestion-1}`} onClick={this.props.prevQuestion} className={styles.arrow}>&lArr;</Link>                
                <Route path="/quiz/:id" component={Question}/>
                <Link to={`/quiz/${this.props.currentQuestion+1}`} onClick={this.props.nextQuestion} className={styles.arrow}>&rArr;</Link>                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions,
        currentQuestion: state.currentQuestion,
        questionsAmount: state.selectedSetting.amount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nextQuestion: () => dispatch(actions.nextQuestion()),
        prevQuestion: () => dispatch(actions.prevQuestion())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
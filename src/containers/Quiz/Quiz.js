import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import { connect } from 'react-redux';


class Quiz extends Component {
    state = {
        currentQuestion: 0
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <a className={styles.arrow} href='#/'>&lArr;</a>
                <Question
                    totalQuestions="2"
                    currentQuestion={this.state.currentQuestion}
                    category={this.props.questions[this.state.currentQuestion].category}
                    question={this.props.questions[this.state.currentQuestion].question}
                    answers={this.props.questions.incorrect_answers + this.props.questions.correct_answer} />
                <a className={styles.arrow} href='#/'>&rArr;</a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        questions: state.questions
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
        
//     };
// };


export default connect(mapStateToProps, null)(Quiz);
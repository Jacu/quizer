import React, { Component } from 'react';
import styles from './Question.css';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        let question = Number(this.props.match.params.id) <= 0 || Number(this.props.match.params.id) > this.props.totalQuestions ? this.props.history.goBack() : (
            <div>
                <h1>Question {this.props.match.params.id}/{this.props.totalQuestions}</h1>
                <h3>Category: {this.props.question[this.props.match.params.id-1].category}</h3>
                <p>{this.props.question[this.props.match.params.id-1].question}</p>
            </div>
        ) 
        return (
            <div className={styles.Question}>
                {question}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: [...state.questions],
        totalQuestions: state.selectedSetting.amount
    }
}

export default connect(mapStateToProps)(Question);
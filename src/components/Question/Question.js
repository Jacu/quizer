import React, {Component} from 'react';
import styles from './Question.css'

class Question extends Component {
    render (){
        return (
            <div className={styles.Question}>
                <h1>Question #{this.props.currentQuestion}/{this.props.totalQuestions}</h1>
                <p>Category: {this.props.category}</p>
                <p>{this.props.question}</p>
            </div>
        )
    }
}

export default Question;
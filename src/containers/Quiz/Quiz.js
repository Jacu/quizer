import React, { Component } from 'react';
import styles from './Quiz.css';
import Question from '../../components/Question/Question';
import axios from 'axios';

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        questions: [{
            category: "Entertainment: Board Games",
            type: "multiple",
            difficulty: "easy",
            question: "How many pieces are there on the board at the start of a game of chess?",
            correct_answer: "32",
            incorrect_answers: ["16", "20", "36"]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "The starting pistol of the Terrorist team in a competitive match of Counter Strike: Global Offensive is what?",
            correct_answer: "Glock-18",
            incorrect_answers: ["Tec-9", "Desert Eagle", "Dual Berretas"]
        }]
    }

    componentDidMount(){
        axios.get("https://opentdb.com/api.php?amount=10")
        .then(response => {            
            this.setState({questions: response.data.results});
            console.log(this.state);
        })
        .catch( error => {
            console.log(error);
        });
    }


    render() {
        return (
            <div className={styles.Quiz}>
                <a className={styles.arrow} href='#/'>&lArr;</a>
                <Question
                    totalQuestions="2"
                    currentQuestion={this.state.currentQuestion}
                    category={this.state.questions[this.state.currentQuestion].category}
                    question={this.state.questions[this.state.currentQuestion].question}
                    answers={this.state.questions.incorrect_answers + this.state.questions.correct_answer} />
                <a className={styles.arrow} href='#/'>&rArr;</a>
            </div>
        )
    }
}


export default Quiz;
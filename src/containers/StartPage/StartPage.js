import React, { Component } from 'react';
import styles from './StartPage.css';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions/quiz';
import { NavLink } from 'react-router-dom';

class StartPage extends Component {

    startQuiz = () => {
        this.props.startQuiz();
    }

    render() {
        return (
            <div className={styles.StartPage}>
                <h1 className={styles.Title}>Quizer</h1>
                <div className={styles.SubTitle}>
                    <p>Quiz generator with use of Trivia API opentdb.com</p>
                    <p>created by Jacek Smetek</p>
                </div>
                <div className={styles.settings}>
                    <Input label="Number of questions" options={this.props.settings.questionsCount} />
                    <Input label="Category" options={this.props.settings.categories} />
                    <Input label="Dificulity" options={this.props.settings.dificulities} />                    
                </div>
                <NavLink to="/quiz" className={styles.StartButton} onClick={this.startQuiz}>Start</NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        settings: state.quiz.settings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startQuiz: (questionsCount, category, dificulity) => dispatch(actions.startQuiz(questionsCount, category, dificulity))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(StartPage);
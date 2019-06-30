import React, { Component } from 'react';
import styles from './StartPage.css';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions/quiz';
import { NavLink } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';

class StartPage extends Component {

    startQuiz = () => {
        this.props.startQuiz(this.props.apiURL);
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        let settings = this.props.loading === true ? <Spinner /> : (
            <div className={styles.settings}>
                <Input name="amount" label="Question count" options={this.props.settings.amount} />
                <Input name="category" label="Category" options={this.props.settings.category.map(obj => obj.name)} />
                <Input name="difficulty" label="Dificulity" options={this.props.settings.difficulty} />
            </div>
        )


        return (
            <div className={styles.StartPage}>
                <h1 className={styles.Title}>Quizer</h1>
                <div className={styles.SubTitle}>
                    <p>Quiz generator with use of Trivia API opentdb.com</p>
                    <p>created by Jacek Smetek</p>
                </div>
                {settings}                
                <NavLink to="/quiz" className={styles.StartButton} onClick={this.startQuiz}>Start</NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        settings: state.settings,
        loading: state.loading,
        apiURL: state.apiURL
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => dispatch(actions.init()),
        startQuiz: (url) => dispatch(actions.startQuiz(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
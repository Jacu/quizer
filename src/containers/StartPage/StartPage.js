import React, { Component } from 'react';
import styles from './StartPage.css';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';

class StartPage extends Component {

    componentDidMount() {
        this.props.init();
    }

    render() {
        let settings = this.props.loading === true ? <Spinner /> : (
            <div className={styles.settings}>
                <Input name="amount" label="Question count" options={this.props.settings.amount} onChange={this.props.changeSetting} />
                <Input name="category" label="Category" options={this.props.settings.category.map(obj => obj.name)} onChange={this.props.changeSetting} />
                <Input name="type" label="Type" options={this.props.settings.type} onChange={this.props.changeSetting} />
                <Input name="difficulty" label="Dificulity" options={this.props.settings.difficulty} onChange={this.props.changeSetting} />
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
                <Link
                    to="/quiz/1"
                    className={styles.StartButton}
                    onClick={this.props.startQuiz}>
                    Start</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        settings: state.startPage.settings.available,
        loading: state.startPage.loading,
        apiURL: state.startPage.settings.apiURL
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => dispatch(actions.init()),
        startQuiz: () => dispatch(actions.generateURL()),
        changeSetting: (setting, value) => dispatch(actions.setSetting(setting, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
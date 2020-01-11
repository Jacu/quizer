import React, { Component } from 'react';
import styles from './StartPage.css';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

class StartPage extends Component {
    constructor(props){
        super(props);
        this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
    }

    componentDidMount() {
        this.props.init();
    }

    handleStartButtonClick() {
        this.props.generateURL();
        this.props.initQuiz();
    }

    render() {
        let settings = this.props.loading === true ? <Spinner/> : (
            <div className={styles.settings}>
                <Input name="amount" label="Question count" options={this.props.settings.amount} onChange={this.props.changeSetting} />
                <Input name="category" label="Category" options={this.props.settings.category.map(obj => obj.name)} onChange={this.props.changeSetting} />
                <Input name="type" label="Type" options={this.props.settings.type} onChange={this.props.changeSetting} />
                <Input name="difficulty" label="Dificulity" options={this.props.settings.difficulty} onChange={this.props.changeSetting} />
            </div>
        )

        return (
            <div className={styles.StartPage}>
                <div className={styles.Menu}>
                    <h1 className={styles.Title}>Quizer</h1>
                    <div className={styles.SubTitle}>
                        <p>Quiz generator with use of Trivia API opentdb.com</p>
                        <p>created by Jacek Smetek</p>
                    </div>
                    {settings}
                </div>
                <Button
                    link="/quiz/1"
                    onClick={this.handleStartButtonClick}
                    label="Start" />
            </div>
        )
    }
}

const mapStateToProps = ({startPage}) => {
    return {
        settings: startPage.settings.available,
        loading: startPage.loading,
        apiURL: startPage.settings.apiURL
    }
}

const mapDispatchToProps = dispatch => {
    return {
        init: () => dispatch(actions.init()),
        generateURL: () => dispatch(actions.generateURL()),
        initQuiz: () => dispatch(actions.initQuiz()),
        changeSetting: (setting, value) => dispatch(actions.setSetting(setting, value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
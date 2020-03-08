import React, { useEffect } from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import { AppState } from "~/index";

interface StartPageProps {
}

interface StateProps {
    settings: any, //TODO
    loading: boolean,
    apiURL: string,
}

interface DispatchProps {
    init: () => void,
    generateURL: () => void,
    initQuiz: () => void,
    changeSetting: (setting: string, value: string) => void,
}

type Props = StartPageProps & StateProps & DispatchProps;

const StartPage: React.FC<Props> = ({init, settings, loading, changeSetting, generateURL, initQuiz}) => {
    const settingInputs = loading === true ? <Spinner /> : (
        <styled.settingInputs>
            <Input name="amount" label="Question count" options={settings.amount} onChange={changeSetting} />
            <Input name="category" label="Category" options={settings.category.map(obj => obj.name)} onChange={changeSetting} />
            <Input name="type" label="Type" options={settings.type} onChange={changeSetting} />
            <Input name="difficulty" label="Dificulity" options={settings.difficulty} onChange={changeSetting} />
        </styled.settingInputs>
    );

    useEffect(() => {
        init();
    },[init]);

    const handleStartButtonClick = () => {
        generateURL();
        initQuiz();
    }

    return (
        <styled.StartPage>
            <styled.Menu>
                <styled.Title>Quizer</styled.Title>
                <styled.SubTitle>
                    <p>Quiz generator with use of Trivia API opentdb.com</p>
                    <p>created by Jacek Smetek</p>
                </styled.SubTitle>
                {settingInputs}
            </styled.Menu>
            <Button
                link="/quiz"
                onClick={handleStartButtonClick}
                label="Start" />
        </styled.StartPage>
    )
}

const mapStateToProps = ({ startPage }: AppState): StateProps => {
    return {
        settings: startPage.settings.available,
        loading: startPage.loading,
        apiURL: startPage.settings.apiURL,
    }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        init: () => dispatch(actions.init()),
        generateURL: () => dispatch(actions.generateURL()),
        initQuiz: () => dispatch(actions.initQuiz()),
        changeSetting: (setting, value) => dispatch(actions.setSetting(setting, value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
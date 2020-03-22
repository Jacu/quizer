import React, { useEffect } from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import Input from '../../components/Menu/Input/Input';
import * as actions from '../../store/actions/index';
import { ISettings } from "~/store/reducers/startPage";
import Spinner from '../../components/UI/Spinner/Spinner';
import { AppState } from "~/index";
import { IFontSize } from '~/components/UI/Tile/Tile';

interface StartPageProps {
}

interface StateProps {
    settings: ISettings,
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

const StartPage: React.FC<Props> = ({ init, settings, loading, changeSetting, generateURL, initQuiz }) => {
        useEffect(() => {
            init();
        }, [init]);

    const handleStartButtonClick = () => {
        generateURL();
        initQuiz();
    }

    const handleOptionChange = (settingName: string, selectedValue: string) => {
        changeSetting(settingName,selectedValue)
    }

    return (
        <styled.StartPage>
            <styled.Menu>
                <styled.Title>Quizer</styled.Title>
                <styled.SubTitle>
                    <p>Quiz generator with use of Trivia API opentdb.com</p>
                    <p>created by Jacek Smetek</p>
                </styled.SubTitle>
                {loading === true ? <Spinner /> : (  // TODO Optimize below
                    <styled.settingInputs>
                        <Input
                            label="Question count"
                            values={settings.amount.values}
                            fontSize={IFontSize.Big}
                            selected={settings.amount.selected}
                            onSelect={(value) => handleOptionChange("amount",value)} />
                        <Input
                            label="Category"
                            values={settings.category.values.map(obj => obj.name)}
                            fontSize={IFontSize.Small}
                            selected={settings.category.selected}
                            onSelect={(value) => handleOptionChange("category",value)} />
                        <Input
                            label="Type"
                            values={settings.type.values}
                            selected={settings.type.selected}
                            onSelect={(value) => handleOptionChange("type",value)} />
                        <Input
                            label="Dificulity"
                            values={settings.difficulty.values}
                            selected={settings.difficulty.selected}
                            onSelect={(value) => handleOptionChange("difficulty",value)} />
                    </styled.settingInputs>
                )}
            </styled.Menu>
            {!loading ? <styled.Button to="/quiz" onClick={handleStartButtonClick}> Start </styled.Button> : null}
        </styled.StartPage>
    )
}

const mapStateToProps = ({ startPage }: AppState): StateProps => {
    return {
        settings: startPage.settings,
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
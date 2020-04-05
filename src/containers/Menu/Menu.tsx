import React, { useEffect } from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { ISettings, Category } from "~/store/reducers/startPage";
import Spinner from '../../components/UI/Spinner/Spinner';
import { AppState } from "~/index";
import SettingPanel from '~/components/SettingPanel';

interface StartPageProps {
}

interface StateProps {
    settings: ISettings,
    loading: boolean,
    apiURL: string,
    dataAvailable: boolean,
}

interface DispatchProps {
    init: () => void,
    generateURL: () => void,
    initQuiz: () => void,
    setQuestionAmount: (value: string) => void,
    setQuestionCategory: (value: Category) => void,
    setQuestionType: (value: string) => void,
    setQuestionDifficulty: (value: string) => void,
}

type Props = StartPageProps & StateProps & DispatchProps;

const StartPage: React.FC<Props> = (props) => {
    const { init, settings, loading, generateURL, initQuiz } = props;
    const { setQuestionAmount, setQuestionCategory, setQuestionType, setQuestionDifficulty } = props;
    const {amount, category, difficulty, type } = settings;

    useEffect(() => {
        if(!props.dataAvailable){
            console.log('init');
            init();
        }
    }, [init]);

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
                {loading ? <styled.Spinner><Spinner/></styled.Spinner>
                    : <SettingPanel 
                        amount={amount}
                        onAmountChange={setQuestionAmount}
                        category={category}
                        onCategoryChange={setQuestionCategory}
                        difficulty={difficulty}
                        onDifficultyChange={setQuestionDifficulty}
                        type={type}
                        onTypeChange={setQuestionType} /> }
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
        dataAvailable: startPage.dataFetched,
    }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        init: () => dispatch(actions.init()),
        generateURL: () => dispatch(actions.generateURL()),
        initQuiz: () => dispatch(actions.initQuiz()),
        setQuestionAmount: (newAmount) => dispatch(actions.setQuestionAmount(newAmount)),
        setQuestionCategory: (newCategory) => dispatch(actions.setQuestionCategory(newCategory)),
        setQuestionType: (newType) => dispatch(actions.setQuestionType(newType)),
        setQuestionDifficulty: (newDifficulty) => dispatch(actions.setQuestionDifficulty(newDifficulty)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
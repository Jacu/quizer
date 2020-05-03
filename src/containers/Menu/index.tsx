import React, { useEffect, useRef } from 'react';
import * as styled from './styles';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import * as actions from '../../store/actions/index';
import { StartPageActions } from '../../store/actions/actionTypes';
import { ISettings, Category } from "~/store/reducers/startPage";
import Spinner from '~/components/UI/Spinner';
import { AppState } from "~/index";
import SettingPanel from '~/components/SettingPanel';
import KEYS from "~/utils/keys";
import Button from "~/components/UI/Button";

interface IStateProps {
    settings: ISettings,
    loading: boolean,
    apiURL: string,
    dataAvailable: boolean,
}

interface IDispatchProps {
    init: () => void,
    generateURL: () => void,
    initQuiz: () => void,
    setQuestionQuantity: (value: number) => void,
    setQuestionCategory: (value: Category) => void,
    setQuestionType: (value: string) => void,
    setQuestionDifficulty: (value: string) => void,
}

const StartPage: React.FC<IStateProps & IDispatchProps> = (props) => {
    const { init, settings, loading, generateURL, initQuiz, dataAvailable } = props;
    const { setQuestionQuantity, setQuestionCategory, setQuestionType, setQuestionDifficulty } = props;
    const {amount, category, difficulty, type } = settings;
    const startPageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        !dataAvailable && init();
    }, [init, dataAvailable]);

    useEffect(() => {
        if (startPageRef?.current) {
            startPageRef.current.focus();
        }
    }, [startPageRef]);

    const handleStartButtonClick = () => {
        generateURL();
        initQuiz();
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === KEYS.ENTER) {
            handleStartButtonClick();
        }
    };

    return (
        <styled.StartPage tabIndex={0} onKeyDown={handleKeyDown} ref={startPageRef}>
            <styled.Menu>
                <styled.Title>Quizer</styled.Title>
                <styled.SubTitle>
                    <p>Quiz generator with use of Trivia API opentdb.com</p>
                    <p>created by Jacek Smetek</p>
                </styled.SubTitle>
                {loading ? <styled.Spinner><Spinner/></styled.Spinner>
                    : <SettingPanel 
                        amount={amount}
                        onQuantityChange={setQuestionQuantity}
                        category={category}
                        onCategoryChange={setQuestionCategory}
                        difficulty={difficulty}
                        onDifficultyChange={setQuestionDifficulty}
                        type={type}
                        onTypeChange={setQuestionType} /> }
            </styled.Menu>
            {!loading && <Button uppercase bold size={2} label={'Start'} onClick={handleStartButtonClick}/>}
        </styled.StartPage>
    )
}

const mapStateToProps = ({ startPage }: AppState): IStateProps => {
    return {
        settings: startPage.settings,
        loading: startPage.loading,
        apiURL: startPage.settings.apiURL,
        dataAvailable: startPage.dataFetched,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState,null,StartPageActions>): IDispatchProps => {
    return {
        init: () => dispatch(actions.init()),
        generateURL: () => dispatch(actions.generateURL()),
        initQuiz: () => dispatch(actions.initQuiz()),
        setQuestionQuantity: (newAmount) => dispatch(actions.setQuestionQuantity(newAmount)),
        setQuestionCategory: (newCategory) => dispatch(actions.setQuestionCategory(newCategory)),
        setQuestionType: (newType) => dispatch(actions.setQuestionType(newType)),
        setQuestionDifficulty: (newDifficulty) => dispatch(actions.setQuestionDifficulty(newDifficulty)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
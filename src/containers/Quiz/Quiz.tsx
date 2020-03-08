import React, { useState } from 'react';
import * as styled from './styles';
import Question from '../../components/Question/Question';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Arrow, { ArrowDirection } from '../../components/UI/Arrow/Arrow';
import Button from '../../components/UI/Button/Button';
import { AppState } from '../../index';

interface QuizProps {
}

interface StateProps {
    questionsAmount: number,
    quizStarted: boolean,
    quizFinished: boolean,
    ended: boolean,
    dataLoading: boolean,
    isDataAvailable: boolean,
}

interface DispatchProps {
    end: () => void,
}

type Props = QuizProps & StateProps & DispatchProps;

const Quiz: React.FC<Props> = props => {
    const [questionNumber,setQuestionNumber] = useState(1);
    const loading = !(props.quizStarted || props.quizFinished) || props.dataLoading;
    const buttonLabel = props.ended ? "View score" : "Submit";

    const handleButtonClick = () => {
        if(!props.ended){
            props.end();
        }
    }

    const handleNextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        console.log('questionNumber',questionNumber);
    }

    const handlePrevQuestion = () => {
        setQuestionNumber(questionNumber - 1);
        console.log('questionNumber',questionNumber);
    }
    
    return (
        <styled.Quiz>
            {!props.isDataAvailable ? <Redirect to="/" /> : null}
            <styled.Questions>
                <Arrow
                    disable={questionNumber <= 1}
                    direction={ArrowDirection.Left} 
                    onClick={handlePrevQuestion} />
                { loading 
                    ? <Spinner /> 
                    : <Question id={questionNumber} />}
                <Arrow
                    disable={questionNumber >= props.questionsAmount}
                    direction={ArrowDirection.Right} 
                    onClick={handleNextQuestion} />
            </styled.Questions>
            <Button link='/summary' label={buttonLabel} onClick={handleButtonClick} />
        </styled.Quiz>
    )
}

const mapStateToProps = ({ quiz, startPage }: AppState): StateProps => {
    return {
        questionsAmount: quiz.questions.amount,
        quizStarted: quiz.started,
        quizFinished: quiz.finished,
        ended: quiz.finished,
        dataLoading: quiz.questions.fetching,
        isDataAvailable: startPage.dataFetched,
    }
}

const mapDispatchToProps = (dispatch ): DispatchProps => {
    return {
        end: () => dispatch(actions.quizEnded()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
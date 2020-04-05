import React, { useState } from 'react';
import * as styled from './styles';
import Question from '../../components/Question/Question';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import NavBar from "../../components/NavBar/NavBar";
import Button from '../../components/UI/Button/Button';
import { AppState } from '../../index';
import Summary from "~/components/Question/Summary/Summary";
import { Question as IQuiestion } from "~/store/reducers/quiz";

interface QuizProps {
}

interface StateProps {
    questions: IQuiestion[],
    quizStarted: boolean,
    dataLoading: boolean,
    isDataAvailable: boolean,
}

interface DispatchProps {
    end: () => void,
    initQuiz: () => void,
}

type Props = QuizProps & StateProps & DispatchProps;

const Quiz: React.FC<Props> = props => {
    const [finished, setFinished] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);
    const questionId = questionNumber - 1;
    const [selectedId, setSelectedId] = useState(-1);
    const question = props.questions[questionId];

    let answers: string[] = [];
    const questionsAmount = props.questions.length;
    const correctAnswerId = question?.correctAnswerId;
    const score = correctAnswers.reduce((prev,curr) => curr ? prev + 1 : prev, 0) / questionsAmount * 100;

    const [inRevealMode, setInRevealMode] = useState(false);
    const buttonLabel = finished ? 'Try Again!' : inRevealMode ? "Next" : "Check";
    const loading = !(props.quizStarted || finished) || props.dataLoading;

    if(!props.isDataAvailable) {
        return <Redirect to="/" />
    };

    if (question) {
        answers = [...question.incorrect_answers];
        answers.splice(correctAnswerId, 0, question.correct_answer);
    }

    const resetSettings = () => {
        setQuestionNumber(1);
        setCorrectAnswers([]);
        setFinished(false);
        setInRevealMode(false)
        props.initQuiz();
    }

    const handleButtonClick = () => {
        if (finished) {
            resetSettings();
        } else if (inRevealMode) {
            const isLastQuestion = questionNumber === props.questions.length;
            setSelectedId(-1);
            setFinished(isLastQuestion);
            setQuestionNumber(isLastQuestion ? questionNumber : questionNumber  + 1);
            setInRevealMode(false);
        } else {
            const isCorrect = selectedId === correctAnswerId
            setCorrectAnswers([...correctAnswers, isCorrect])
            setInRevealMode(true);
        };
    }

    const handleAnswerPicked = (selectedAnswerId: number) => {
        setSelectedId(selectedAnswerId);
    }

    return (
        <styled.Quiz finished={finished}>
            {loading ? <Spinner /> :
                !finished
                    ? <Question
                        question={props.questions[questionId]}
                        reveal={inRevealMode}
                        answers={answers}
                        correctId={correctAnswerId}
                        onAnswerPicked={handleAnswerPicked}
                        selectedId={selectedId} />
                    : <Summary score={score} questions={props.questions} correctAnswers={correctAnswers}  />}
            <Button label={buttonLabel} onClick={handleButtonClick} />
            <NavBar 
                currentQuestionNumber={questionNumber}
                questionsAmount={questionsAmount}
                loading={props.dataLoading}
                finished={finished} />
        </styled.Quiz>
    )
}

const mapStateToProps = ({ quiz, startPage }: AppState): StateProps => {
    return {
        questions: quiz.questions,
        quizStarted: quiz.started,
        dataLoading: quiz.fetching,
        isDataAvailable: startPage.dataFetched,
    }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        end: () => dispatch(actions.quizEnded()),
        initQuiz: () => dispatch(actions.initQuiz()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
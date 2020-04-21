import React, { useState, useRef, useEffect } from 'react';
import * as styled from './styles';
import Question from '../../components/Question';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as actions from '../../store/actions/index';
import { QuizActions } from '../../store/actions/actionTypes';
import Spinner from '../../components/UI/Spinner';
import NavBar from "~/components/NavBar";
import Button from '../../components/UI/Button';
import { AppState } from '../../index';
import Summary from "~/components/Summary";
import { IQuestion } from "~/store/reducers/quiz";
import KEYS from "~/utils/keys";

interface StateProps {
    questions: IQuestion[],
    quizStarted: boolean,
    dataLoading: boolean,
    isDataAvailable: boolean,
}

interface DispatchProps {
    end: () => void,
    initQuiz: () => void,
    quit: () => void,
}

const Quiz: React.FC<StateProps & DispatchProps> = props => {
    const [finished, setFinished] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [correctAnswers, setCorrectAnswers] = useState<boolean[]>([]);
    const questionId = questionNumber - 1;
    const [selectedId, setSelectedId] = useState<number>();
    const question = props.questions[questionId];
    const quizRef = useRef<HTMLDivElement>(null);

    let answers: string[] = [];
    const questionsAmount = props.questions.length;
    const correctAnswerId = question?.correctAnswerId;
    const score = correctAnswers.reduce((prev, curr) => curr ? prev + 1 : prev, 0) / questionsAmount * 100;

    const [inRevealMode, setInRevealMode] = useState(false);
    const buttonLabel = finished ? 'Try Again!' : inRevealMode ? "Next" : "Check";
    const loading = !(props.quizStarted || finished) || props.dataLoading;

    useEffect(() => {
        if (quizRef?.current) {
            quizRef.current!.focus();
        }
    }, [quizRef]);

    if (!props.isDataAvailable) {
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
            setSelectedId(undefined);
            setFinished(isLastQuestion);
            setQuestionNumber(isLastQuestion ? questionNumber : questionNumber + 1);
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const isBooleanQuestion = answers.length <= 2;
        console.log(e.key);
        
        if (!loading) {
            switch (e.key) {
                case KEYS.ENTER:
                    handleButtonClick();
                    break;
                case KEYS.ESCAPE:
                    props.quit();
                    break;
                case KEYS.ARROW_UP:
                    if (!inRevealMode && selectedId != null && selectedId > 0) {
                        setSelectedId(selectedId - 1);
                        break;
                    }
                    !inRevealMode &&setSelectedId(isBooleanQuestion ? 1 : 3);
                    break;
                case KEYS.ARROW_DOWN:
                    if (!inRevealMode &&selectedId != null && (isBooleanQuestion ? selectedId < 1 : selectedId < 3)) {
                        setSelectedId(selectedId + 1);
                        break;
                    }
                    !inRevealMode && setSelectedId(0);
                    break;
                case KEYS.ONE:
                    !inRevealMode && setSelectedId(0);
                    break;
                case KEYS.TWO:
                    !inRevealMode && setSelectedId(1);
                    break;
                case KEYS.THREE:
                    !isBooleanQuestion && !inRevealMode && setSelectedId(2);
                    break;
                case KEYS.FOUR:
                    !isBooleanQuestion && !inRevealMode && setSelectedId(3);
                    break;
                default:
                    break;
            }
        }
    };

    const getContent = () => {
        if (loading) {
            return <Spinner />
        } else if (finished) {
            return <Summary 
                score={score} 
                questions={props.questions.map((q,i) => ({question: q.question, answer: q.correct_answer, isCorrect: correctAnswers[i]}))} />
        }
        const currentQuestion = props.questions[questionId];
        return <Question
            question={currentQuestion.question}
            category={currentQuestion.category}
            reveal={inRevealMode}
            answers={answers}
            correctId={correctAnswerId}
            onAnswerPicked={handleAnswerPicked}
            selectedId={selectedId} />
    }

    return (
        <styled.Quiz finished={finished} tabIndex={0} onKeyDown={handleKeyDown} ref={quizRef}>
            {getContent()}
            <Button label={buttonLabel} onClick={handleButtonClick} />
            <NavBar
                currentQuestionNumber={questionNumber}
                questionsAmount={questionsAmount}
                loading={props.dataLoading}
                onQuit={props.quit}
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

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, null, QuizActions>): DispatchProps => {
    return {
        end: () => dispatch(actions.endQuiz()),
        initQuiz: () => dispatch(actions.initQuiz()),
        quit: () => dispatch(actions.quizQuit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
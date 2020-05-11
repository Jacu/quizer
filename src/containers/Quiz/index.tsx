import React, { useState, useRef, useEffect } from 'react';
import * as styled from './styles';
import Question from '../../components/Question';
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
    const noQuestionsFound = Boolean(!props.questions.length);

    let answers: string[] = [];
    const questionsAmount = props.questions.length;
    const correctAnswerId = question?.correctAnswerId;
    const score = correctAnswers.reduce((prev, curr) => curr ? prev + 1 : prev, 0) / questionsAmount * 100;

    const [inRevealMode, setInRevealMode] = useState(false);
    const buttonLabel = noQuestionsFound ? 'Back' : finished ? 'Try Again!' : inRevealMode ? "Next" : "Check";
    const loading = !(props.quizStarted || finished) || props.dataLoading;

    useEffect(() => {
        if (quizRef?.current) {
            quizRef.current!.focus();
        }
    }, [quizRef]);

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
        if (noQuestionsFound) {
            props.end();
        } else if (finished) {
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
        if (!loading) {
            switch (e.key) {
                case KEYS.ENTER:
                    handleButtonClick();
                    break;
                case KEYS.ESCAPE:
                    props.quit();
                    break;
                case KEYS.ARROW_UP:
                    if (!inRevealMode) {
                        if (selectedId != null && selectedId > 0) {
                            setSelectedId(selectedId - 1);
                        } else {
                            setSelectedId(answers.length - 1)
                        }
                    }
                    break;
                case KEYS.ARROW_DOWN:
                    if (!inRevealMode) {
                        if (selectedId != null && selectedId < answers.length - 1) {
                            setSelectedId(selectedId + 1);
                        } else {
                            setSelectedId(0);
                        }
                    }
                    break;
                default:
                    if (!inRevealMode && !isNaN(+e.key)) {
                        const selectedIdFromKeyDown = +e.key - 1;
                        selectedIdFromKeyDown <= answers.length - 1 && setSelectedId(selectedIdFromKeyDown);
                    }
                    break;
            }
        }
    };

    function getContent() {
        if (loading) {
            return <Spinner />
        } else if (noQuestionsFound) {
            return <div>No questions found, please change your criteria</div>
        } else if (finished) {
            return <Summary
                score={score}
                questions={props.questions.map((q, i) => ({ question: q.question, answer: q.correct_answer, isCorrect: correctAnswers[i] }))} />
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
            <styled.ButtonContainer>
                <Button label={buttonLabel} onClick={handleButtonClick} />
            </styled.ButtonContainer>
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
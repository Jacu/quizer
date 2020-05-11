import * as actionTypes from '../actions/actionTypes';
import he from 'he';

export interface IQuestion {
    category: string,
    type: ("multiple" | "boolean"),
    difficulty: ("easy" | "medium" | "hard"),
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    correctAnswerId: number,
}

export interface QuizState {
    started: boolean,
    fetching: boolean,
    questions: IQuestion[],
};

const initialState: QuizState = {
    started: false,
    fetching: false,
    questions: [],
}

const shuffleAnswers = (state: QuizState, action: actionTypes.shuffleAnswers): QuizState => {
    const { questions } = state;
    const questionsWithAnswerId: IQuestion[] = [...questions];
    questions.forEach((question, i) => {
        let correctAnswerId = -1;
        const answersAmmount = question.incorrect_answers.length + 1;
        const isBoolType = answersAmmount === 2;
        if (isBoolType) {
            correctAnswerId = question.correct_answer === "True" ? 0 : 1;
        } else {
            correctAnswerId = Math.floor(Math.random() * answersAmmount);
        }
        questionsWithAnswerId[i].correctAnswerId = correctAnswerId;
    });
    return { ...state, questions: questionsWithAnswerId }
}

const fetchQuestionsStart = (state: QuizState, action: actionTypes.fetchQuestionsStart): QuizState => {
    return { ...state, fetching: true };
}

const fetchQuestionsSuccess = (state: QuizState, action: actionTypes.fetchQuestionsSuccess): QuizState => {
    const questions = action.questions.map(q => (
        {
            ...q,
            category: he.decode(q.category),
            question: he.decode(q.question),
            correct_answer: he.decode(q.correct_answer),
            incorrect_answers: q.incorrect_answers.map(incorrectAnswear => he.decode(incorrectAnswear)),
        }
    ));
    return { ...state, questions, fetching: false };
}

const fetchQuestionsFail = (state: QuizState, action: actionTypes.fetchQuestionsFail<any>): QuizState => {
    console.log(action.error)
    return { ...state, fetching: false };
}

const quizStarted = (state: QuizState, action: actionTypes.quizStarted): QuizState => {
    return { ...state, started: true }
}

const quizEnded = (state: QuizState, action: actionTypes.endQuiz): QuizState => {
    return { ...state, started: false }
}

const quizQuit = (state: QuizState, action: actionTypes.quizQuit): QuizState => {
    return { ...state, started: false }
}

const reset = (state: QuizState, action: actionTypes.resetQuiz): QuizState => {
    return initialState;
}

const reducer = (state = initialState, action: actionTypes.QuizActions): QuizState => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_START: return fetchQuestionsStart(state, action);
        case actionTypes.FETCH_QUESTIONS_SUCCESS: return fetchQuestionsSuccess(state, action);
        case actionTypes.FETCH_QUESTIONS_FAIL: return fetchQuestionsFail(state, action);
        case actionTypes.QUIZ_STARTED: return quizStarted(state, action);
        case actionTypes.SHUFFLE_ANSWERS: return shuffleAnswers(state, action);
        case actionTypes.QUIZ_ENDED: return quizEnded(state, action);
        case actionTypes.QUIZ_QUIT: return quizQuit(state, action);
        case actionTypes.RESET_QUIZ: return reset(state, action);
        default: return state;
    }
}

export default reducer;
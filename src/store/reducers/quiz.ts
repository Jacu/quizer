import * as actionTypes from '../actions/actionTypes';

export interface Question {
    category: string,
    type: ("multiple" | "boolean"),
    difficulty: ("easy" | "medium" | "hard"),
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
}

export interface QuizState {
    started: boolean,
    finished: boolean,
    questions: {
        all: Question[],
        current: number,
        amount: number,
        fetching: boolean,
    },
    answers: {
        correct: number[];
        picked: number[];
    },
    score: {
        percentage: number,
        correct: number,
    }
};

const initialState: QuizState = {
    started: false,
    finished: false,
    questions: {
        all: [{
            category: "Entertainment: Board Games",
            type: "multiple",
            difficulty: "easy",
            question: "How many pieces are there on the board at the start of a game of chess?",
            correct_answer: "32",
            incorrect_answers: ["16", "20", "36"]
        }],
        current: 1,
        amount: 1,
        fetching: true
    },
    answers: {
        correct: [1],
        picked: [-1]
    },
    score: {
        percentage: -1,
        correct: 0
    }
}

const shuffleAnswers = (state: QuizState, action) => {
    const { questions } = state;
    let shuffled: any[] = [];
    for (const question in questions.all) {
        const currentQuestion = questions.all[question]; 
        const answersAmmount = currentQuestion.incorrect_answers.length + 1;
        const isBoolType = answersAmmount === 2;
        if (isBoolType){
            shuffled.push(currentQuestion.correct_answer === "True" ? 0 : 1);
        } else {
            shuffled.push(Math.floor(Math.random() * answersAmmount));
        }
    }
    return { ...state, answers: { correct: shuffled, picked: shuffled.map(() => -1) } }
}

const fetchQuestionsStart = (state: QuizState, action) => {
    return { ...state, questions: { ...state.questions, fetching: true }}
}

const fetchQuestionsSuccess = (state: QuizState, action) => {
    return { ...state, questions: { ...state.questions, all: action.questions, fetching: false, amount: action.questions.length } }
}

const fetchQuestionsFail = (state: QuizState, action) => {
    console.log(action.error)
    return { ...state, questions: { ...state.questions, fetching: false } };
}

const quizStarted = (state = initialState, action) => {
    return { ...state, questions: { ...state.questions, current: 1 }, started: true, score: { percentage: -1, correct: 0 } }
}

const nextQuestion = (state = initialState, action) => {
    return { ...state, questions: { ...state.questions, current: Math.min(++state.questions.current, Number(state.questions.amount)) } };
}

const prevQuestion = (state = initialState, action) => {
    return { ...state, questions: { ...state.questions, current: Math.max(--state.questions.current, 0) } };
}

const pickAnswer = (state, action) => {
    state.answers.picked[action.index] = action.answer;
    return { ...state };
}

const quizEnded = (state, action) => {
    return { ...state, finished: true, started: false, questions:{ ...state.questions, current: 1 }}
}

const quizQuit = (state, action) => {
    return { ...state, finished: false, started: false}
}

const calculateScore = (state: QuizState, action: actionTypes.calculateScore): QuizState => {
    const numberOfCorrectAnswers = state.answers.correct.reduce((prevV, currentV, index) => currentV === state.answers.picked[index] ? prevV + 1 : prevV, 0);
    const percentage = Math.round((numberOfCorrectAnswers / state.questions.amount) * 100);
    return { ...state, score: { percentage: percentage, correct: numberOfCorrectAnswers } };
}

const reset = (state: QuizState, action: actionTypes.resetQuiz): QuizState => {
    return initialState;
}

const reducer = (state = initialState, action: actionTypes.AllActions): QuizState => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_START: return fetchQuestionsStart(state, action);
        case actionTypes.FETCH_QUESTIONS_SUCCESS: return fetchQuestionsSuccess(state, action);
        case actionTypes.FETCH_QUESTIONS_FAIL: return fetchQuestionsFail(state, action);
        case actionTypes.QUIZ_STARTED: return quizStarted(state, action);
        case actionTypes.SHUFFLE_ANSWERS: return shuffleAnswers(state, action);
        case actionTypes.PICK_ANSWER: return pickAnswer(state, action);
        case actionTypes.NEXT_QUESTION: return nextQuestion(state, action);
        case actionTypes.PREV_QUESTION: return prevQuestion(state, action);
        case actionTypes.QUIZ_ENDED: return quizEnded(state, action);
        case actionTypes.QUIZ_QUIT: return quizQuit(state, action);
        case actionTypes.CALCULATE_SCORE: return calculateScore(state, action);
        case actionTypes.RESET_QUIZ: return reset(state, action);
        default: return state;
    }
}

export default reducer;
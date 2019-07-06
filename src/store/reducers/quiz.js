import * as actionTypes from '../actions/actionTypes';

const initialState = {
    started: false,
    questions: {
        all: [{
            category: "Entertainment: Board Games",
            type: "multiple",
            difficulty: "easy",
            question: "How many pieces are there on the board at the start of a game of chess?",
            correct_answer: "32",
            incorrect_answers: ["16", "20", "36"]
        }], // questions should be fetched from apiURL with this structure        
        current: 1,
        amount: 1,
        fetching: true
    },
    answers: {
        correct: [1],
        picked: [-1]
    }
}

const shuffleAnswers = (state, action) => {
    let shuffled = [];
    for (const question in state.questions.all) {
        const answersAmmount = state.questions.all[question].incorrect_answers.length + 1;
        shuffled.push(Math.floor(Math.random() * answersAmmount) + 1);
    }
    return { ...state, answers: { correct: shuffled, picked: shuffled.map(() => -1) } }
}

const fetchQuestionsStart = (state, action) => {
    return { ...state, questions: { ...state.questions, fetching: true } }
}

const fetchQuestionsSuccess = (state, action) => {
    return { ...state, questions: { ...state.questions, all: action.questions, fetching: false, amount: action.questions.length  } }
}

const fetchQuestionsFail = (state, action) => {
    console.log(action.error)
    return { ...state, questions: { ...state.questions, fetching: false } };
}

const quizStarted = (state, action) => {
    return { ...state, questions: {...state.questions, current: 1}, started: true }
}

const nextQuestion = (state, action) => {
    return { ...state, questions: { ...state.questions, current: Math.min(++state.questions.current, Number(state.questions.amount)) } };
}

const prevQuestion = (state, action) => {
    return { ...state, questions: { ...state.questions, current: Math.max(--state.questions.current, 0) } };
}

const pickAnswer = (state, action) => {
    state.answers.picked[action.index] = action.answer;
    return { ...state };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_START: return fetchQuestionsStart(state, action);
        case actionTypes.FETCH_QUESTIONS_SUCCESS: return fetchQuestionsSuccess(state, action);
        case actionTypes.FETCH_QUESTIONS_FAIL: return fetchQuestionsFail(state, action);
        case actionTypes.QUIZ_STARTED: return quizStarted(state, action);
        case actionTypes.SHUFFLE_ANSWERS: return shuffleAnswers(state, action);
        case actionTypes.PICK_ANSWER: return pickAnswer(state, action);
        case actionTypes.NEXT_QUESTION: return nextQuestion(state, action);
        case actionTypes.PREV_QUESTION: return prevQuestion(state, action);
        default: return state;
    }
}

export default reducer;
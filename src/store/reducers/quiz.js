import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    settings: {
        amount: ["5", "10", "15", "20", "50"],
        category: [
            {
                name: 'Any Category',
                id: 0
            }
        ],
        difficulty: ['Any Dificulity', 'Easy', 'Medium', 'Hard'],
        type: ['Any Type', 'Multiple Choice', 'True / False']
    },
    selectedSetting: {
        amount: "5",
        category: 'Any Category',
        difficulty: 'Any Dificulity',
        type: 'Any Type'
    },
    apiURL: "https://opentdb.com/api.php?amount=5",
    questions:
        [{
            category: "Entertainment: Board Games",
            type: "multiple",
            difficulty: "easy",
            question: "How many pieces are there on the board at the start of a game of chess?",
            correct_answer: "32",
            incorrect_answers: ["16", "20", "36"]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "The starting pistol of the Terrorist team in a competitive match of Counter Strike: Global Offensive is what?",
            correct_answer: "Glock-18",
            incorrect_answers: ["Tec-9", "Desert Eagle", "Dual Berretas"]
        }]
}

const setSetting = (state, action) => {
    return { ...state, selectedSetting: { ...state.selectedSetting, ...action.selectedSetting } };
}

const generateApiUrl = (state, action) => {

    const category = state.settings.category.find(category => category.name === state.selectedSetting.category).id;
    const amount = state.selectedSetting.amount;
    const difficultyValues = ["0", "easy", "medium", "hard"]
    const difficulty = difficultyValues[state.settings.difficulty.indexOf(state.selectedSetting.difficulty)];
    const apiURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple&difficulty=${difficulty}`;

    return { ...state, apiURL };
}
const fetchCategoriesStart = (state, action) => {
    return { ...state, loading: true }
}

const fetchCategoriesSuccess = (state, action) => {
    const newState = {
        loading: false,
        settings: {
            ...state.settings,
            category: state.settings.category.concat(action.categories)
        }
    }
    return { ...state, ...newState }
}

const fetchCategoriesFail = (state, action) => {
    console.log("Something went wrong")
    return { ...state, loading: false }
}

const fetchQuestionsStart = (state, action) => {
    return { ...state, loading: true }
}

const fetchQuestionsSuccess = (state, action) => {            
    return {...state,questions: action.questions};
}

const fetchQuestionsFail = (state, action) => {
    return state;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_START: return fetchQuestionsStart(state, action);
        case actionTypes.FETCH_QUESTIONS_SUCCESS: return fetchQuestionsSuccess(state, action);
        case actionTypes.FETCH_QUESTIONS_FAIL: return fetchQuestionsFail(state, action);
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
        case actionTypes.GENERATE_API_URL: return generateApiUrl(state, action);
        case actionTypes.SET_SETTING: return setSetting(state, action);
        default: return state;
    }
}

export default reducer;
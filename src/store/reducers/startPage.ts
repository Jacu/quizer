import * as actionTypes from '../actions/actionTypes';

export interface Category {
    name: string, 
    id: number
};

export interface ISetting<T> {
    values: T[],
    selected: T,
}

export interface ISettings {
    amount: ISetting<number>,
    category: ISetting<Category>,
    difficulty: ISetting<string>,
    type: ISetting<string>,
    apiURL: string,
}

export interface StartPageState {
    loading: boolean,
    dataFetched: boolean,
    settings: ISettings,
}

const initialState: StartPageState = {
    loading: false,
    dataFetched: false,
    settings: {
        amount: {
            values: [5, 10, 15, 20, 50],
            selected: 5,
        },
        category: {
            values: [{ name: 'Any Category', id: 0 }], // categories should be fetched from https://opentdb.com/api_category.php
            selected: { name: 'Any Category', id: 0 },
        },
        difficulty: {
            values: ['Easy', 'Medium', 'Hard', 'Any'],
            selected: 'Any',
        },
        type: {
            values: ['ABCD', 'True/False', 'Any'],
            selected: 'Any',
        },
        apiURL: "https://opentdb.com/api.php?amount=5&category=0&type=0&dificulty=0",
    }
}

const fetchCategoriesStart = (state: StartPageState, action: actionTypes.fetchCategoriesStart): StartPageState => {
    return { ...state, loading: true }
}

const fetchCategoriesSuccess = (state: StartPageState, action: actionTypes.fetchCategoriesSuccess): StartPageState => {
    const settings = {
            ...state.settings,
            category: {
                ...state.settings.category,
                values: [{name: 'Any Category',id: 0}].concat(action.categories),
            }
        }
    return { ...state, loading: false, settings, dataFetched: true };
}

const fetchCategoriesFail = (state: StartPageState, action: actionTypes.fetchCategoriesFail<{}>): StartPageState => {
    console.log("Something went wrong");
    console.log(action.error);
    return { ...state, loading: false }
}

const setQuestionQuantity = (state: StartPageState, action: actionTypes.setQuestionQuantity): StartPageState => {
    return {...state, settings: {
        ...state.settings,
        amount: {
            ...state.settings.amount,
            selected: action.value,
        }
    }};
}

const setQuestionCategory = (state: StartPageState, action: actionTypes.setQuestionCategory): StartPageState => {
    return {...state, settings: {
        ...state.settings,
        category: {
            ...state.settings.category,
            selected: action.value,
        }
    }};
}

const setQuestionType = (state: StartPageState, action: actionTypes.setQuestionType): StartPageState => {
    return {...state, settings: {
        ...state.settings,
        type: {
            ...state.settings.type,
            selected: action.value,
        }
    }};
}

const setQuestionDifficulty = (state: StartPageState, action: actionTypes.setQuestionDifficulty): StartPageState => {
    return {...state, settings: {
        ...state.settings,
        difficulty: {
            ...state.settings.difficulty,
            selected: action.value,
        }
    }};
}

const resetStartPage = (state: StartPageState, action: actionTypes.resetStartPage): StartPageState => {
    return initialState;
}

const generateUrl = (state: StartPageState, action: actionTypes.generateURL): StartPageState => {
    const { amount, category, difficulty, type } = state.settings;
    const difficultyUrlValueMap = {
        'Easy': 'easy',
        'Medium': 'medium',
        'Hard': 'hard',
        'Any': 0,
    };
    const typeUrlValueMap = {
        'ABCD': 'multiple',
        'True/False': 'boolean',
        'Any': 0,
    }
    const questionsQuantity = amount.selected;
    const categoryID = category.values.filter(currCategory => currCategory.name === category.selected.name)[0].id;
    const selectedDifficulty = difficultyUrlValueMap[difficulty.selected];
    const selectedType = typeUrlValueMap[type.selected];
    const apiURL = `https://opentdb.com/api.php?amount=${questionsQuantity}&category=${categoryID}&type=${selectedType}&dificulty=${selectedDifficulty}`;
    return {...state, settings: {...state.settings, apiURL: apiURL}};
}

const reducer = (state = initialState, action: actionTypes.StartPageActions): StartPageState => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
        case actionTypes.SET_QUESTION_QUANTITY: return setQuestionQuantity(state, action);
        case actionTypes.SET_QUESTION_CATEGORY: return setQuestionCategory(state, action);
        case actionTypes.SET_QUESTION_TYPE: return setQuestionType(state, action);
        case actionTypes.SET_QUESTION_DIFFICULTY: return setQuestionDifficulty(state, action);
        case actionTypes.GENERATE_URL: return generateUrl(state,action);
        case actionTypes.RESET_START_PAGE: return resetStartPage(state,action);
        default: return state;
    }
}

export default reducer;
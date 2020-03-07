import * as actionTypes from '../actions/actionTypes';

export interface Category {
    name: string, 
    id: number
};

export interface StartPageState {
    loading: boolean,
    dataFetched: boolean,
    settings: {
        available: {
            amount: string[],
            category: Category[],
            difficulty: string[],
            type: string[],
        },
        selected: {
            amount: string,
            category: string,
            difficulty: string,
            type: string,
        },
        apiURL: string,
    }
}

const initialState: StartPageState = {
    loading: false,
    dataFetched: false,
    settings: {
        available: {
            amount: ["5", "10", "15", "20", "50"],
            category: [
                {
                    name: 'Any Category',
                    id: 0,
                }, // categories should be fetched from https://opentdb.com/api_category.php
            ],
            difficulty: ['Any Dificulity', 'Easy', 'Medium', 'Hard'],
            type: ['Any Type', 'Multiple Choice', 'True / False'],
        },
        selected: {
            amount: "5",
            category: 'Any Category',
            difficulty: 'Any Dificulity',
            type: 'Any Type',
        },
        apiURL: "https://opentdb.com/api.php?amount=5&category=0&type=0&dificulty=0",
    }
}

const fetchCategoriesStart = (state: StartPageState, action: actionTypes.fetchCategoriesStart) => {
    return { ...state, loading: true }
}

const fetchCategoriesSuccess = (state: StartPageState, action: actionTypes.fetchCategoriesSuccess) => {
    const settingsWithCategories =
    {
        settings: {
            ...state.settings,
            available: {
                ...state.settings.available,
                category: [{name: 'Any Category',id: 0}].concat(action.categories)
            }
        }
    }
    return { ...state, loading: false, ...settingsWithCategories, dataFetched: true }
}

const fetchCategoriesFail = (state: StartPageState, action: actionTypes.fetchCategoriesFail<{}>) => {
    console.log("Something went wrong");
    console.log(action.error);
    return { ...state, loading: false }
}


const setSetting = (state: StartPageState, action: actionTypes.setSetting) => {
    const newSelectedSetting = {
        ...state.settings.selected,
        [action.setting]: action.value
    }
    return { ...state, settings: { ...state.settings, selected: { ...newSelectedSetting } } };
}

const resetStartPage = (state: StartPageState, action: actionTypes.resetStartPage) => {
    return initialState;
}

const generateUrl = (state: StartPageState, action: actionTypes.generateURL): StartPageState => {
    const categoryID = state.settings.available.category.find(category => category.name === state.settings.selected.category)!.id;
    const amount = state.settings.selected.amount;    
    const difficulty = ["0", "easy", "medium", "hard"][state.settings.available.difficulty.indexOf(state.settings.selected.difficulty)];
    const type = ["0","multiple","boolean"][state.settings.available.type.indexOf(state.settings.selected.type)];    
    const apiURL = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&type=${type}&dificulty=${difficulty}`;
    return {...state, settings: {...state.settings, apiURL: apiURL}};
}

const reducer = (state = initialState, action: actionTypes.StartPageActions): StartPageState => {
    switch (action.type) {        
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
        case actionTypes.SET_SETTING: return setSetting(state, action);
        case actionTypes.GENERATE_URL: return generateUrl(state,action);
        case actionTypes.RESET_START_PAGE: return resetStartPage(state,action);
        default: return state;
    }
}

export default reducer;
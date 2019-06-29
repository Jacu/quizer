import * as actionTypes from '../actions/actionTypes'
// import { setSetting } from '../actions/quiz';

const initialState = {
    loading: false,
    settings: {
        questionsCount: [5, 10, 15, 20, 50],
        categories: ['Any Category', 'General Knowledge', 'Books', 'Film', 'Music', 'Musicals & Theatre', 'TV', 'Video Games', 'Board Games'],
        dificulities: ['Easy', 'Medium', 'Hard']
    },
    selectedSetting: {
        questionCount: 5,
        category: 'Any Category',
        dificulity: 'Easy'
    }
}

const fetchQuestionsStart = (state, action) => {
    //code    
    return state;
}

const setSetting = (state, action) => {
    console.log(action)
    return {...state,...action};
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTIONS_START: return fetchQuestionsStart(state, action);
        case actionTypes.SET_SETTING: return setSetting(state, action);
        // case actionTypes.FETCH_QUESTIONS_FAIL: return state;
        // case actionTypes.FETCH_QUESTIONS_SUCCESS: return state;
        default: return state;
    }
}

export default reducer;
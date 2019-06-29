import * as actionTypes from './actionTypes';

export const startQuiz = () => {
    return {
        type: actionTypes.FETCH_QUESTIONS_START
    }
}

export const setSetting = (setting, value) => {
    return {
        type: actionTypes.SET_SETTING,
        [setting]: value        
    }
}
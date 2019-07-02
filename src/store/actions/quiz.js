import * as actionTypes from './actionTypes';
import axios from 'axios';

export const startQuiz = () => {
    return {
        type: actionTypes.START_QUIZ
    }
}

export const fetchQuestions = apiRL => {
    return dispatch => {
        dispatch(fetchQuestionsStart());        
        axios.get(apiRL)
            .then(response => {
                dispatch(fetchQuestionsSuccess(response.data.results));
                dispatch(startQuiz())
            })
            .catch(err => {
                dispatch(fetchQuestionsFail(err))
            });

    }
}

export const fetchQuestionsStart = () => {
    return {
        type: actionTypes.FETCH_QUESTIONS_START
    }
}

export const fetchQuestionsSuccess = data => {    
    return {
        type: actionTypes.FETCH_QUESTIONS_SUCCESS,
        questions: data
    }
}

export const fetchQuestionsFail = error => {
    return {
        type: actionTypes.FETCH_QUESTIONS_FAIL,
        error: error
    }
}

export const nextQuestion = () => {
    return {
        type: actionTypes.NEXT_QUESTION
    }
}

export const prevQuestion = () => {
    return {
        type: actionTypes.PREV_QUESTION
    }
}

export const fetchCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    }
}

export const fetchCategoriesSuccess = data => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: data
    }
}

export const fetchCategoriesFail = error => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    }
}

export const init = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart());
        axios.get('https://opentdb.com/api_category.php')
            .then(response => {
                dispatch(fetchCategoriesSuccess(response.data.trivia_categories))
            })
            .catch(err => {
                dispatch(fetchCategoriesFail(err))
            });
    }

}

export const setSetting = (setting, value) => {
    return {
        type: actionTypes.SET_SETTING,
        selectedSetting: {
            [setting]: value
        }
    }
}
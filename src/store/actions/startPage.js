import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export const setSetting = (setting, value) => {
    return {
        type: actionTypes.SET_SETTING,
        setting: setting,
        value: value
    }
}

export const generateURL = () => {
    return {
        type: actionTypes.GENERATE_URL
    }
}
import { Category } from '../reducers/startPage';
import * as actionTypes from './actionTypes';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'redux';

interface CategoriesServerData {
    trivia_categories: Category[];
}

export const init = () => {
    return (dispatch: Dispatch<actionTypes.StartPageActions>) => {
        dispatch(fetchCategoriesStart());
        axios.get('https://opentdb.com/api_category.php')
            .then((response: AxiosResponse<CategoriesServerData>) => {
                dispatch(fetchCategoriesSuccess(response.data.trivia_categories))
            })
            .catch((err: AxiosError) => {
                dispatch(fetchCategoriesFail(err))
            });
    }
}

export const fetchCategoriesStart = (): actionTypes.fetchCategoriesStart => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START,
    }
}

export const fetchCategoriesSuccess = (trivia_categories: Category[]): actionTypes.fetchCategoriesSuccess => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: trivia_categories,
    }
}

export const fetchCategoriesFail = (error: AxiosError): actionTypes.fetchCategoriesFail<AxiosError> => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error,
    }
}

export const setQuestionQuantity = (value: number): actionTypes.setQuestionQuantity => {
    return {
        type: actionTypes.SET_QUESTION_QUANTITY,
        value: value,
    }
}

export const setQuestionCategory = (value: Category): actionTypes.setQuestionCategory => {
    return {
        type: actionTypes.SET_QUESTION_CATEGORY,
        value: value,
    }
}

export const setQuestionDifficulty = (value: string): actionTypes.setQuestionDifficulty => {
    return {
        type: actionTypes.SET_QUESTION_DIFFICULTY,
        value: value,
    }
}

export const setQuestionType = (value: string): actionTypes.setQuestionType => {
    return {
        type: actionTypes.SET_QUESTION_TYPE,
        value: value,
    }
}

export const generateURL = (): actionTypes.generateURL => {
    return {
        type: actionTypes.GENERATE_URL,
    }
}

export const reset = (): actionTypes.resetStartPage => {
    return {
        type: actionTypes.RESET_START_PAGE,
    }
}
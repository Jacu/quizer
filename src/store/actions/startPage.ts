import { Category } from '../reducers/startPage';
import * as actionTypes from './actionTypes';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Dispatch } from 'redux';

interface CategoriesServerData {
    trivia_categories: Category[];
}

export const init = () => {
    return (dispatch: Dispatch<actionTypes.StartPageActions>) => {
        dispatch(reset());
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

export const setSetting = (setting: string, value: string): actionTypes.setSetting => {
    return {
        type: actionTypes.SET_SETTING,
        setting: setting,
        value: value,
    }
}

export const generateURL = (): actionTypes.generateURL => {
    return {
        type: actionTypes.GENERATE_URL,
    }
}

const reset = (): actionTypes.resetStartPage => {
    return {
        type: actionTypes.RESET_START_PAGE,
    }
}
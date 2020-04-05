import * as actionTypes from './actionTypes';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { IQuestion } from '../reducers/quiz';
import { AppState } from "~/index"; 

interface CategoriesServerData {
    results: IQuestion[];
};

export const initQuiz = () => {
    return (dispatch: Dispatch<actionTypes.AllActions>, getState: () => AppState ) => {
        const apiURL = getState().startPage.settings.apiURL;
        dispatch(reset());
        dispatch(fetchQuestionsStart());
        axios.get(apiURL)
            .then((response: AxiosResponse<CategoriesServerData>) => {
                dispatch(fetchQuestionsSuccess(response.data.results));                
            })
            .then( () => {
                dispatch(shuffleAnswers());
                dispatch(quizStarted())
            })
            .catch((err: AxiosError) => {                
                dispatch(fetchQuestionsFail(err))
            });
    }
}

export const fetchQuestionsStart = (): actionTypes.fetchQuestionsStart => {
    return {
        type: actionTypes.FETCH_QUESTIONS_START,
    }
}

export const fetchQuestionsSuccess = (data: IQuestion[]): actionTypes.fetchQuestionsSuccess => {    
    return {
        type: actionTypes.FETCH_QUESTIONS_SUCCESS,
        questions: data,
    }
}

export const fetchQuestionsFail = (error: AxiosError): actionTypes.fetchQuestionsFail<AxiosError> => {
    return {
        type: actionTypes.FETCH_QUESTIONS_FAIL,
        error: error,
    }
}

export const shuffleAnswers = (): actionTypes.shuffleAnswers => {
    return {
        type: actionTypes.SHUFFLE_ANSWERS,
    }
}

export const quizStarted = (): actionTypes.quizStarted => {
    return {
        type: actionTypes.QUIZ_STARTED,
    }
}

export const quizQuit = (): actionTypes.quizQuit  => {
    return {
        type: actionTypes.QUIZ_QUIT,      
    }
}

export const endQuiz = (): actionTypes.endQuiz => {
    return {
        type: actionTypes.QUIZ_ENDED,
    }
}

export const reset = (): actionTypes.resetQuiz => {
    return {
        type: actionTypes.RESET_QUIZ,
    }
}
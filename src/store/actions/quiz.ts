import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initQuiz = () => {
    return (dispatch,getState) => {
        const apiURL = getState().startPage.settings.apiURL;
        dispatch(reset());
        dispatch(fetchQuestionsStart());
        axios.get(apiURL)
            .then(response => {
                dispatch(fetchQuestionsSuccess(response.data.results));                
            })
            .then( () => {
                dispatch(shuffleAnswers());
                dispatch(quizStarted())
            })
            .catch(err => {                
                dispatch(fetchQuestionsFail(err))
            });
    }
}

export const fetchQuestionsStart = () => {
    return {
        type: actionTypes.FETCH_QUESTIONS_START,
    }
}

export const fetchQuestionsSuccess = data => {    
    return {
        type: actionTypes.FETCH_QUESTIONS_SUCCESS,
        questions: data,
    }
}

export const fetchQuestionsFail = error => {
    return {
        type: actionTypes.FETCH_QUESTIONS_FAIL,
        error: error,
    }
}

export const shuffleAnswers = () => {
    return {
        type: actionTypes.SHUFFLE_ANSWERS,
    }
}

export const quizStarted =() => {
    return {
        type: actionTypes.QUIZ_STARTED,
    }
}

export const pickAnswer = (index, answer) => {
    return {
        type: actionTypes.PICK_ANSWER,
        index: index,
        answer: answer,
    }
}

export const nextQuestion = () => {
    return {
        type: actionTypes.NEXT_QUESTION,
    }
}

export const prevQuestion = () => {
    return {
        type: actionTypes.PREV_QUESTION,
    }
}

export const quizEnded = () => {
    return dispatch => {
        dispatch(calculateScore());
        dispatch(endQuiz());        
    }
}

export const quizQuit = () => {
    return {
        type: actionTypes.QUIZ_QUIT,      
    }
}

export const endQuiz = () => {
    return {
        type: actionTypes.QUIZ_ENDED,
    }
}

export const calculateScore = () => {
    return {
        type: actionTypes.CALCULATE_SCORE,
    }
}

export const reset = () => {
    return {
        type: actionTypes.RESET_QUIZ,
    }
}
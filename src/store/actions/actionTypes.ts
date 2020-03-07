import { Category } from "../reducers/startPage";
import { Dispatch } from "redux";

export const INIT = 'INIT';

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAIL = 'FETCH_CATEGORIES_FAIL';

export const SET_SETTING = 'SET_SETTING';

export const GENERATE_URL = 'GENERATE_URL';

export const RESET_START_PAGE = 'RESET_START_PAGE';

// ----------------------------

export const QUIZ_STARTED = 'QUIZ_STARTED';

export const FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAIL = 'FETCH_QUESTIONS_FAIL';

export const SHUFFLE_ANSWERS = 'SHUFFLE_ANSWERS';

export const PICK_ANSWER = 'PICK_ANSWER';

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';

export const QUIZ_ENDED = 'QUIZ_ENDED';
export const QUIZ_QUIT = 'QUIZ_QUIT';

export const CALCULATE_SCORE = 'CALCULATE_SCORE';

export const RESET_QUIZ = "RESET_QUIZ";

// ----------------------------

export interface fetchQuestionsStart {
    type: typeof FETCH_QUESTIONS_START,
}

export interface fetchQuestionsSuccess {
    type: typeof FETCH_QUESTIONS_SUCCESS,
    questions: string,
}

export interface fetchQuestionsFail<T> {
    type: typeof FETCH_QUESTIONS_FAIL,
    error: T,
}

export interface shuffleAnswers {
    type: typeof SHUFFLE_ANSWERS,
}

export interface quizStarted {
    type: typeof QUIZ_STARTED,
}

export interface pickAnswer {
    type: typeof PICK_ANSWER,
    index: number,
    answer: number,
}

export interface nextQuestion {
    type: typeof NEXT_QUESTION,
}

export interface prevQuestion {
    type: typeof PREV_QUESTION,
}

export interface endQuiz {
    type: typeof QUIZ_ENDED,
}

export interface quizQuit {
    type: typeof QUIZ_QUIT,
}

export interface calculateScore {
    type: typeof CALCULATE_SCORE,
}

export interface resetQuiz {
    type: typeof RESET_QUIZ,
}

export type QuizActions = fetchQuestionsStart | fetchQuestionsSuccess | fetchQuestionsFail<any> | shuffleAnswers |
quizStarted | pickAnswer | nextQuestion | prevQuestion | endQuiz | quizQuit | calculateScore | resetQuiz;

// ----------------------------

export interface init extends Dispatch { }

export interface fetchCategoriesStart {
    type: typeof FETCH_CATEGORIES_START,
}

export interface fetchCategoriesSuccess {
    type: typeof FETCH_CATEGORIES_SUCCESS,
    categories: Category[],
}

export interface fetchCategoriesFail<T> {
    type: typeof FETCH_CATEGORIES_FAIL,
    error: T,
}

export interface setSetting {
    type: typeof SET_SETTING,
    setting: string,
    value: string,
}

export interface generateURL {
    type: typeof GENERATE_URL,
}

export interface resetStartPage {
    type: typeof RESET_START_PAGE,
}

export type StartPageActions = fetchCategoriesStart | fetchCategoriesSuccess | fetchCategoriesFail<any> | setSetting | generateURL | resetStartPage;


export type AllActions = QuizActions | StartPageActions;
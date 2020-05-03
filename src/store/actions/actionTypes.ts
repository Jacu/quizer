import { Category } from "../reducers/startPage";
import { IQuestion } from "../reducers/quiz";
import { Dispatch } from "redux";

export const INIT = 'INIT';

export const FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAIL = 'FETCH_CATEGORIES_FAIL';

export const SET_QUESTION_QUANTITY = 'SET_QUESTION_QUANTITY';
export const SET_QUESTION_CATEGORY = 'SET_QUESTION_CATEGORY';
export const SET_QUESTION_TYPE = 'SET_QUESTION_TYPE';
export const SET_QUESTION_DIFFICULTY = 'SET_QUESTION_DIFFICULTY';

export const GENERATE_URL = 'GENERATE_URL';

export const RESET_START_PAGE = 'RESET_START_PAGE';

// ----------------------------

export const QUIZ_STARTED = 'QUIZ_STARTED';

export const FETCH_QUESTIONS_START = 'FETCH_QUESTIONS_START';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAIL = 'FETCH_QUESTIONS_FAIL';

export const SHUFFLE_ANSWERS = 'SHUFFLE_ANSWERS';

export const QUIZ_ENDED = 'QUIZ_ENDED';
export const QUIZ_QUIT = 'QUIZ_QUIT';

export const RESET_QUIZ = "RESET_QUIZ";

// ----------------------------

export interface fetchQuestionsStart {
    type: typeof FETCH_QUESTIONS_START,
}

export interface fetchQuestionsSuccess {
    type: typeof FETCH_QUESTIONS_SUCCESS,
    questions: IQuestion[],
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

export interface endQuiz {
    type: typeof QUIZ_ENDED,
}

export interface quizQuit {
    type: typeof QUIZ_QUIT,
}

export interface resetQuiz {
    type: typeof RESET_QUIZ,
}

export type QuizActions = fetchQuestionsStart | fetchQuestionsSuccess | fetchQuestionsFail<any> | shuffleAnswers |
quizStarted |  endQuiz | quizQuit | resetQuiz;

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

export interface setQuestionQuantity {
    type: typeof SET_QUESTION_QUANTITY,
    value: number,
}

export interface setQuestionCategory {
    type: typeof SET_QUESTION_CATEGORY,
    value: Category,
}

export interface setQuestionType {
    type: typeof SET_QUESTION_TYPE,
    value: string,
}

export interface setQuestionDifficulty {
    type: typeof SET_QUESTION_DIFFICULTY,
    value: string,
}

export interface generateURL {
    type: typeof GENERATE_URL,
}

export interface resetStartPage {
    type: typeof RESET_START_PAGE,
}

export type StartPageActions = fetchCategoriesStart | fetchCategoriesSuccess | fetchCategoriesFail<any> |
    setQuestionQuantity | setQuestionCategory | setQuestionType | setQuestionDifficulty | generateURL | resetStartPage;


export type AllActions = QuizActions | StartPageActions;
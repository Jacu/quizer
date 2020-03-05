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

export interface NextQuestion {
    type: typeof NEXT_QUESTION,
}

export interface prevQuestion {
    type: typeof PREV_QUESTION,
}

export type AllActions = NextQuestion | prevQuestion;
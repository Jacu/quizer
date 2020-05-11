import quizReducer, { IQuestion } from '../quiz';
import * as actions from '../../actions/quiz';
import { AxiosError } from 'axios';

const initialState = {
    started: false,
    fetching: false,
    questions: [],
}
const mockQ1_incorrect_answers = ['not ok', 'not not', 'maybe'];
const mockQ1_correctAnswerId = 99999;
const mockQuestion = {
    category: 'category',
    type: "multiple",
    difficulty: "easy",
    question: '?',
    correct_answer: 'ok',
    incorrect_answers: mockQ1_incorrect_answers,
    correctAnswerId: mockQ1_correctAnswerId,
} as IQuestion;

describe('quiz reducer', () => {
    it('FETCH_QUESTIONS_START action should set fetching prop to true', () => {
        expect(quizReducer(undefined, actions.fetchQuestionsStart())).toEqual({ ...initialState, fetching: true });
    });

    it('FETCH_QUESTIONS_SUCCESS action should set fetching prop to false and set decoded questions', () => {
        const mockQuestion: IQuestion = {
            category: 'Decode&#033;',
            type: "multiple",
            difficulty: "easy",
            question: 'Is &#039;this&#039; decodable&#063;',
            correct_answer: '&quot;YES&quot;',
            incorrect_answers: ['&tilde;&#033;','&#063;','&lt;&amp;&gt;','&euro;','&Pi; &Sigma; &Omicron;'],
            correctAnswerId: 0,
        };
        const fetchedQuestions = [mockQuestion];
        const changedState = quizReducer(undefined, actions.fetchQuestionsSuccess(fetchedQuestions));
        expect(changedState.fetching).toBeFalsy();
        expect(changedState.questions).toHaveLength(fetchedQuestions.length);
        const decodedQuestion = changedState.questions[0];
        expect(decodedQuestion.category).toEqual("Decode!");
        expect(decodedQuestion.question).toEqual("Is 'this' decodable?");
        expect(decodedQuestion.correct_answer).toEqual('"YES"');
        expect(decodedQuestion.incorrect_answers).toEqual(['˜!','?','<&>','€','Π Σ Ο']);
    });

    it('FETCH_QUESTIONS_FAIL action should set fetching prop to false', () => {
        const axiosError = {
            config: {},
            isAxiosError: false,
            name: 'error',
            message: 'error',
        }
        const changedState = quizReducer(undefined, actions.fetchQuestionsFail(axiosError));
        expect(changedState.fetching).toBeFalsy();
    });

    it('QUIZ_STARTED action should set started prop to true', () => {
        expect(quizReducer(undefined, actions.quizStarted()).started).toBeTruthy();
    });

    it('SHUFFLE_ANSWERS should shuffle answers', () => {
        const newQuestions = quizReducer({ ...initialState, questions: [mockQuestion] }, actions.shuffleAnswers()).questions;
        const newId = newQuestions[0].correctAnswerId
        expect(newId).toBeGreaterThanOrEqual(0);
        expect(newId).toBeLessThan(mockQ1_incorrect_answers.length + 1);
        expect(newId).not.toBe(mockQ1_correctAnswerId);
    });

    it('QUIZ_ENDED should endQuiz', () => {
        expect(quizReducer(undefined, actions.endQuiz()).started).toBeFalsy();
    });

    it('QUIZ_QUIT should quit quiz', () => {
        expect(quizReducer(undefined, actions.quizQuit()).started).toBeFalsy();
    });

    it('RESET_QUIZ should return initialState', () => {
        expect(quizReducer(undefined, actions.reset())).toEqual(initialState);
    });
});
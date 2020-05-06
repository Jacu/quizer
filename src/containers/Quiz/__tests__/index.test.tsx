import React from 'react';
import Quiz from "../";
import { render, fireEvent, waitFor, waitForElementToBeRemoved, screen, getByText } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initQuiz, quizQuit } from "../../../store/actions";
import { AnswerStates } from "~/components/Question/Answer/config";
import '@testing-library/jest-dom';

const BUTTON_LABEL = {
    DEFAULT: 'Check',
    IN_REVEAL: 'Next',
    RESULTS: 'Try Again!'
};

const mockQuestion1 = {
    category: 'mock',
    type: 'obvious',
    difficulty: 'no brainer',
    question: 'Is test passing?',
    correct_answer: 'of course!',
    incorrect_answers: ['no', 'not yet'],
    correctAnswerId: 1,
};

const mockQuestion2 = {
    category: 'not mock',
    type: 'complex',
    difficulty: 'tricky',
    question: 'What?',
    correct_answer: 'Floccinaucinihilipilification',
    incorrect_answers: ['this', 'else'],
    correctAnswerId: 1,
};

const initialState = {
    startPage: {
        dataFetched: true,
    },
    quiz: {
        questions: [
            mockQuestion1,
            mockQuestion2,
        ],
        started: true,
        fetching: false,
    },
};

jest.mock('../../../store/actions', () => ({
    actionTypes: {},
    endQuiz: jest.fn(() => ({ type: 'type' })),
    initQuiz: jest.fn(() => ({ type: 'type' })),
    quizQuit: jest.fn(() => ({ type: 'type' })),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

describe('Quiz', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
        jest.resetModules();
        store.clearActions();
    });

    it('should render with props', () => {
        const { asFragment } = render(<Provider store={store}><Quiz /></Provider>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should toggle button label', () => {
        const { getByText, queryByText } = render(<Provider store={store}><Quiz /></Provider>);
        expect(getByText(BUTTON_LABEL.DEFAULT)).toBeTruthy();
        expect(queryByText(BUTTON_LABEL.IN_REVEAL)).toBeNull();
        fireEvent.click(getByText(BUTTON_LABEL.DEFAULT));
        expect(queryByText(BUTTON_LABEL.DEFAULT)).toBeNull();
        expect(getByText(BUTTON_LABEL.IN_REVEAL)).toBeTruthy();
        fireEvent.click(getByText(BUTTON_LABEL.IN_REVEAL));
        expect(getByText(BUTTON_LABEL.DEFAULT)).toBeTruthy();
        expect(queryByText(BUTTON_LABEL.IN_REVEAL)).toBeNull();
    });

    it('should have all answers initialy unselected', () => {
        const numberOfCorrectAnswers = 1;
        const numberOfIncorrectAnswers = initialState.quiz.questions[0].incorrect_answers.length;
        const allAnswers = numberOfCorrectAnswers + numberOfIncorrectAnswers;
        const { getAllByTestId } = render(<Provider store={store}><Quiz /></Provider>);
        expect(getAllByTestId(AnswerStates.Notselected)).toHaveLength(allAnswers);
    });

    describe('should select correct answer on "Check" button click', () => {
        it('when nothing is selected', () => {
            const { getByText, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
            fireEvent.click(getByText('Check'));
            expect(getByTestId(AnswerStates.CorrectSelected)).toBeTruthy();
        });

        it('when incorrect answer is selected', () => {
            const incorrectAnswerLabel = initialState.quiz.questions[0].incorrect_answers[0];
            const { getByText, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
            fireEvent.click(getByText(incorrectAnswerLabel));
            fireEvent.click(getByText('Check'));
            expect(getByTestId(AnswerStates.CorrectSelected)).toBeTruthy();
            expect(getByTestId(AnswerStates.IncorrectSelected)).toBeTruthy();
        });

        it('when corect answer is selected', () => {
            const correctAnswerLabel = initialState.quiz.questions[0].correct_answer;
            const { getByText, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
            fireEvent.click(getByText(correctAnswerLabel));
            fireEvent.click(getByText('Check'));
            expect(getByTestId(AnswerStates.CorrectSelected)).toBeTruthy();
        });
    });

    it('should load next question on "Next" click', () => {
        const { getByText, queryByText } = render(<Provider store={store}><Quiz /></Provider>);
        const currentQuestion = initialState.quiz.questions[0].question;
        const nextQuestion = initialState.quiz.questions[1].question;
        expect(queryByText(currentQuestion)).toBeTruthy();
        expect(queryByText(nextQuestion)).toBeNull();
        fireEvent.click(getByText(BUTTON_LABEL.DEFAULT));
        fireEvent.click(getByText(BUTTON_LABEL.IN_REVEAL));
        expect(queryByText(currentQuestion)).toBeNull();
        expect(queryByText(nextQuestion)).toBeTruthy();
    });

    it('should render answers in correct order', () => {
        const { correctAnswerId, correct_answer } = initialState.quiz.questions[0];
        const { getAllByTestId } = render(<Provider store={store}><Quiz /></Provider>);
        expect(getAllByTestId(AnswerStates.Notselected)[correctAnswerId]).toHaveTextContent(correct_answer);
    });

    describe('should handle KeyDown', () => {
        describe('on Enter', () => {
            it('when not in reveal mode should set reveal mode', () => {
                const { container, getAllByText } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' });
                expect(getAllByText('Next')).toHaveLength(1);
            });

            it('when in reveal mode and not last question should load next question', () => {
                const currentQuestion = initialState.quiz.questions[0].question;
                const nextQuestion = initialState.quiz.questions[1].question;
                const { container, getByText, queryByText } = render(<Provider store={store}><Quiz /></Provider>);
                expect(queryByText(currentQuestion)).toBeTruthy();
                expect(queryByText(nextQuestion)).toBeNull();
                fireEvent.click(getByText(BUTTON_LABEL.DEFAULT));
                fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' });
                expect(queryByText(currentQuestion)).toBeNull();
                expect(queryByText(nextQuestion)).toBeTruthy();
            });

            it('after checking last question, should load Summary', () => {
                const { questions } = initialState.quiz;
                const { getByText, container } = render(<Provider store={store}><Quiz /></Provider>);
                const element = container.firstChild!;
                questions.forEach(q => {
                    fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' }); // reveal correct answer
                    fireEvent.keyDown(element, { key: 'Enter', code: 'Enter' }); // load new question
                });
                expect(getByText(BUTTON_LABEL.RESULTS)).toBeTruthy();
            });

            it('should init new quiz when in summary view', () => {
                const { questions } = initialState.quiz;
                const { getByText, container } = render(<Provider store={store}><Quiz /></Provider>);
                questions.forEach(q => {
                    fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' }); // reveal correct answer
                    fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' }); // load new question
                });
                fireEvent.click(getByText(BUTTON_LABEL.RESULTS));
                expect(initQuiz).toHaveBeenCalled();
            });
        });
        describe('on ESCAPE', () => {
            it('should quitQuiz', () => {
                const { container } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key: 'Escape' });
                expect(quizQuit).toHaveBeenCalled();
            });
        });
        const { incorrect_answers, correct_answer, correctAnswerId } = initialState.quiz.questions[0];
        const allAnswers = [...incorrect_answers];
        allAnswers.splice(correctAnswerId, 0, correct_answer);
        describe('on ArrowUp', () => {
            it('when nothing is selected should select last answer', () => {
                const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key: 'ArrowUp', code: 'ArrowUp' });
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[allAnswers.length - 1]);
            });

            describe('when selection already present', () => {
                it('and not first', () => {
                    const selected = 1;
                    const shouldSelect = selected - 1;
                    const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                    fireEvent.click(getByText(container, allAnswers[selected]));
                    fireEvent.keyDown(container.firstChild!, { key: 'ArrowUp', code: 'ArrowUp' });
                    expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[shouldSelect]);
                });

                it('and is first', () => {
                    const selected = 0;
                    const shouldSelect = allAnswers.length - 1;
                    const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                    fireEvent.click(getByText(container, allAnswers[selected]));
                    fireEvent.keyDown(container.firstChild!, { key: 'ArrowUp', code: 'ArrowUp' });
                    expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[shouldSelect]);
                });
            });

            it('should not change selection in reveal mode', () => {
                const { container, getByTestId, queryAllByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.click(getByText(container, allAnswers[correctAnswerId]));
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[correctAnswerId]);
                fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' });
                fireEvent.keyDown(container.firstChild!, { key: 'ArrowUp', code: 'ArrowUp' });
                expect(getByTestId(AnswerStates.CorrectSelected)).toHaveTextContent(allAnswers[correctAnswerId]);
                expect(queryAllByTestId(AnswerStates.Notselected)).toHaveLength(allAnswers.length - 1);
            });
        });
        describe('on ArrowDown', () => {
            it('when nothing is selected should select first answer', () => {
                const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key: 'ArrowDown', code: 'ArrowDown' });
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[0]);
            });

            describe('when selection already present', () => {
                it('and not last', () => {
                    const selected = 1;
                    const shouldSelect = selected + 1;
                    const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                    fireEvent.click(getByText(container, allAnswers[selected]));
                    fireEvent.keyDown(container.firstChild!, { key: 'ArrowDown', code: 'ArrowDown' });
                    expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[shouldSelect]);
                });

                it('and is last', () => {
                    const selected = allAnswers.length - 1;
                    const shouldSelect = 0;
                    const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                    fireEvent.click(getByText(container, allAnswers[selected]));
                    fireEvent.keyDown(container.firstChild!, { key: 'ArrowDown', code: 'ArrowDown' });
                    expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[shouldSelect]);
                });
            });
            it('should not change selection in reveal mode', () => {
                const { container, getByTestId, queryAllByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.click(getByText(container, allAnswers[correctAnswerId]));
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[correctAnswerId]);
                fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' });
                fireEvent.keyDown(container.firstChild!, { key: 'ArrowDown', code: 'ArrowDown' });
                expect(getByTestId(AnswerStates.CorrectSelected)).toHaveTextContent(allAnswers[correctAnswerId]);
                expect(queryAllByTestId(AnswerStates.Notselected)).toHaveLength(allAnswers.length - 1);
            });
        });
        describe('on numeric keys', () => {
            it('when key is (0)', () => {
                const key = '0';
                const { container, queryAllByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key, code: key });
                expect(queryAllByTestId(AnswerStates.Selected)).toHaveLength(0);
            });
            it('when key is (1)', () => {
                const key = '1';
                const expectedSelectionId = +key - 1;
                const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key, code: key });
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[expectedSelectionId]);
            });
            it('when key is (2)', () => {
                const key = '2';
                const expectedSelectionId = +key - 1;
                const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key, code: key });
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[expectedSelectionId]);
            });
            it('when key is (3)', () => {
                const key = '3';
                const expectedSelectionId = +key - 1;
                const { container, getByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key, code: key });
                expect(getByTestId(AnswerStates.Selected)).toHaveTextContent(allAnswers[expectedSelectionId]);
            });
            it('when key is greater than num of answers (4)', () => {
                const key = '4';
                const { container, queryAllByTestId } = render(<Provider store={store}><Quiz /></Provider>);
                fireEvent.keyDown(container.firstChild!, { key, code: key });
                expect(queryAllByTestId(AnswerStates.Selected)).toHaveLength(0);
            });
        });
    });
    describe('should display summary with all questions and correct answers', () => {
        const { questions } = initialState.quiz;
        const { getByText, container } = render(<Provider store={store}><Quiz /></Provider>);
        questions.forEach(q => {
            fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' }); // reveal correct answer
            fireEvent.keyDown(container.firstChild!, { key: 'Enter', code: 'Enter' }); // load new question
        });
        expect(getByText(BUTTON_LABEL.RESULTS)).toBeTruthy();
        questions.forEach(q => {
            expect(getByText(q.question)).toBeTruthy();
            expect(getByText(q.correct_answer)).toBeTruthy();
        });
    });
});
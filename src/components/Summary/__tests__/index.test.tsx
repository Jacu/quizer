import React from 'react';
import Summary from '../';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CORRECT, WRONG } from '~/utils/colors';

const q1 = {
    question: 'question1',
    answer: 'question1_answer',
    isCorrect: true,
};

const q2 = {
    question: 'question2',
    answer: 'question2_answer',
    isCorrect: false,
};

const props = {
    questions: [q1, q2],
    score: 0,
};

describe('Summary', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<Summary {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render correct answer with style', () => {
        const { getByText } = render(<Summary {...props} />);
        expect(getByText(q1.question).parentElement).toHaveStyle(`background-color: ${CORRECT.LIGHT}`);
        expect(getByText(q1.question).parentElement).toHaveStyle(`border-color: ${CORRECT.BASE}`);
    });

    it('should render correct answer with style', () => {
        const { getByText } = render(<Summary {...props} />);
        expect(getByText(q2.question).parentElement).toHaveStyle(`background-color: ${WRONG.LIGHT}`);
        expect(getByText(q2.question).parentElement).toHaveStyle(`border-color: ${WRONG.BASE}`);
    });
});
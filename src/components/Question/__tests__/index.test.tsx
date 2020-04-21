import React from 'react';
import Question from '../';
import { render, fireEvent } from '@testing-library/react';

const onAnswerPicked = jest.fn();
const answers = ['a1','a2'];
const props = {
    question: 'Question',
    category: 'Category',
    answers,
    correctId: 0,
    reveal: false,
    //selectedId: 5,
    onAnswerPicked,
}

describe('SettingPanel', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('should render with default props', () => {
        const { asFragment, getByText } = render(<Question {...props} />);
        fireEvent.click(getByText(answers[0]));
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onAnswerPicked for each selection', () => {
        const { getByText } = render(<Question {...props} />);
        fireEvent.click(getByText(answers[0]));
        fireEvent.click(getByText(answers[1]));
        expect(onAnswerPicked).toHaveBeenCalledTimes(2);
    });

    describe('should call onAnswerPicked with questionId', () => {
        it('when id is 0 (falsy)', () => {
            const { getByText } = render(<Question {...props} />);
            fireEvent.click(getByText(answers[0]));
            expect(onAnswerPicked).toHaveBeenCalledWith(0);
        });
        it('when id is 1 (truthy)', () => {
            const { getByText } = render(<Question {...props} />);
            fireEvent.click(getByText(answers[1]));
            expect(onAnswerPicked).toHaveBeenCalledWith(1);
        });
    });
});
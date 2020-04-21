import React from 'react';
import NavBar from '../';
import { render, fireEvent } from '@testing-library/react';

const onQuit = jest.fn();
const props = {
    currentQuestionNumber: 1,
    questionsAmount: 10,
    loading: false,
    finished: false,
    onQuit,
}

describe('SettingPanel', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<NavBar {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onQuit on icon click', () => {
        const { container } = render(<NavBar {...props} />);
        fireEvent.click(container.querySelector('svg')!);
        expect(onQuit).toHaveBeenCalled();
    });

    it('should display loading message when loading', () => {
        const { getByText } = render(<NavBar {...props} loading={true} />);
        expect(getByText('Loading...')).toBeTruthy();
    });
});
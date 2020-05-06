import React from 'react';
import Answer from '../';
import { render, fireEvent } from '@testing-library/react';

const onClick = jest.fn();
const answer = "answer text";

const props = {
    answer,
    selected: false,
    correct: false,
    reveal: false,
    onClick,
}

describe('SettingPanel', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render with default props', () => {
        const { asFragment } = render(<Answer {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render when selected', () => {
        const { asFragment } = render(<Answer {...props} selected={true} />);
        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toEqual(render(<Answer {...props} selected={true} reveal={false} correct={false} />).asFragment());
        expect(asFragment()).toEqual(render(<Answer {...props} selected={true} reveal={false} correct={true} />).asFragment());
    });

    it('should render when selected and reveal and correct', () => {
        const { asFragment } = render(<Answer {...props} selected={true} reveal={true} correct={true} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render when selected and reveal and incorrect', () => {
        const { asFragment } = render(<Answer {...props} selected={true} reveal={true} correct={false} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render unselected answer',() => {
        const selected = false;
        const { asFragment } = render(<Answer {...props} selected={selected} />);
        expect(asFragment()).toMatchSnapshot();
        expect(asFragment()).toEqual(render(<Answer {...props} selected={selected} reveal={true} correct={false} />).asFragment());
        expect(asFragment()).toEqual(render(<Answer {...props} selected={selected} reveal={false} correct={true} />).asFragment());
        expect(asFragment()).toEqual(render(<Answer {...props} selected={selected} reveal={true} correct={true} />).asFragment());
        expect(asFragment()).toEqual(render(<Answer {...props} selected={selected} reveal={false} correct={false} />).asFragment());
    });

    it('should call onClick when not in reveal mode', () => {
        const { getByText } = render(<Answer {...props} />);
        fireEvent.click(getByText(answer));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should NOT call onClick when in reveal mode', () => {
        const { getByText } = render(<Answer {...props} reveal={true} />);
        fireEvent.click(getByText(answer));
        expect(onClick).not.toHaveBeenCalled();
    });
});
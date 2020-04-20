import React from 'react';
import ButtonInput from '../';
import { render, fireEvent } from '@testing-library/react';

const onChange = jest.fn();

const props = {
    label: 'label',
    options: ['option1', 'option2'],
    selected: 'option1',
    onChange,
};

describe('ButtonInput', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<ButtonInput {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onChange', () => {
        const clickedOption = 'option2';
        const { getByText } = render(<ButtonInput {...props} />);
        fireEvent.click(getByText(clickedOption)!);
        expect(onChange).toBeCalledWith(clickedOption);
    });
});
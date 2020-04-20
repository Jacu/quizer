import React from 'react';
import SliderInput from '../';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const onChange = jest.fn();

const props = {
    label: 'sliderInput',
    options: [1, 20],
    selected: 5,
    onChange,
};

describe('SliderInput', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<SliderInput {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('should read min and max values from props', () => {
        const testOptions = [0, 666]
        it('should set min value for slider input', () => {
            const { container } = render(<SliderInput {...props} options={testOptions} />);
            expect(container.querySelector('input')).toHaveAttribute('min', '0')
        });

        it('should set max value for slider input', () => {
            const { container } = render(<SliderInput {...props} options={testOptions} />);
            expect(container.querySelector('input')).toHaveAttribute('max', '666')
        });

        it('should use default values if none provided', () => {
            const { container } = render(<SliderInput {...props} options={[]} />);
            expect(container.querySelector('input')).toHaveAttribute('min', '0');
            expect(container.querySelector('input')).toHaveAttribute('max', '1');
        });
    });

    it('should use value from props', () => {
        const testValue = 10;
        const { container } = render(<SliderInput {...props} selected={testValue} />);
        expect(container.querySelector('input')).toHaveAttribute('value', testValue.toString());
    });

    it('should call onChange', () => {
        const { container } = render(<SliderInput {...props} />);
        fireEvent.change(container.querySelector('input')!, { target: { value: 10 } });
        expect(onChange).toHaveBeenCalledWith(10);
    });
});
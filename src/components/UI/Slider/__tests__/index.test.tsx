import React from 'react';
import Slider from '../';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const onChange = jest.fn();
const props = {
    min: 0,
    value: 1,
    max: 2,
    onChange,
};

describe('Slider', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetAllMocks();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<Slider {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render input', () => {
        const { container } = render(<Slider {...props} />);
        expect(container.querySelector('input')).toBeTruthy();
    });

    it('should call onChange', () => {
        const value = '5';
        const { container } = render(<Slider {...props} />);
        fireEvent.change(container.querySelector('input')!, { target: { value } });
        expect(onChange).toHaveBeenCalledWith(+value);
    });

    it('should set max range', () => {
        const max = 10;
        const { container } = render(<Slider {...props} max={max} />);
        expect(container.querySelector('input')).toHaveAttribute('max', max.toString());
    });

    it('should set min range', () => {
        const min = 1;
        const { container } = render(<Slider {...props} min={min} />);
        expect(container.querySelector('input')).toHaveAttribute('min', min.toString());
    });

    it('should set value', () => {
        const value = 1;
        const { container } = render(<Slider {...props} value={value} />);
        expect(container.querySelector('input')!.value).toBe(value.toString());
    });
});
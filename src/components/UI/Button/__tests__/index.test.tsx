import React from 'react';
import Button from '../';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const onClick = jest.fn();
const props = {
    onClick,
}

describe('Button', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<Button {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display label', () => {
        const label = 'test label';
        const { container } = render(<Button {...props} label={label} />);
        expect(screen.getAllByText(label)).toHaveLength(1);
        expect(container.firstChild).toHaveTextContent(label);
    });

    it('should handle click', () => {
        const label = 'test label';
        const { getByText } = render(<Button {...props} label={label} />);
        fireEvent.click(getByText(label));
        expect(onClick).toHaveBeenCalled();
    });

    it('should uppercase label', () => {
        const label = 'test label';
        const { getByText } = render(<Button {...props} label={label} uppercase />);
        expect(getByText(label)).toHaveStyle(` text-transform: uppercase; `);
    });

    it('should use provided font-size for label', () => {
        const size = 5;
        const label = 'test label';
        render(<Button {...props} label={label} size={size} />);
        expect(screen.getByText(label)).toHaveStyle(` font-size: ${size}rem; `);
    });

    it('should use default font-size for label', () => {
        const label = 'test label';
        render(<Button {...props} label={label} />);
        expect(screen.getByText(label)).toHaveStyle(` font-size: 1.25rem; `);
    });

    it('should bold label', () => {
        const label = 'test label';
        render(<Button {...props} label={label} bold />);
        expect(screen.getByText(label)).toHaveStyle(` font-weight: bold; `);
    });
});
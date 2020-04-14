
import React from 'react';
import Tile from '../';
import { render, fireEvent } from '@testing-library/react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { GRAY, PRIMARY_THEME } from "~/utils/colors";
import '@testing-library/jest-dom';

const header = 'header';
const onClick = jest.fn();

const props = {
    selected: false,
    header,
    onClick,
}

describe('Tile', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<Tile {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should execute onClick function on click', () => {
        const { container } = render(<Tile {...props} />);
        fireEvent.click(container.firstChild!);
        expect(onClick).toHaveBeenCalled();
    });

    it('shoudl use GRAY color when NOT selected', () => {
        const { container } = render(<Tile {...props} selected={false} />);
        expect(container.firstChild).toHaveStyle(`color: ${GRAY.BASE}`);
    });

    it('use PRIMARY_THEME style when selected', () => {
        const { container } = render(<Tile {...props} selected={true} />);
        expect(container.firstChild).toHaveStyle(`color: ${PRIMARY_THEME.BASE}`);
    });

    it('should render icon', () => {
        const { container } = render(<Tile {...props} />);
        expect(container.querySelectorAll('svg')).toHaveLength(1);
    });

    it('should use default icon if none provided', () => {
        const { container } = render(<Tile {...props} />);
        expect(container.querySelector('svg')).toHaveClass('fa-question');
    });

    it('should use provided icon if there is one', () => {
        const { container } = render(<Tile {...props} icon={faSpinner} />);
        expect(container.querySelector('svg')).toHaveClass('fa-spinner');
    });

    it('should display header', () => {
        const { getAllByText } = render(<Tile {...props} />);
        expect(getAllByText(header)).toHaveLength(1);
    });
});
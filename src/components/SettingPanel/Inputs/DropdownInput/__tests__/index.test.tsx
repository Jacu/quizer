import React from 'react';
import CategoryInput from '../';
import { render, fireEvent } from '@testing-library/react';

const onChange = jest.fn();
const selectedCategory = { name: 'firstCategory', id: 0 };
const categoryToSelect = { name: 'secondCategory', id: 1 };

const props = {
    label: 'Category',
    options: [selectedCategory, categoryToSelect],
    selected: selectedCategory,
    onChange,
};

describe('CategoryInput', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<CategoryInput {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should call onChange with new category', () => {
        const { container, getAllByText } = render(<CategoryInput {...props} />);
        fireEvent.change(container.querySelector('#react-select-3-input')!, { target: { value: categoryToSelect.name } });
        fireEvent.click(getAllByText(categoryToSelect.name).pop()!);
        expect(onChange).toHaveBeenCalledWith(categoryToSelect);
    });
});
import React from 'react';
import SettingPanel from '../';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const props = {
    amount: { values: [1, 10], selected: 5 },
    category: { values: [{ name: 'c1', id: 0 }], selected: { name: 'c1', id: 0 } },
    difficulty: { values: ['easy', 'hard'], selected: 'easy' },
    type: { values: ['T/F', 'M'], selected: 'T/F' },
    onAmountChange: jest.fn(),
    onCategoryChange: jest.fn(),
    onTypeChange: jest.fn(),
    onDifficultyChange: jest.fn(),
}

describe('SettingPanel', () => {
    it('should render with default props', () => {
        const { asFragment } = render(<SettingPanel {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
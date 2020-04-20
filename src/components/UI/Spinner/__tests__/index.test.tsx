import React from 'react';
import Spinner from '../';
import { render } from '@testing-library/react';

describe('Spinner', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Spinner />);
        expect(asFragment()).toMatchSnapshot();
    });
});
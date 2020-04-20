import React from 'react';
import Score from '../';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Score', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Score score={0} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should display score with percentage symbol', () => {
        render(<Score score={12} />);
        expect(screen.queryByText('12%')).toBeTruthy();
    });

    it('should display score without decimal', () => {
        render(<Score score={9.999999} />);
        expect(screen.queryByText('10%')).toBeTruthy();
    });

    it('should NOT display score greater than 100', () => {
        render(<Score score={999} />);
        expect(screen.queryByText('100%')).toBeTruthy();
    });

    it('should NOT display score smaller than 0', () => {
        render(<Score score={-999} />);
        expect(screen.queryByText('0%')).toBeTruthy();
    });

    describe('should render correct number of start', () => {
        it('exact 5 of any stars', () => {
            const { container } = render(<Score score={0} />);
            expect(container.querySelectorAll('svg')).toHaveLength(5);
        });

        it('score < 10', () => {
            const { container } = render(<Score score={9.9} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });

        it('score = 10', () => {
            const { container } = render(<Score score={10} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score < 30', () => {
            const { container } = render(<Score score={29.9} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score = 30', () => {
            const { container } = render(<Score score={30} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score < 50', () => {
            const { container } = render(<Score score={49.9} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score = 50', () => {
            const { container } = render(<Score score={50} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score < 70', () => {
            const { container } = render(<Score score={69.9} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'far');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score = 70', () => {
            const { container } = render(<Score score={70} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score < 100', () => {
            const { container } = render(<Score score={99} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'far');
        });
        it('score = 100', () => {
            const { container } = render(<Score score={100} />);
            expect(container.querySelectorAll('svg')[0]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[1]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[2]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[3]).toHaveAttribute('data-prefix', 'fas');
            expect(container.querySelectorAll('svg')[4]).toHaveAttribute('data-prefix', 'fas');
        });
    });
});
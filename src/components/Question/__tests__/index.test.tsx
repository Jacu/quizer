import React from 'react';
import Question from '../';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const onAnswerPicked = jest.fn();
const answers = ['a1', 'a2'];
const correctAnswerId = 0;
const incorrectAnswerId = 1;
const props = {
    question: 'Question',
    category: 'Category',
    answers,
    correctId: correctAnswerId,
    reveal: false,
    onAnswerPicked,
}

describe('SettingPanel', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render with default props', () => {
        const wrapper = shallow(<Question {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should call onAnswerPicked for each selection', () => {
        const wrapper = shallow(<Question {...props} />);
        wrapper.find('Answer').first().simulate('click');
        wrapper.find('Answer').last().simulate('click');
        expect(onAnswerPicked).toHaveBeenCalledTimes(2);
    });

    describe('should call onAnswerPicked with questionId', () => {
        it('when id is 0 (falsy)', () => {
            const wrapper = shallow(<Question {...props} />);
            wrapper.find('Answer').first().simulate('click');
            expect(onAnswerPicked).toHaveBeenCalledWith(0);
        });

        it('when id is 1 (truthy)', () => {
            const wrapper = shallow(<Question {...props} />);
            wrapper.find('Answer').last().simulate('click');
            expect(onAnswerPicked).toHaveBeenCalledWith(1);
        });
    });

    describe('should select answer based on selectedId prop', () => {
        it('when selectedId is not provided', () => {
            const wrapper = shallow(<Question {...props} />);
            wrapper.find('Answer').forEach(answer => {
                expect(answer.prop('selected')).toBe(false);
            });
        });

        it('when selectedId is invalid', () => {
            const selectedId = -10;
            const wrapper = shallow(<Question {...props} selectedId={selectedId} />);
            wrapper.find('Answer').forEach(answer => {
                expect(answer.prop('selected')).toBe(false);
            });
        });

        it('when selectedId is 0', () => {
            const selectedId = 0;
            const wrapper = shallow(<Question {...props} selectedId={selectedId} />);
            expect(wrapper.find('Answer').at(selectedId).prop('selected')).toBe(true);
        });

        it('when selectedId is 1', () => {
            const selectedId = 1;
            const wrapper = shallow(<Question {...props} selectedId={selectedId} />);
            expect(wrapper.find('Answer').at(selectedId).prop('selected')).toBe(true);
        });
    });

    it('should select all answers if selectedId is not provided and in reveal mode', () => {
        const wrapper = shallow(<Question {...props} reveal={true} />);
        wrapper.find('Answer').forEach(answer => {
            expect(answer.prop('selected')).toBe(true);
        });
    });

    describe('should select correct answer AND selected one in reveal mode', () => {
        it('when selectedId is wrong', () => {
            const wrapper = shallow(<Question {...props} reveal={true} selectedId={incorrectAnswerId} />);
            expect(wrapper.find('Answer').at(correctAnswerId).prop('selected')).toBe(true);
            expect(wrapper.find('Answer').at(incorrectAnswerId).prop('selected')).toBe(true);
        });

        it('when selectedId is correct', () => {
            const wrapper = shallow(<Question {...props} reveal={true} selectedId={correctAnswerId} />);
            expect(wrapper.find('Answer').at(correctAnswerId).prop('selected')).toBe(true);
            expect(wrapper.find('Answer').at(incorrectAnswerId).prop('selected')).toBe(false);
        });
    });
});

import React from 'react';
import Spinner from '../';
import toJson from "enzyme-to-json";
import {mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Spinner', () => {
    it('should render', () => {
        const wrapper = mount(<Spinner />);
        expect(toJson(wrapper,{ mode: 'deep' })).toMatchSnapshot();
    });
});
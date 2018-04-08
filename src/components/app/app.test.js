import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import App from './app';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    test('should contain Hi from app', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('div').text()).toBe('Hi from app');
    })
});
import React from 'react';
import {shallow} from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
    it('should match the snapshot', () => {
        const component = shallow(<Card url="https://cdn.britannica.com/s:700x450/01/115901-004-AC4BD3CC.jpg" id="1" />);
        expect(component).toMatchSnapshot();
    });
});
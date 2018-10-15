import React from 'react';
import {shallow} from 'enzyme';

import Button from '.';

describe('<Button />', () => {
    it('should match the snapshot', () => {
        const component = shallow(<Button text="test" type="primary" />);
        expect(component).toMatchSnapshot();
    });
    it('should call the event handler', () => {
        const onClick = jest.fn();
        const component = shallow(<Button text="test" type="primary" handler={onClick} />);
        component.simulate('click')
        expect(onClick).toHaveBeenCalled();
    })
});
import React from 'react';
import {shallow} from 'enzyme';

import CardGrid from './CardGrid';

describe('<CardGrid />', () => {
    it('should match the snapshot', () => {
        const component = shallow(<CardGrid items={[]} />);
        expect(component).toMatchSnapshot();
    });
});
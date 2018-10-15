import React from 'react';
import {shallow} from 'enzyme';

import CardListings from '.';

describe('<CardListings />', () => {

    const store = {
        cards: {
            list: [
                {
                    id: '1',
                    title: 'Test',
                    imageUrl: 'https://cdn.britannica.com/s:700x450/01/115901-004-AC4BD3CC.jpg'
                }
            ]
        }
    };

    it('should match the snapshot', () => {
        const component = shallow(<CardListings />, {store});
        expect(component).toMatchSnapshot();
    });
});
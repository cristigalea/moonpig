import React from 'react';
import {shallow} from 'enzyme';

import CardDetails from '.';

describe('<CardDetails />', () => {
    
    const store = {
        cards: {
            list: [
                {
                    id: '1',
                    title: 'Test',
                    imageUrl: 'https://cdn.britannica.com/s:700x450/01/115901-004-AC4BD3CC.jpg'
                }
            ]
        },
        selected: {
            id: '1',
                title: 'Test',
                imageUrl: 'https://cdn.britannica.com/s:700x450/01/115901-004-AC4BD3CC.jpg'
        }
    };

    it('should match the snapshot', () => {
        const component = shallow(<CardDetails />, {store});
        expect(component).toMatchSnapshot();
    });
});
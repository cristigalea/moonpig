import React from 'react';
import {shallow} from 'enzyme';

import LoadedImage from '.';

describe('<LoadedImage />', () => {
    it('should match the snapshot', () => {
        const component = shallow(<LoadedImage url="https://cdn.britannica.com/s:700x450/01/115901-004-AC4BD3CC.jpg" />);
        expect(component).toMatchSnapshot();
    });

    it('should finish loading', () => {
        const component = shallow(<LoadedImage url="https://cdn.britannica.com/s:700x450/01/115901-004-AC4BD3CC.jpg" />);
        const handler = jest.spyOn(component.instance(), 'onLoadImage');
        expect(component.state().isLoaded).toBe(false);
        expect(component.state().isError).toBe(false);
        setTimeout(500, () => {
            expect(handler.mock.calls.length).toBe(1);
            expect(component.state().isLoaded).toBe(true);
        })
    });
});
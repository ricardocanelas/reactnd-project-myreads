// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our Depedencies
import Image from './Image';

describe('<Image />', () => {

    it('renders without crashing', () => {
        expect(shallow(<Image />));
    });

    it('mounts without crashing', () => {
        expect(mount(<Image />));
    });

    it('does not renders a image div', () => {
        const wrapper = mount(<Image />)
        expect(wrapper.find('.no-image').length).toBe(1);
    });

    it('renders a image div', () => {
        const wrapper = mount(<Image data={{imageLinks:{thumbnail: 'myimage.jpg'}}} />)
        expect(wrapper.find('.no-image').length).toBe(0);
    });

})
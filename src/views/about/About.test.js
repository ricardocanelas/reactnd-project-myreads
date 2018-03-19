// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our depedencies
import About from './About';

describe('View: <About />', () => {

    it('renders without crashing', () => {
        expect(shallow(<About />))
    });

    it('mounts without crashing', () => {
        expect(mount(<About />))
    });
    
})
// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our depedencies
import Shelves from './Shelves';

describe('View: <Shelves />', () => {

    it('renders without crashing', () => {
        expect(shallow(<Shelves />))
    });

    it('mounts without crashing', () => {
        expect(mount(<Shelves />))
    });
    
})
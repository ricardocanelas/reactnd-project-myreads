// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our Depedencies
import Ribbon from './Ribbon';

describe('Component: <Ribbon />', () => {

    it('renders without crashing', () => {
        expect(shallow(<Ribbon/>))
    });

    it('mounts without crashing', () => {
        expect(mount(<Ribbon/>))
    });
    
})
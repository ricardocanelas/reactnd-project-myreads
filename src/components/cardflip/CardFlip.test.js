// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our depedencies
import CardFlip from './CardFlip';

describe('Component: <CardFlip />', () => {

    it('renders without crashing', () => {
        expect(shallow(
            <CardFlip>
                <div>A</div>
                <div>B</div>
            </CardFlip>
        ))
    });

    it('mounts without crashing', () => {
        expect(mount(
            <CardFlip>
                <div>A</div>
                <div>B</div>
            </CardFlip>
        ))
    });
    
})
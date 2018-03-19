// External Depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon'

// Our Component
import Shelf from './Shelf';

describe('Component: <Shelf />', () => {

    it('renders without crashing', () => {
        expect( shallow(<Shelf title='MyTitle' />) )
    });

    it('mounts without crashing', () => {
        expect( mount(<Shelf title='MyTitle' />) )
    });

    it('validates the title prop', () => {
        let consoleError = sinon.stub(console, 'error');
        const wrapper = mount(<Shelf />)

        expect(consoleError.called).toBe(true)
        console.error.restore();
    });
    
})
// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

// Our depedencies
import Info from './Info';
import fakeBook from '../../utils/tests/fakeBook'

describe('View: <Info />', () => {

    beforeEach(() => {
        fetch.mockResponse(JSON.stringify({book: fakeBook}))
    });

    it('renders without crashing', () => {
        expect(shallow(<Info />))
    });

    it('mounts without crashing', () => {
        expect(mount(<MemoryRouter><Info /></MemoryRouter>))
    });
    
})
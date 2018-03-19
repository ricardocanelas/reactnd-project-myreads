// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

// Our depedencies
import App from './App';
import About from '../About/About';
import fakeBook from '../../utils/tests/fakeBook'

describe('View: <App />', () => {

    beforeEach(() => {
        fetch.mockResponse(JSON.stringify({books: [fakeBook]}))
    });

    it('renders without crashing', () => {
        expect(shallow(<App />))
    });

    it('mounts without crashing', () => {
        expect(mount(<MemoryRouter><App /></MemoryRouter>))
    });    
})
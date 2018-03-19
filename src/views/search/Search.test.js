// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';

// Our depedencies
import Search from './Search';
import fakeBook from '../../utils/tests/fakeBook'

describe('View: <Search />', () => {

    beforeEach(() => {
        fetch.mockResponse(JSON.stringify({books: [fakeBook]}))
    });

    it('renders without crashing', () => {
        expect(shallow(<Search />))
    });

    it('mounts without crashing', () => {
        expect(mount(<Search />))
    });

    it('checks if render loading', () => {
        const wrapper = mount(<Search />)
        wrapper.instance().handleInputChange({target:{value:'ios'}})

        expect(wrapper.state('query')).toBe('ios')
        expect(wrapper.state('isLoading')).toBe(true)
    });

    it('should not render loading if the input is empty', () => {
        const wrapper = mount(<Search />)
        wrapper.instance().handleInputChange({target:{value:'ios'}})
        wrapper.instance().handleInputChange({target:{value:''}})

        expect(wrapper.state('results')).toEqual([])
        expect(wrapper.state('isEmpty')).toBe(false)
        expect(wrapper.state('isLoading')).toBe(false)
    });
    
})
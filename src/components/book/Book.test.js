// External Depedencies
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme';
import sinon from 'sinon'

// Our Depedencies
import Book from './Book';

describe('<Book />', () => {

    const fakeData = {
        id: 'oKd024d02',
        title: 'The book',
        authors: [],
        shelf: 'read',
        imageLinks: {
            thumbnail: 'xyz.jpg'
        }
    }

    const fakeDataEssential = {
        id: 'oKd024d02',
        title: 'The book',
    }

    it('renders without crashing', () => {
        expect(shallow(<MemoryRouter><Book data={fakeDataEssential}/></MemoryRouter>))
    });

    it('mounts without crashing', () => {
        expect(mount(<MemoryRouter><Book data={fakeData} /></MemoryRouter>))
    });

    it('simulates a click on the btnOptions and check the isFlipped value is true', () => {
        const wrapper = mount(<MemoryRouter><Book data={fakeData} /></MemoryRouter>)
        const bookInstance = wrapper.find(Book).instance()

        expect(bookInstance.state.isFlipped).toBe(false)
        wrapper.find('.btn-options').simulate('click')
        expect(wrapper.find('.book-back').length).toBe(1)
        expect(bookInstance.state.isFlipped).toBe(true)
    });

    it('checks mouseLeave and mouseEnter actions', () => {
        const wrapper = mount(<MemoryRouter><Book data={fakeData} /></MemoryRouter>)
        const bookInstance = wrapper.find(Book).instance()

        wrapper.find('.book').simulate('mouseLeave')
        expect(bookInstance.interval).toBeGreaterThan(0)
        
        wrapper.find('.book').simulate('mouseEnter')
        expect(bookInstance.interval).toBe(0)
    });

    it('should show book-loading when update shef prop', () => {
        const spy = sinon.spy()
        const wrapper = mount(<MemoryRouter><Book data={fakeData} onUpdateBook={spy}/></MemoryRouter>)
        const bookInstance = wrapper.find(Book).instance()

        expect(bookInstance.state.isMovingTo).toBe(false)
        
        // turn back the book
        wrapper.find('.btn-options').simulate('click')

        // select a option
        wrapper.find('.book-back .book-option').at(0).simulate('click')

        expect(bookInstance.state.isMovingTo).toBe(true)
        expect(wrapper.find('.book-loading').length).toBe(1)
    })

})
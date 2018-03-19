// External depedencies
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

// Our depedencies
import * as BooksAPI from './BooksAPI'
import fakeBook from '../utils/tests/fakeBook'

describe('API: BooksAPI', () => {

    const bookData = { id: '123', 'title': 'xyz' }

    it('dispatches the correct actions on the get request', () => {
        const expectData = fakeBook
        
        fetch.mockResponse(JSON.stringify({book: expectData}))
    
        BooksAPI.get('123').then(response => {
            expect(response).toEqual(expectData)
        })
    });

    it('dispatches the correct actions on the getAll request', () => {
        const expectData = [fakeBook]
        
        fetch.mockResponse(JSON.stringify({books: expectData}))

        BooksAPI.getAll().then(response => {
            expect(response).toEqual(expectData)
        })
    });

    it('dispatches the correct actions on the search request', () => {
        const expectData = [fakeBook]
        
        fetch.mockResponse(JSON.stringify({books: expectData}))
    
        BooksAPI.search('ios').then(response => {
            expect(response).toEqual(expectData)
        })
    });
    
})


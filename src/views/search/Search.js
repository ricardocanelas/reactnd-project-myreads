// External Depedencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spin from 'antd/lib/spin';
import {DebounceInput} from 'react-debounce-input';

// Our Depedencies
import * as BooksAPI from '../../api/BooksAPI'
import { removeWhiteSpace } from '../../utils/string'
import Item from './item/Item'

// Style
import './search.css'

class Search extends Component {

    state = {
        query: '',
        results: [],
        isEmpty: false,
        isLoading: false,
    }

    handleInputChange = (e) => {
        this.setState({query: e.target.value})
        this.findBooks(e.target.value);
    }

    findBooks = (query) => {
        query = removeWhiteSpace(query)
        if(query.trim() === '') {
            this.setState({results: [], isEmpty: false, isLoading: false})
            return;
        }
        
        this.setState({results: [], isEmpty: false, isLoading: true})

        BooksAPI.search(query)
            .then((response) => {
                // check if the query is the same of the input value 
                if(query !== removeWhiteSpace(this.state.query)) return

                const emptyResponse = !!response.error
                const results = emptyResponse ? [] : response

                // adding shelf properties
                results.forEach(item => {
                    const myBook = this.props.myBooks.find(elem => elem.id === item.id)
                    if(myBook) item.shelf = myBook.shelf
                })

                this.setState({results, isEmpty: emptyResponse, isLoading: false})
            });
    }

    render () {
        const { isEmpty, isLoading } = this.state

        return (
            <div className="search-container">
                <h1>Search Page</h1>

                <DebounceInput
                    placeholder="Search by title"
                    onChange={this.handleInputChange}
                    value={this.state.query}
                    minLength={1}
                    debounceTimeout={1}
                />

                {isLoading && (
                    <div className="results-loading">
                        <Spin size="small"/>
                    </div>
                )}

                {isEmpty && (
                    <div className="no-results">
                        Sorry, no results were found.<br/>
                        Your search '<b>{this.state.query}</b>' did not match any books.
                        <span className="emotion">¯\_(ツ)_/¯</span>
                    </div>
                )}

                {this.state.results.length > 0 && (
                    <div className="results-details">
                        <b>{this.state.results.length}</b> results found.
                    </div>
                )}

                <ul className="results">
                    {this.state.results.map((book, index) => (
                        <Item key={book.id} data={book} onUpdateBook={this.props.onUpdateBook} />
                    ))}
                </ul>
            </div>
        )
    }
}

Search.defaultProps = {
    myBooks: [],
    onUpdateBook: () => {}
}

Search.propTypes = {
    myBooks: PropTypes.array,
    onUpdateBook: PropTypes.func
}

export default Search
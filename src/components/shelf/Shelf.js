// External Depedencies
import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// Our Depedencies
import Book from '../book/Book'
import Ribbon from '../ribbon/Ribbon'

// Style
import './shelf.css'

const Shelf = (props) => { 
    
    return (
        <div className="shelf">
            <Ribbon color={props.color}>{props.title}</Ribbon>

            <TransitionGroup className="books">
                {props.books.map(book => (
                    <CSSTransition key={book.id} timeout={900} classNames="fade">
                        <Book data={book} onUpdateBook={props.onUpdateBook}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>

        </div>
    )
}

Shelf.defaultProps = {
    color: '#777777',
    books: []
}

Shelf.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    books: PropTypes.array
}

export default Shelf
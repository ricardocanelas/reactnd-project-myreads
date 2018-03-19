// External Depedencies
import React from 'react'
import PropTypes from 'prop-types'

// Our Depedencies
import Shelf from '../../components/shelf/Shelf'
import shelvesConfig from '../../config/shelvesConfig'

const Shelves = (props) => {
    
    const filterBooksByShelf = (shelfId) => {
        return props.books.filter((book) => book.shelf === shelfId)
    }

    const renderShelfByType = (key) => {
        const type = shelvesConfig.types[key]
        if(!type.isShelf) return

        return (
            <Shelf 
                key={key} 
                title={type.label} 
                color={type.color}
                books={filterBooksByShelf(type.id)} 
                onUpdateBook={props.onUpdateBook} 
            />
        )
    }

    return (
        <div>
            <h1>My Shelves</h1>

            {Object.keys(shelvesConfig.types).map(key => 
                renderShelfByType(key)
            )}
        </div>
    )
}

Shelves.defaultProps = {
    books: [],
    onUpdateBook: () => {}
}

Shelves.propTypes = {
    book: PropTypes.array,
    onUpdateBook: PropTypes.func.isRequired
}

export default Shelves;
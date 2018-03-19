// External Depedencies
import React from 'react'
import PropTypes from 'prop-types'

// Our Depedencies
import shelvesConfig from '../../../config/shelvesConfig'

// Style
import './options.css'

const Options = (props) => {

    const getClassName = (option) => {
        let className = ['book-option', `option-${option}`];
        if(option === props.selected) {
            className.push('selected')
        }
        return className.join(' ')
    }

    const renderOption = (key) => {
        const type = shelvesConfig.types[key]
        return (
            <div key={key} className={getClassName(type.id)} 
                onClick={() => props.onUpdateBook(type.id)} >
                {type.label}
            </div>
        )
    }

    return (
        <div className="book-options">
            {Object.keys(shelvesConfig.types).map(renderOption)}
        </div>
    )
}

Options.defaultProps = {
    selected: '',
    onUpdateBook: () => { }
}

Option.propTypes = {
    selected: PropTypes.string,
    onUpdateBook: PropTypes.func
}

export default Options
import React from 'react'
import PropTypes from 'prop-types';

// Style
import './ribbon.css'

const Ribbon = (props) => {

    let style = {backgroundColor: props.color};
    let className = ['ribbon'];

    if(props.left)  className.push('ribbon-left')
    if(props.right) className.push('ribbon-right')

    return (
        <div className={className.join(' ')} style={style}>
            <div className="ribbon-content">
                {props.children}
            </div>
        </div>
    )
}

Ribbon.defaultProps = {
    left: true,
    right: false
}

Ribbon.propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
}

export default Ribbon
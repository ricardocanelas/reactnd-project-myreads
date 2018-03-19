import React from 'react'

const Cover = (props) => {

    const { data } = props

    const imageStyle = data.hasImage ? {backgroundImage: `url(${data.image})`} : {}
    
    const className = data.hasImage ? ['book-cover'] : ['book-cover', 'no-image']

    return (
        <div className={className.join(' ')}>
            <div className="book-cover-img" style={imageStyle} />
        </div>
    )
}

export default Cover
// External Depedencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Icon, Spin } from "antd"

// Our Depedencies
import CardFlip from './../cardflip/CardFlip'
import Options from './options/Options'
import Image from './image/Image'

// Style
import './book.css'

class Book extends Component {

    interval = 0

    state = {
        isFlipped: false,
        isMouseEnter: false,
        isMovingTo: false
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState( (prevState) => {
            return { isFlipped: ! prevState.isFlipped }
        });
    }

    handleMouseLeave = (e) => {
        this.setState({ isMouseEnter: false });
        this.interval = setInterval(() => {
            if(this.state.isMouseEnter === false) {
                this.setState({ isFlipped: false })
            }
        }, 2000)
    }

    handleMouseEnter = (e) => {
        this.setState({ isMouseEnter: true })
        clearInterval(this.interval)
        this.interval = 0
    }

    updateBook = (shelf) => {
        this.setState({isMovingTo: true})
        this.props.onUpdateBook(this.props.data, shelf)
    }

    render () { 
        const { data } = this.props
        
        return (
            <div className="book" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
                <CardFlip isFlipped={this.state.isFlipped}>

                        {/* Front of the content */}
                        <div key="front" className="book-content book-front">
                            <Image data={data} />
                            <div className="book-title">{data.title}</div>
                            <div className="book-author">{data.authorsToString}</div>
                            <div className="btn-options" onClick={this.handleClick}>
                                <Icon type="arrow-right" />
                            </div>
                            <div className="book-more-info">
                                <Link to={`/book/${data.id}`}>more info</Link>
                            </div>
                        </div>

                        {/* Back of the content */}
                        <div key="back" className="book-content book-back">
                            <div className="book-title">Move to..</div>
                            <Options 
                                onUpdateBook={this.updateBook} 
                                selected={data.shelf}/>
 
                            {this.state.isMovingTo && (
                                <div className="book-loading">
                                    <Spin />
                                </div>
                            )}
                        </div>

                </CardFlip>
            </div>
        )
    }
}

Book.defaultProps = {
    data: {
        id: '',
        title: 'Undefiend',
        authors: [],
        shelf: '',
        imageLinks: {
            thumbnail: ''
        }
    },
    onUpdateBook: () => { }
}

Book.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        shelf: PropTypes.string,
        imageLinks: PropTypes.object
    }),
    onUpdateBook: PropTypes.func
}


export default Book
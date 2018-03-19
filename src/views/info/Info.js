// External Depedencies
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Spin } from "antd"

// Our Depedencies
import * as BooksAPI from '../../api/BooksAPI'

// Style
import './info.css'

class Info extends PureComponent {
    state = {
        book: {},
        isLoading: false,
        error: false
    }
    componentDidMount = () => {
        const { match } = this.props
        const id = match.params.id
        
        this.setState({isLoading: true})

        BooksAPI.get(id)
            .then(response => {
                this.setState({book: response, isLoading: false, error: false})
            })
            .catch(error => {
                this.setState({book: {}, isLoading: false, error: `ID (${id}) not found`})
            })
    }

    render () {
        const { book } = this.state

        const errorContainer = (
            <div className='error'>
                <h2>ERROR 404</h2>
                <p>The book not found</p><br/><br/><br/>
                <Link to='/'>Go to home</Link>
            </div>
        )

        const loadingContainer = (
            <div className='loading'>
                <Spin />Loading..
            </div>
        )

        const bookContainer = (
            <div className='info-book'>
                <h1>Book / {book.title}</h1>
                <p>{book.subtitle}</p>
                <p>{book.description}</p>

                <p><b>Ano: </b>{book.publishedDate}</p>
                <p><b>Author(s): </b>{book.authors}</p>
                <p><b>Pages: </b>{book.pageCount}</p>

                <div>
                    <a href={book.previewLink} className='btn' target="_blank" rel="noopener noreferrer">
                        More information
                    </a>

                    <Link to='/' className='btn'>Go to home</Link>
                </div>
            </div>
        )

        let content;

        if (this.state.error) {
            content = errorContainer
        } else if(this.state.isLoading) {
            content = loadingContainer
        } else {
            content = bookContainer
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

export default withRouter(Info);
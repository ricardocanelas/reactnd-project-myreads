// External Depedencies
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd';

// Our Dependencies
import * as BooksAPI from '../../api/BooksAPI'
import Header from './Header'

// Our Views
import About     from '../about/About'
import InfoBook  from '../info/Info'
import Shelves   from '../shelves/Shelves'
import Search    from '../search/Search'

// Style
import 'antd/dist/antd.css';
import './app.css';

class App extends Component {

    state = {
        showLoading: true,
        myBooks: [],
    }

    componentDidMount = () => {
        this.getMyBooks()
    }

    getMyBooks = () => {
        this.setState({ showLoading: true })
        BooksAPI.getAll().then(books => {
            this.setState({ showLoading: false, myBooks: books })
        })
    }

    updateBook = (book, shelf, callback = ()=>{}) => {
        if(shelf.trim() === '') return;
        BooksAPI.update(book, shelf).then((shelves) =>{
            this.updateAndCreateLocalBook(book, shelf)
            return callback()
        })
    }

    updateAndCreateLocalBook = (book, shelf) => {
        book.shelf = shelf
        this.setState(prevState => {
            return {
                myBooks: [
                    ...prevState.myBooks.filter(
                        elem => elem.id !== book.id
                    ),
                    book
                ]
            }
        })
    }

    render() {
        const loadingContainer = (
            <div className='loading-app'>
                <Spin />
                <span>Loading</span>
            </div>
        )

        const contentContainer = (
            <div>
                <Header />
                <Layout.Content className='main-content'>
                    <Layout className='wrap'>
                        <Switch>    
                            <Route exact path='/' render={() => ( 
                                <Shelves 
                                    books={this.state.myBooks} 
                                    onUpdateBook={this.updateBook} 
                                /> 
                            )}/>

                            <Route exact path='/search' render={() => ( 
                                <Search 
                                    myBooks={this.state.myBooks} 
                                    onUpdateBook={this.updateBook} 
                                /> 
                            )}/>

                            <Route exact path='/about' render={() => ( 
                                <About /> 
                            )}/>

                            <Route path='/book/:id' render={() => ( 
                                <InfoBook /> 
                            )} />

                            <Route render={() => (
                                <div>
                                    <h1>Page not found</h1>
                                    <p>Woops. Looks like this page doesn't exist.</p>
                                </div>
                            )} />
                        </Switch>
                    </Layout>
                </Layout.Content>
            </div>
        )

        return (
            <Layout className="layout">
                {this.state.showLoading ? loadingContainer : contentContainer}
            </Layout>
        );
    }
}

export default App;

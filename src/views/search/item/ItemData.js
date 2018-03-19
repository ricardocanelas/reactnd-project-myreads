// External Depedencies
import React from 'react'

// Our Depedencies
import shelvesConfig from '../../../config/shelvesConfig'
import BookModel from '../../../models/Book'

class ItemData extends BookModel {

    get status_html () {
        if (this.hasShelf) {
            const style = { backgroundColor: shelvesConfig.types[this.shelf].color}
            return (
                <div className="item-shelf" style={style}>
                    {shelvesConfig.types[this.shelf].label}
                </div>
            )
        }
        return '';
    }

    get published_html () {
        if(this.hasPublishedDate) {
            return (
                <div className="item-detail">
                    <span>Year: </span>
                    {this.publishedYear}
                </div>
            )
        }
    }

    get authors_html () {
        if(this.hasAuthors) {
            return (
                <div className="item-detail">
                    <span>Author(s): </span>
                    {this.authorsToString}
                </div>
            )
        }
    }

    get page_count_html () {
        if(this.hasPageCount) {
            return (
                <div className="item-detail">
                    <span>Pages: </span>
                    {this.pageCount}
                </div>
            )
        }
    }

    get image_html () {
        if(this.hasImage) {
            return (
                <img src={this.image} alt="" />
            )
        } else {
            return (<div className="no-image" />)
        }
    }

}

export default ItemData
class Book {
    title
    description
    shelf
    publishedDate
    authors
    pageCount
    imageLinks
    previewLink

    constructor(props) {
        for (var value of Object.keys(props)) {
            this[value] = props[value]
        }
    }

    static toClass (books) {
        if(Array.isArray(books)) {
            return books.map(book => new Book(book))
        } else if(books !== null && typeof books === 'object') {
            return new Book(books)
        }
    }

    get image () {
        return this.hasImage ? this.imageLinks.thumbnail.replace('&edge=curl', '') : ''
    }

    get hasImage () {
        return this.imageLinks && this.imageLinks.hasOwnProperty('thumbnail') ? true : false
    }

    get hasAuthors () {
        return this.authors ? true : false
    }

    get authorsToString () {
        return this.hasAuthors ? this.authors.join(', ') : ''
    }

    get hasShelf () {
        return this.shelf && this.shelf !== '' ? true : false
    }

    get hasPublishedDate () {
        return this.publishedDate ? true : false
    }

    get publishedYear () {
        return this.hasPublishedDate ? this.publishedDate.split('-')[0] : ''
    }

    get hasPageCount () {
        return this.pageCount && this.pageCount !== '' ? true : false
    }
}

export default Book
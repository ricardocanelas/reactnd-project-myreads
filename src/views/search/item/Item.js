import React from 'react'
import ItemData from './ItemData'

const Item = (props) => {

    let data = new ItemData(props.data)

    return (
        <li className="item">
            <div className="item-image">
                {data.image_html}
            </div>

            <div className="item-content">
                <div className="item-title">
                    {data.title}
                    {data.status_html}
                </div>

                <div className="item-details">
                    {data.published_html}
                    {data.authors_html}
                    {data.page_count_html}
                </div>

                <div className="item-description">
                    {data.description}
                </div>

                <div className="item-actions">
                    <select onChange={(e) => {
                        props.onUpdateBook(props.data, e.target.value)
                    }}>
                        <option value="">- move to -</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        </li>
    )
}

Item.defaultProps = {
    data: {}
}

export default Item
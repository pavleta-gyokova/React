import React from 'react';
import { Link } from 'react-router-dom';

function Venue(props) {
    const { id, title, location, pricePerNight, imageUrl, rating } = props.venue;
    return (
        <div className="venue col s12">
            <Link to={`/venue/${id}`}>
                <div className="image">
                    <img src={imageUrl} alt='Venue' />
                </div>
                <div className="location-stars">
                    <span className="location">{location}</span>
                    <span className="rating right"><i className="material-icons">star</i>{rating}</span>
                </div>
                <div className="title">{title}</div>
                <div className="price-per-night">${pricePerNight}/night</div>

            </Link>
        </div>
    )
}

export default Venue;
import React, { Component } from 'react';
import './Activity.css';
import {Link} from 'react-router-dom';

class Activity extends Component {

    // "id": 1,
    // "activityType": "KAYAKING",
    // "title": "Kayaking adventure",
    // "cost": 399,
    // "rating": 4.7,
    // "totalRatings": 131,
    // "image": "https://airbnb-clone-prexel-images.s3.amazonaws.com/activities/kayakingTour.jpg"

    render() {
        const { id, activityType, title, cost, rating, totalRatings, image } = this.props.activity
        return (
            <div className='activity'>
               <div className='img'>
                    <img src={image} alt='Activity' />
                </div>
                <div className='activity-type'>{activityType}</div>
                <div className='title'>{title}</div>
                <div className='cost'>From ${cost}/person</div>
                <div className='rating'> <i className="material-icons">star</i>{rating} ({totalRatings})</div>
            </div>

        )
    }
}

export default Activity;
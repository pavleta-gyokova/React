import React from 'react';
import './ListingItems.css';
import { Link } from "react-router-dom";

function ListingItems() {
    return (
        <Link to='/detail'>
        <div className='listing-items'>
            <img className="listing-image" src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
            <div className='listing-details'>
                <div className="listing-categories">
                    <span className='listing-category'>Buy</span>
                    <span className='listing-category'>Sell</span>
                </div>
            <span className='listing-title'>Single-Family Home - $275,000</span>
            <p className='listing-short-description'>4 beds 2 baths 2,539 sqft</p>
            <p className='listing-long-description'>Amazing home located in Northeast Columbia. This beautiful have a open floor plan with 4 bedroom and 2.5 baths. Its located on a corner lot with TWO drive ways and a 2 car garage. Open backyard that's fenced with an amazing patio deck area. Conveniently located near popular shopping stores and Sandhill.</p>
            <hr/>
            <span className='listing-time'> 2 days ago</span>
            </div>
        </div>
        </Link>
        
    )
}

export default ListingItems;

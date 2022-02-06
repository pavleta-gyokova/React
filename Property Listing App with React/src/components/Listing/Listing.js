import React from 'react';
import ListingItems from '../Listing Items/ListingItems';
import './Listings.css';

function Listing() {
    return (
        <div className='listing-section'>
            <ListingItems/>
            <ListingItems/>
            <ListingItems/>
            <ListingItems/>
            <ListingItems/>
            <ListingItems/>
        </div>
    )
}

export default Listing

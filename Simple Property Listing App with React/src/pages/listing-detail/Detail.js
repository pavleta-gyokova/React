import React from 'react';
import ListingDetail from '../../components/ListingDetail.js/ListingDetail';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Detail.css';

function Detail() {
    return (
        <div className='detail-page'>
            <ListingDetail/>
            <Sidebar/>
        </div>
    )
}

export default Detail

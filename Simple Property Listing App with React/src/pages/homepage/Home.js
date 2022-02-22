import React from 'react';
import Header from '../../components/Header/Header';
import Listing from '../../components/Listing/Listing';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

function Home() {
    return (
        <div>
             <Header />
            <div className='home-page'>
                <Listing/>
                <Sidebar/>
            </div>
        </div>

    )
}

export default Home

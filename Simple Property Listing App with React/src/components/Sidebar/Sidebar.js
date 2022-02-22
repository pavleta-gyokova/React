import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    return (
        <div className='sidebar-section'>
            <div className='sidebar-subsection'>
                <span className="sidebar-title">about me</span>
                <img className='sidebar-image' src='https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
                <p className='sidebar-text'> My name is Edward Russell. I started working in the real estate sphere in London. I have excellent knowledge of English, also speak German and Spanish and have a basic knowledge of Greek and Russian.</p>
            </div>
            <div className='sidebar-subsection'>
                <span className="sidebar-title">categories</span>
                <ul className='sidebar-categories'>
                    <li className='sidebar-category'>Buy</li>
                    <li className='sidebar-category'>Sell</li>
                    <li className='sidebar-category'>Rent</li>
                    <li className='sidebar-category'>Hostel</li>
                    <li className='sidebar-category'>B & B</li>
                    <li className='sidebar-category'>Hotel</li>
                </ul>
            </div>
            <div className='sidebar-subsection'>
                <span className='sidebar-title'>
                    follow me on:
                </span>
                <div className='sidebar-social-icons'>
                    <FontAwesomeIcon icon={faInstagram} className='sidebar-social-icon' />
                    <FontAwesomeIcon icon={faFacebook} className='sidebar-social-icon' />
                    <FontAwesomeIcon icon={faLinkedin} className='sidebar-social-icon' />
                    <FontAwesomeIcon icon={faTwitter} className='sidebar-social-icon' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar

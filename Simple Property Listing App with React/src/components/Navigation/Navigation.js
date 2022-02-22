import React from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <div className="navigation">
            <div className="left-navigation">
                <FontAwesomeIcon icon={faInstagram} className='social-icons'/>
                <FontAwesomeIcon icon={faFacebook} className='social-icons'/>
                <FontAwesomeIcon icon={faLinkedin} className='social-icons'/>
                <FontAwesomeIcon icon={faTwitter} className='social-icons'/>
            </div>
            <div className="center-navigation">
                <ul className="navigation-list">
                    <li className='navigation-list-item'>
                        <NavLink to='/'>HOME</NavLink></li>
                    <li className='navigation-list-item'>ABOUT</li>
                    <li className='navigation-list-item'>CONTACT</li>
                    <li className='navigation-list-item'>
                      <NavLink to='/create'>CREATE PROPERTY</NavLink></li>
                    <li className='navigation-list-item'>LOGOUT</li>
                </ul>
            </div>
            <div className="right-navigation">
                <img className='profile' src='https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
                <FontAwesomeIcon icon={faSearch} className='navigation-search' />
            </div>
        </div>
    )
}

export default Navigation

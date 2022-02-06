import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header-section'>
            <div className='hero-text-section'>
                <span className='hero-text-title'>marketplace</span>
                <span className='hero-text-subtitle'>property listing</span>
            </div>
            <img className='hero-image' src='https://images.pexels.com/photos/599459/pexels-photo-599459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
        </div>
    )
}

export default Header

import React, {Component} from 'react';
import './navBar.css';
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        let navColor = 'transparent'
        if(this.props.location.pathname !== '/'){
            navColor = 'black'
        }
        return(
            <div className="container-fluid nav">
                <div className='row'>
                    <nav className={navColor}>
                        <div className='nav-wrapper'>
                            <Link to='/' className='left'>&#x263C; AirBnB</Link>
                            <ul className='right'>
                                <li><Link to='/'>English (US)</Link> </li>
                                <li><Link to='/'>$ USD</Link> </li>
                                <li><Link to='/'>Become a host</Link> </li>
                                <li><Link to='/'>Help</Link> </li>
                                <li><Link to='/'>Sign up</Link> </li>
                                <li><Link to='/'>Log in</Link> </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default NavBar
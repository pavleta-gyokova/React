import React, { useEffect } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import openModal from '../../actions/openModal';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/Login/SignUp';
import logoutAction from '../../actions/logoutAction';

function NavBar(props) {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(openModal('closed', ''));
    }, [auth.token]);

    let navColor = 'transparent';
    if (props.location.pathname !== '/') {
        navColor = 'black'
    }

    return (
        <div className="container-fluid nav">
            <div className="row">
                <nav className={navColor}>
                    <div className="nav-wrapper">
                        <Link to="/" className="left"> Airbnb</Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/">English (US)</Link></li>
                            <li><Link to="/">$ USD</Link></li>
                            <li><Link to="/">Become a host</Link></li>
                            <li><Link to="/">Help</Link></li>
                            {auth.email
                                ? <>
                                    <li className='login-signup'><Link to='/account'>Hello, {auth.email}</Link></li>
                                    <li className='login-signup' onClick={() => dispatch(logoutAction())}>Logout</li>
                                </>
                                : <>
                                    <li className='login-signup' onClick={() => { dispatch(openModal('open', <SignUp />)) }}>Sign up </li>
                                    <li className='login-signup' onClick={() => { dispatch(openModal('open', <Login />)) }}> Log in</li>
                                </>}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

// function mapStateToProps(state) {
//     return {
//         auth: state.auth
//     }
// }

// function mapDispatchToProps(dispatcher) {
//     return bindActionCreators({
//         openModal: openModal,
//         logoutAction: logoutAction
//     }, dispatcher)
// }

export default NavBar;
import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import SignUp from './SignUp';
import axios from 'axios';
import swal from 'sweetalert';
import registerAction from '../../actions/registerAction';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    changeEmail = (e) => this.setState({ email: e.target.value })
    changePassword = (e) => this.setState({ password: e.target.value })
    submitLogin = async (e) => {
        e.preventDefault();
        const url = `${window.apiHost}/users/login`;
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const response = await axios.post(url, data);
        console.log(response.data)
        if (response.data.msg === "noEmail") {
            swal({
                title: "Please provide an email",
                icon: "error",
            })
        } else if (response.data.msg === "badPass") {
            swal({
                title: "Invalid email/password",
                text: "We don't have a match for that user name and password.",
                icon: "error",
            })
        } else if (response.data.msg === "loggedIn") {
            swal({
                title: "Success!",
                icon: "success",
            });
            this.props.registerAction(response.data);
        }
    }
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" className="browser-default" placeholder="Email address" onClick={this.changeEmail} />
                    <input type="password" className="browser-default" placeholder="Password" onClick={this.changePassword} />
                    <button className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div> Don't have an account?
                        <button className='links-btn' type='button' onClick={() => { this.props.openModal('open', <SignUp />) }}> Sign up</button>
                    </div>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal,
        registerAction: registerAction
    }, dispatcher)
}

export default connect(null, mapDispatchToProps)(Login);

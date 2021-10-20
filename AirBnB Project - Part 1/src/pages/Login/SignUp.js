import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import registerAction from '../../actions/registerAction';
import Login from './Login';
import SignUpInputFields from './SignUpFields';
import axios from 'axios';
import swal from 'sweetalert';





class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            lowerPartOfForm: <button type='button' onClick={this.showInputs} className="sign-up-button">Sign up with email</button>,
            email: '',
            password: ''
        }
    }
    changeEmail = (e) => { this.setState({ email: e.target.value }) }

    changePassword = (e) => { this.setState({ password: e.target.value }) }

    showInputs = (e) => {
        this.setState({
            lowerPartOfForm: <SignUpInputFields changeEmail={this.changeEmail} changePassword={this.changePassword} />
        })
    }
    submitLogin = async (e) => {
        e.preventDefault();
        // console.log(this.state.email);
        // console.log(this.state.password)
        const url = `${window.apiHost}/users/signup`;
        const data = {
            email: this.state.email,
            password: this.state.password
        };
        const response = await axios.post(url, data);
        if (response.data.msg === "userExists") {
            swal({
                title: "Email Exists",
                text: "The email you provided is already registered. Please try another!",
                icon: "error",
            })
        } else if (response.data.msg === "invalidData") {
            swal({
                title: "Invalid email/password",
                text: "Please provide a valid email and password!",
                icon: "error",
            })
        } else if (response.data.msg === "userAdded") {
            swal({
                title: "Success!",
                icon: "success",
            })
            this.props.registerAction(response.data)
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
                        {this.state.lowerPartOfForm}
                        <div className="divider"></div>
                        <div>Already have an account?
                    <button className='links-btn' type='button' onClick={() => { this.props.openModal('open', <Login />) }}> Log in</button>
                        </div>
                    </form>
                </div>

            )
        }

    }

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}    

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal,
        registerAction : registerAction
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

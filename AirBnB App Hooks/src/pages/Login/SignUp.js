import React, { useEffect, useState } from 'react';
import openModal from '../../actions/openModal';
import registerAction from '../../actions/registerAction';
import Login from './Login';
import SignUpInputFields from './SignUpFields';
import axios from 'axios';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';

function SignUp(props) {

    const dispatch = useDispatch();

    const [lowerPartOfForm, setLowerPartOfForm] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    useEffect(() => {
        setLowerPartOfForm(
            <button
                type='button'
                onClick={showInputs}
                className="sign-up-button">
                Sign up with email
            </button>
        )
    }, []);
    const showInputs = (e) => {
        setLowerPartOfForm(
            <SignUpInputFields
                changeEmail={(e) => changeEmail(e.target.value)}
                changePassword={(e) => changePassword(e.target.value)}
            />)
    }
    const submitLogin = async (e) => {
        e.preventDefault();
        const url = `${window.apiHost}/users/signup`;
        const data = {
            email: email,
            password: password
        };
        // resp.data.msg could be:
        // - invalidData
        // - userExists
        // - userAdded
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
            dispatch(registerAction(response.data));
        }
    }
    return (
        <div className="login-form">
            <form onSubmit={submitLogin}>
                <button className="facebook-login">Connect With Facebook</button>
                <button className="google-login">Connect With Google</button>
                <div className="login-or center">
                    <span>or</span>
                    <div className="or-divider"></div>
                </div>
                {lowerPartOfForm}
                <div className="divider"></div>
                <div>Already have an account?
                    <button className='links-btn' type='button' onClick={() => { dispatch(openModal('open', <Login />)) }}> Log in</button>
                </div>
            </form>
        </div>

    )

}

export default SignUp;
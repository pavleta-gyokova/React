import React from 'react'

function SignUpInputFields (props){
    return(
        <div className='sign-up-wrapper'>
            <div className='col m12'>
                <div className='input-field' id='email'>
                    <div className='form-label'>Email</div>
                    <input type='text' placeholder='Email' onChange={props.changeEmail} />
                </div>
            </div>
            <div className='col m12'>
                <div className='input-field' id='password'>
                    <div className='form-label'>Password</div>
                    <input type='password' placeholder='Password' onChange={props.changePassword} />
                </div>
            </div>
            <div className='col m12'>
                <button type='submit' className='btn red accent-2 sign-up-button' >Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpInputFields;
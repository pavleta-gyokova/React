import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      changeEmail('');
      changePassword('');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={(e) => changeEmail(e.target.value)}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={(e) => changePassword(e.target.value)}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
            </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

import React from 'react';
import { Link } from 'react-router-dom';
import { Register } from '../../Components/Form/Register';

export const SignUp = () => {
  return (
    <div className="formPage">
      <h2>Sign up</h2>
      <Register />
      <p>
        Have account? <Link to="/signIn">Sign in</Link>
      </p>
    </div>
  );
};

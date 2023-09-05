import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../Components/Form/Login';

export const SignIn = () => {
  return (
    <div className="formPage">
      <h2>Sign in</h2>
      <Login />
      <p>
        Not register? <Link to="/signUp">Create account</Link>
      </p>
    </div>
  );
};

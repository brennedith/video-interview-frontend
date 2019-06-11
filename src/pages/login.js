import React, { useState } from 'react';

import FullHeight from './components/FullHeight';
import LoginForm from './components/login/LoginForm';

import AuthService from '../services/auth';

const Login = ({ history }) => {
  const [flash, setFlash] = useState(null);

  const handleLogin = body => {
    const showFlash = () => setFlash(true);

    const { email, password } = body;

    if (!email || !password) return showFlash();

    AuthService.login({
      email,
      password
    })
      .then(({ data: user }) => {
        localStorage.setItem('user', JSON.stringify(user));

        history.push('/accounts');
      })
      .catch(showFlash);
  };

  return (
    <FullHeight centered>
      <LoginForm flash={flash} handleLogin={handleLogin} />{' '}
    </FullHeight>
  );
};

export default Login;

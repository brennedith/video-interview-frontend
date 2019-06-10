import React, { useState } from 'react';

import FullHeight from './components/FullHeight';
import LoginForm from './components/login/LoginForm';

import AuthService from '../sevices/auth';

const Login = () => {
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
        // TODO: Redirect to dashboard
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

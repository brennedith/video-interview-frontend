import React, { useState } from 'react';

import './LoginForm.css';

const LoginForm = ({ flash, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleLogin({
      email,
      password
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {flash && (
        <p className="notification is-warning">Please check your credentials</p>
      )}
      <label className="label">
        Email:
        <input
          className="input"
          type="email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
      </label>
      <label className="label">
        Password:
        <input
          className="input"
          type="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
      </label>
      <button className="button is-link" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

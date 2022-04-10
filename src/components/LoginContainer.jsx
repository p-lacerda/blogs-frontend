/* eslint-disable react/prop-types */
import React from 'react';

function LoginContainer({ user, onChange, onSubmit }) {
  const { name } = user;
  return (
    <div className="login-container">
      <h4>Welcome to CodeLeap network!</h4>
      <p>Please enter your username:</p>
      <input
        name="name"
        type="text"
        id="form-title"
        placeholder="John Doe"
        onChange={(e) => onChange(e)}
      />
      <button
        type="button"
        className={name.length === 0 ? 'button-primary-disabled' : 'button-primary'}
        disabled={name.length === 0}
        onClick={(e) => onSubmit(e)}
      >
        Enter
      </button>
    </div>
  );
}

export default LoginContainer;

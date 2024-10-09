import React from 'react';
import LoginForm from './LoginForm';
import LoginImage from './LoginImage';

const Login = () => {
  return (
    <div className="loginContenedor">
      <div className="loginCuadrito">
        <LoginImage />
        <div className="login-right">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Choose from '../pages/choose';
import { refreshTokenSetup } from '../utils/refreshToken';
import { TrendingUp } from '@material-ui/icons';
import { darken } from '@material-ui/core';
import GoogleButton from 'react-google-button'
const clientId =
  '706636386868-9eakka95v1798npejdlefgktknsg0gg2.apps.googleusercontent.com';
function Login() {
  let history = useHistory();
  if (localStorage.getItem('email') != null) {
    history.push("/choose");
  }
  async function redirect(res) {
    localStorage.setItem('email', res.profileObj.email);
    history.push("/choose");
    refreshTokenSetup(res);
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Login failed`
    );
  };

  return (
    <div>
      <GoogleLogin
        theme="dark"
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={redirect}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
      />

    </div>
  );
}

export default Login;

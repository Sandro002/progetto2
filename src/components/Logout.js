import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Welcome from '../pages/welcome';
import {useHistory} from 'react-router-dom';
const clientId =
  '706636386868-9eakka95v1798npejdlefgktknsg0gg2.apps.googleusercontent.com';

function Logout(props) {
  let history= useHistory();

  async function onSuccess () {
    props.setSign(false);
    console.log(props.sign);
    history.push('/');
  };

  return (
    <div>
      <button onClick={function(){history.push('/'); localStorage.removeItem('email')}}>logout</button>
    </div>
  );
}

export default Logout;

import React from 'react';
import logo from '../img/logo.png';
import margine from '../img/download.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../img/logo.png';
//import Logout from '../components/Logout';
import { AirlineSeatReclineExtra } from '@material-ui/icons';
import Login from '../components/Login';
import Grid from '@material-ui/core/Grid';
import { GoogleLogout } from 'react-google-login';
import Welcome from '../pages/welcome';
import { useHistory } from 'react-router-dom';
const clientId =
  '706636386868-9eakka95v1798npejdlefgktknsg0gg2.apps.googleusercontent.com';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'primary'
  }

}));
function Logout(props) {
  let history = useHistory();
  const classes = useStyles();
  async function onSuccess() {
    props.setSign(false);
    console.log(props.sign);
    history.push('/');
  };

  return (
    <form className={classes.form} noValidate>
      <Grid container justify="center">
      <img src={margine} className="App-logo" alt="logo" style={{ width: "350px", height: "50px" }} />
        <Button
          type="submit"
          width="100px"
          height="20px"
          variant="contained"
          color="primary"
          onClick={function () { history.push('/'); localStorage.removeItem('email') }}
          className={classes.submit}>
          Logout
        </Button>
      </Grid>
    </form>
  );
}

export default Logout;

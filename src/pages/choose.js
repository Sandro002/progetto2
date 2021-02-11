import React from 'react';
import logo from '../img/logo.jpg';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../img/logo.jpg';
import Logout from '../components/Logout';
import { AirlineSeatReclineExtra } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import Login from '../components/Login';
import Grid from '@material-ui/core/Grid';pu

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper2: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 0)
  },
  img: {
    margin: theme.spacing(0, 0, 0)
  },
  margine: {
    width: '175px',
    height: '35px',
  }
}));


export default function Choose(props) {
  let history = useHistory();

  const classes = useStyles();
  function stamps() {
    history.push("/stamps");
  }
  function oldStamps() {
    history.push("/oldStamps");
  }
  var i=localStorage.getItem('email');
  if(i==null)
  {
     history.push('/');
  }
  return (
    <Container component="main" maxWidth="xs">
      <Grid container justify="flex-start">
        <img src={logo} className="App-logo" alt="logo" style={{float : 'left'}}  className={classes.margine} />
      </Grid>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h2">
          Choose
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container justify="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={stamps}
              className={classes.submit}>
              Stamp
          </Button>
            <Typography component="h1" variant="h4">
              <div className={classes.paper2}>
                Or
          </div>
            </Typography>

            <Button
              onClick={oldStamps}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              View Previous Stamps
              
          </Button>
          </Grid>
          <Logout />
        </form>
      </div>
    </Container>
  );
}
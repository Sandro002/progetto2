import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../components/Login';
import '../components/Logout';
import Login from '../components/Login';
import Logout from '../components/Logout';
import logo from '../img/logo.jpg';
import margine from '../img/download.png';
import grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Welcome(props) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Grid container justify="center">
        <img src={margine} className="App-logo" alt="logo" style={{ width: "221px", height: "200px" }} />
        <img src={logo} className="App-logo" alt="logo" style={{ width: "350px", height: "70px" }} />
      </Grid>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container justify="center">
         <Login sign={props.sign} setSign={props.setSign}/>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../img/logo.jpg';
import Logout from '../components/Logout';
import { AirlineSeatReclineExtra } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import Login from '../components/Login';

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
  },
  avatar: {
    margin: theme.spacing(1),
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
    margin: theme.spacing(3, -52, 0)
  },
}));


export default function Choose(props) {
  let history= useHistory();
  const classes = useStyles();
  function timbra(){
    history.push("/timbra");
  }
  return (
    <Container component="main" maxWidth="xs">
      <img src={Logo} className={classes.img}/>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h2">
          Choose
        </Typography>
        <form className={classes.form} noValidate>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={timbra}
            className={classes.submit}>
            Stamp
          </Button>
          <Typography component="h1" variant="h4">
          <div className={classes.paper2}>
          Or
          </div>
        </Typography>
          <Button
            onClick={function(){history.push("/welcome")}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            view previous Stamps
          </Button>
          <Logout/>
        </form>
      </div>
    </Container>
  );
}
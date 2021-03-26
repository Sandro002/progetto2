import logo from '../img/logo.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Get from '../components/get';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Maps from '../components/maps';
import Clock from '../components/clock';
import { FormatAlignLeft, FormatAlignRight } from '@material-ui/icons';
import userEvent from '@testing-library/user-event';
import Post from '../components/post';
import { render } from '@testing-library/react';
import {useCallback, useEffect, useState} from "react";
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

//rimosso ASYNC prima di function
export default function Stamps(props) {

  let history = useHistory();
  const classes = useStyles();
  function choose() {
    history.push("/choose");
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('long', position.coords.longitude);
  });
  var i = localStorage.getItem('email');

  /*sostituite righe seguenti con codice fino alla riga 85 e sostituito a righe 101 e 102 result con datiListData
    var result = null;
  const run = async () => {
    result = await Get('timbra_NomeCognome');

  };
  await run();
   */

  const [datiListData, setDatiListData] = useState([]);

  const getDati = useCallback(async () => {
    const result = await Get('timbra_NomeCognome');
    setDatiListData(result);
  }, []);

  useEffect(() => {
    getDati();
  }, [getDati]);

  return (
    <div>
      <h2><Clock style={FormatAlignRight} /></h2>
      <Container component="main" maxWidth="xs">
        <Grid container justify="flex-start">
          <img src={logo} className="App-logo" alt="logo" style={{ float: 'left' }} className={classes.margine} />
        </Grid>
        <Grid container justify="flex-end" component="h3">
        </Grid>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            Stamp
                      </Typography>
          <Typography component="h4" variant="h6">
            <tr>Nome: {datiListData.name}</tr>
            <tr> Cognome: {datiListData.surname}</tr>
            <tr>E-Mail: {localStorage.getItem('email')}</tr>
            <tr container justify="center"><Maps /></tr>
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container justify="center">
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={function () { var r = Post(); console.log(r.response) }}
                className={classes.submit}>
                Conferma timbratura
                        </Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );

}

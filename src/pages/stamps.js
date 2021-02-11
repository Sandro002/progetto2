import logo from '../img/logo.jpg';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logout from '../components/Logout';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

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


export default function Stamps(props) {
  let history = useHistory();
  const classes = useStyles();
  function choose() {
    history.push("/choose");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Grid container justify="flex-start">
        <img src={logo} className="App-logo" alt="logo" style={{ float: 'left' }} className={classes.margine} />
      </Grid>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h2">
          Stamp
        </Typography>
        <Typography component="h4" variant="h6">
          <tr>Nome:</tr>
          <tr>Cognome:</tr>
          <tr>E-Mail:</tr>
          <tr>Data:</tr>
          <tr>Ora:</tr>
          <tr>Coordinate:</tr>
          <tr>Mappa:</tr>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container justify="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={choose}
              className={classes.submit}>
              Return to Menu'
             (questo conferma la timbratura)
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
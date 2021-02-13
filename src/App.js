import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Choose from './pages/choose';
import Welcome from './pages/welcome';
import Stamps from './pages/stamps';
import OldStamps from './pages/oldStamps';
import {Router,Route,Redirect, BrowserRouter, Switch} from 'react-router-dom'
import NotFound from './pages/notfound';


function App() {
  const [sign, setSign]=useState(false);
  return (
    <div className="App">
          <Switch>
            <Route exact path="/" >
              <Welcome sign={sign} setSign={setSign}/>
            </Route>
            <Route path="/choose">
              <Choose sign={sign} setSign={setSign}/>
            </Route>
            <Route path="/Welcome">
              <Welcome sign={sign} setSign={setSign}/>
            </Route>
            <Route path="/stamps">
              <Stamps/>
            </Route>
            <Route path="/oldStamps">
              <OldStamps/>
            </Route>
            <Route component={NotFound} />
          </Switch>
    </div>
  );
}

export default App;

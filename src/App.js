import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Choose from './pages/choose';
import Welcome from './pages/welcome';
import Timbra from './pages/timbra';
import {Router,Route,Redirect, BrowserRouter, Switch} from 'react-router-dom'

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
            <Route path="/timbra">
              <Timbra/>
            </Route>
          </Switch>
    </div>
  );
}

export default App;

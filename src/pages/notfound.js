import { FormatAlignCenter, FormatAlignLeft } from '@material-ui/icons';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../img/crying.jpg';
export default function NotFound()
{
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <table>
         <ul><h1>ERROR 404-not found :(</h1></ul>
        <ul><img src={logo} className="App-logo" alt="logo" style={{ width: "800px", height: "450px" }} /></ul>
        </table>
        </div>
    );
}
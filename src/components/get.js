import { LocalHospitalTwoTone } from '@material-ui/icons';
import React from 'react';
import Stamps from'../pages/stamps';
import bluebird from 'bluebird';
export default async function Get(foo)
{
  
    return new Promise(resolve => {
        fetch('/timbr/index.php?funzione=' + encodeURIComponent(foo) + '&mail=' + encodeURIComponent(localStorage.getItem('email')))
        .then(res => res.json())
        .then(
         (result) => {
            console.log('***');
            console.log(result);
            console.log('***');
            resolve (result);
         },
         (error) => {
             console.log('###');
             console.log(error);
            console.log('###');
        })
    });

}
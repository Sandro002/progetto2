import React from 'react';



export default async function Get(foo) {
  fetch('/timbr/index.php?funzione=' + encodeURIComponent(foo) + '&idutente=' + encodeURIComponent(localStorage.getItem('email')))
    .then(res => res.json())
    .then(
        (result) => {
            console.log('***');
            console.log(result);
            console.log('***');
        },
        (error) => {
            console.log('###');
            console.log(error);
            console.log('###');
        })
}
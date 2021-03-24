import React from 'react';


export default async function Get(foo) {
  fetch('/timbr/index.php?funzione=' + encodeURIComponent(foo) + '&mail=' + encodeURIComponent(localStorage.getItem('email')))
  .then(res => res.json())
  .then(
      (result) => {
          console.log('***');
          console.log(result);
          console.log('***');
          return result;
      },
      (error) => {
          console.log('###');
          console.log(error);
          console.log('###');
      })
      
}
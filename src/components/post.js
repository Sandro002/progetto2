import React from 'react';


export default async function Post() {
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mail: localStorage.getItem("email"), latitudine: localStorage.getItem("lat"), longitudine: localStorage.getItem("long")})
    };
  fetch('/timbr/index.php',requestOptions)
  .then(res => res.json())
  .then(
      (result) => {
          console.log('***');
          //console.log(result.response);
          console.log('***');
          if(result.response!=true) 
          {
              window.alert("ERRORE")
        }

        else{
              window.alert("Timbratura effettuata :)")
        }
          return result;
      },
      (error) => {
          console.log('###');
          console.log(error);
          console.log('###');
      })
      
}
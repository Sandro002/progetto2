import React from 'react';

import axios from 'axios';

export default async function Get() {


    try {
      const response = await axios.get('http://timbrature.iplusservice.it?User:timbrature-ips-it&Pwd:DYzbkFGQZpDwC9pM');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}
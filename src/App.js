import './style/Seccion1.css';
import './style/Seccion2.css';
import './style/Seccion3.css';
import './style/Seccion4.css';
import './style/Seccion5.css';
import './style/Seccion6.css';
import './style/Seccion7.css';
import './style/Seccion8.css';
import './style/Footer.css';
import './style/RespMax-width1200.css';
import './style/RespMax-width1040.css';
import './style/RespMax-width820.css';
import './style/RespMax-width640.css';



import { Seccion1 } from './components/Seccion1';
import { Seccion2 } from './components/Seccion2';
import { Seccion3 } from './components/Seccion3';
import { Seccion4 } from './components/Seccion4';
import { Seccion5 } from './components/Seccion5';
import { Seccion6 } from './components/Seccion6';
import { Seccion7 } from './components/Seccion7';
import { Seccion8 } from './components/Seccion8';
import { Footer } from './components/Footer';

import React from 'react'
import { UserContext } from './context/UserContext';
import { useState } from 'react';

export const App = () => {

  const [userName, setUserName] = useState('');

  return (

    <UserContext.Provider value={{ userName, setUserName }}>
      <div>
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
        <Seccion6 />
        <Seccion7 />
        <Seccion8 />
        <Footer />
      </div>
    </UserContext.Provider>


  )
}


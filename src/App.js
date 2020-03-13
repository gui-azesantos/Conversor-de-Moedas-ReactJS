import React from 'react';

import './App.css';
import Conversor from './Components/Conversor/Conversor'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="convert">
        <Conversor Moeda1="USD" Moeda2="BRL"></Conversor>
        <Conversor Moeda1="BRL" Moeda2="USD"></Conversor>
      </div>
      <div className="convert">
        <Conversor Moeda1="EUR" Moeda2="BRL"></Conversor>
        <Conversor Moeda1="BRL" Moeda2="EUR"></Conversor>
      </div>
      <div className="convert">
        <Conversor Moeda1="JPY" Moeda2="BRL"></Conversor>
        <Conversor Moeda1="BRL" Moeda2="JPY"></Conversor>
      </div>
      <div className="convert">
        <Conversor Moeda1="CNY" Moeda2="BRL"></Conversor>
        <Conversor Moeda1="BRL" Moeda2="CNY"></Conversor>
      </div>
      <div className="convert">
        <Conversor Moeda1="ARS" Moeda2="BRL"></Conversor>
        <Conversor Moeda1="BRL" Moeda2="ARS"></Conversor>
      </div>
      <div className="convert">
        <Conversor Moeda1="CLP" Moeda2="BRL"></Conversor>
        <Conversor Moeda1="BRL" Moeda2="CLP"></Conversor>
      </div>
    </div>
  );
}

export default App;

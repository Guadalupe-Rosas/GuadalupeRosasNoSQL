import React from 'react';
import logo from './Assets/Images/logo.svg';
import './Assets/Css/App.css';

//importar componente 

import MiComponente from './Components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (
  <div>
    <h2>Hola, soy {nombre}</h2>
    <h3>Tengo {edad} años</h3>
  </div>

  );

  return presentacion;
}

function App() {
  var nombre = "Guadalupe Rosas"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hola bienvenido al curso de react!! 
        </p>


        {HolaMundo(nombre, 21)}
        
        <section className="componentes">

          <MiComponente/> 

        </section>

      </header>
     

    </div>
  );
}

export default App;

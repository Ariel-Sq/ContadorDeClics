import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0)
  };

  return (
    <div className='App'>
     <div className='freeCodeCamp-logo-contenedor'>
      <img 
        className='freeCodeCamp-logo'
        src={freeCodeCampLogo}
        alt='Logo Free Code Camp'
      />
     </div>
     <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonClic={true} 
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;

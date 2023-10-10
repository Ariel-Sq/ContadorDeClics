//Este archvio NO importamos react. Porque en las versiones nuevas (17+) no hace falta.
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonClic, manejarClic }) {
  return (
    <button className={ esBotonClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>
  )
}

export default Boton;
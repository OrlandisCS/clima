import React, { useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';


const Formulario = ({busqueda, setBusqueda, setConsultar}) => {
 
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;

  //FUncion que coloca los elementos en el state
  const handleChange = (e) => {
    //FUncion que actuliza los elementos del state
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return; 
    }  
    setError(false);
    setConsultar(true);
    //PAsar al componente principal
  };
  return (
    <form onSubmit={handleSubmit}>
    {error ? <Error mensaje="Todos los compos son obligatorios" /> : null }

      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select  name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="" disabled>
            -- Seleccione un país --
          </option>

          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">País:</label>
      </div>

      <div className="input-field col s12">
        <button 
        type="submit" 
        className="waves-effect waves-light btn-large btn-block yellow accent-4 btn-clima"
        >Buscar Clima </button>
      </div>
    </form>
  );
};
  Formulario.propTypes ={
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired,
  }
export default Formulario;

// Este es un ejemplo en React para capturar los valores seleccionados por el usuario
import React, { useState } from 'react';

function PersonajeForm() {
  const [generoSexo, setGeneroSexo] = useState('');
  const [generoLiterario, setGeneroLiterario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/generar-personaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ generoSexo, generoLiterario }),
      });

      const data = await response.json();
      console.log('Personaje generado:', data);
    } catch (error) {
      console.error('Error al generar personaje:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Género de Sexo:
        <select value={generoSexo} onChange={(e) => setGeneroSexo(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
          <option value="no-binario">No binario</option>
        </select>
      </label>

      <label>
        Género Literario:
        <select value={generoLiterario} onChange={(e) => setGeneroLiterario(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="fantasia">Fantasía</option>
          <option value="ciencia-ficcion">Ciencia Ficción</option>
          <option value="misterio">Misterio</option>
        </select>
      </label>

      <button type="submit">Generar Personaje</button>
    </form>
  );
}

export default PersonajeForm;


// src/components/MainSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const Dropdown = styled.select`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #A8DADC;
`;

const MainSection = ({ onGenerate }) => {
  const [generoSexo, setGeneroSexo] = useState('');
  const [generoLiterario, setGeneroLiterario] = useState('');

  const handleGenerate = () => {
    if (generoSexo && generoLiterario) {
      onGenerate({ generoSexo, generoLiterario });
    }
  };

  return (
    <MainContainer>
      <h2>Crea tu Personaje</h2>
      <Dropdown value={generoSexo} onChange={(e) => setGeneroSexo(e.target.value)}>
        <option value="">Selecciona el género</option>
        <option value="femenino">Femenino</option>
        <option value="masculino">Masculino</option>
        <option value="no binario">No Binario</option>
      </Dropdown>
      <Dropdown value={generoLiterario} onChange={(e) => setGeneroLiterario(e.target.value)}>
        <option value="">Selecciona el género literario</option>
        <option value="fantasia">Fantasía</option>
        <option value="ciencia ficción">Ciencia Ficción</option>
        <option value="historia">Historia</option>
        <option value="terror">Terror</option>
        <option value="romance">Romance</option>
      </Dropdown>
      <Button onClick={handleGenerate}>Generar Personaje</Button>
    </MainContainer>
  );
};

export default MainSection;

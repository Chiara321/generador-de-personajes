// src/components/ImageGenerator.js
import React, { useState } from 'react';
import styled from 'styled-components';

const GeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 100px;
  margin-top: 20px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const GenerateButton = styled.button`
  margin-top: 10px;
  background-color: #6A0F8C;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #A8DADC;
  }
`;

const ImageGenerator = ({ setImageUrl, setLoading }) => {
  const [description, setDescription] = useState('');

  const handleGenerateImage = async () => {
    setLoading(true); // Iniciar carga
    const response = await fetch(`https://young-mouse-caa6.chiaraseco8.workers.dev/?prompt=${encodeURIComponent(description)}`);
    const imageUrl = await response.url; // Obtener la URL de la imagen generada
    setImageUrl(imageUrl); // Enviar la URL al componente padre
    setLoading(false); // Finalizar carga
  };

  return (
    <GeneratorContainer>
      <TextArea 
        placeholder="Escribe una descripción del personaje aquí..."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <GenerateButton onClick={handleGenerateImage}>Generar Imagen</GenerateButton>
    </GeneratorContainer>
  );
};

export default ImageGenerator;





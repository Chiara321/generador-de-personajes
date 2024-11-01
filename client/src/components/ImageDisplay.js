// src/components/ImageDisplay.js
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 40px 0; /* Agregar margen superior e inferior */
`;

const Image = styled.img`
  width: 400px; /* Tamaño de la imagen */
  height: auto;
  border-radius: 8px; /* Redondear bordes */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para mejorar el estilo */
`;

const ImageDisplay = ({ imageUrl, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <p>Generando imagen, por favor espera...</p> /* Mensaje de carga */
      ) : imageUrl ? (
        <ImageContainer>
          <Image src={imageUrl} alt="Generated" />
        </ImageContainer>
      ) : (
        <p>No se ha generado ninguna imagen aún.</p>
      )}
    </div>
  );
};

export default ImageDisplay;


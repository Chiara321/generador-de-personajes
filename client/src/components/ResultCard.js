// src/components/ResultCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F1FAEE;
  padding: 20px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 60%;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h3`
  color: #1D3557;
`;

const Description = styled.p`
  color: #6A0F8C;
`;

const ResultCard = ({ nombre, descripcion }) => (
  <CardContainer>
    <Title>{nombre || "Nombre del Personaje"}</Title>
    <Description>{descripcion || "Descripción del Personaje"}</Description>
  </CardContainer>
);

export default ResultCard;

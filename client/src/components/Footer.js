// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F1FAEE;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`;

const FooterText = styled.p`
  color: #1D3557;
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2024 Generador de Personajes. Todos los derechos reservados.</FooterText>
  </FooterContainer>
);

export default Footer;

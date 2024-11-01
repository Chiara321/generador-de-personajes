// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  background-color: #457B9D;
  color: #FFFFFF;
  padding: 20px;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

const Header = () => (
  <HeaderContainer>
    Generador de Personajes
  </HeaderContainer>
);

export default Header;
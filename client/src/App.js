// src/App.js
import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ResultCard from './components/ResultCard';
import ImageGenerator from './components/ImageGenerator';
import ImageDisplay from './components/ImageDisplay';
import Footer from './components/Footer';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: 20px 0;
`;

const App = () => {
  const [personaje, setPersonaje] = useState({ nombre: '', descripcion: '' });
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setLoading] = useState(false); // Estado de carga

  const generarPersonaje = async ({ generoSexo, generoLiterario }) => {
    try {
      const response = await fetch('http://localhost:3001/generar-personaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ generoSexo, generoLiterario }),
      });
      const data = await response.json();
      setPersonaje({ nombre: data.nombre, descripcion: data.descripcion });
    } catch (error) {
      console.error('Error al generar personaje:', error);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainSection onGenerate={generarPersonaje} />
      <ResultsContainer>
        <ResultCard nombre={personaje.nombre} descripcion={personaje.descripcion} />
        <ImageGenerator setImageUrl={setImageUrl} setLoading={setLoading} /> {/* Actualizado */}
      </ResultsContainer>
      <ImageDisplay imageUrl={imageUrl} isLoading={isLoading} /> {/* Mostrar el estado de carga y la imagen */}
      <Footer />
    </>
  );
};

export default App;





// src/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: linear-gradient(to bottom, #A8DADC, #457B9D);
    font-family: 'Poppins', sans-serif;
    color: #1D3557;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: #6A0F8C;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  button:hover {
    background-color: #A8DADC;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .result-card {
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #F1FAEE;
    margin: 20px;
  }
`;

export default GlobalStyles;

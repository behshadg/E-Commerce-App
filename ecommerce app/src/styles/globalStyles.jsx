import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset default styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Define a consistent font and color scheme */
  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    background-color: #f5f5f5;
  }

  /* Headings and typography */
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  /* Buttons */
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default GlobalStyles;

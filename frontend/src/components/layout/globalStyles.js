import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../../images/Flat-Mountains.svg";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poiret One', cursive; 
    text-decoration: none;
    box-sizing: border-box;
    color: ${({ theme }) => theme.primaryLight};
    font-size: 16px;
    letter-spacing: 1px;
    -webkit-tap-highlight-color: transparent;
    font-weight: 100;
    margin: 0;
    text-decoration: none;
  }
  html, body {
    margin: 0;
    padding: 0;
    background-color: rgba(15, 15, 15, 1);
    background-image: url(${BackgroundImage});
    background-attachment: fixed;
    background-size: cover;
  }
 
`;

export default GlobalStyles;

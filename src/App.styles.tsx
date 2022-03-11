import { createGlobalStyle } from 'styled-components';
import fontProject from './assets/fonts/OpenSans.ttf';
import normalize from './index.css'

export const GlobalStyles = createGlobalStyle`


  @font-face {
    src: url(${fontProject});
    font-family: Open Sans;
  }

  body {
    font-family: Open Sans;
  }

  input,button{
    border: none;
  }

  input:focus, textarea:focus, select:focus{
      outline: none;
  }

  @import url(${normalize})
`;

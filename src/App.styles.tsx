import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import fontProject from './assets/fonts/OpenSans.ttf';

export const GlobalStyles = createGlobalStyle`
  // ${normalize}
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
`;

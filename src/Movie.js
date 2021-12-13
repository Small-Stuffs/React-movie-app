import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import MovieSection from './components/MovieSection';

const GlobalStyle = createGlobalStyle`
body {
  
    --color-white: #fff;
    --color-black: #000;
    --color-black-a60: rgba(var(--color-black), 0.60);
    --color-black-a87: rgba(var(--color-black), 0.87);
    --color-grey: #444;
    --color-yellow: #ffbe28;
    --color-blue-dark: #0e0e41;
    --typography-roboto: 'Roboto', sans-serif;
    --font-medium: 500;
    --font-black: 900;
    --transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    background-color: var(--color-blue-dark);
    font-family: var(--typography-roboto);
    font-size: 16px;
}
.page {
  height:auto;
  min-height:100vh;
  overflow-x:hidden;
  overflow-y:auto;
  position:relative;
  width:100%;
}
`;

const Movie = () => {
  return (
    <Fragment>
      <MovieSection />
      <GlobalStyle />
    </Fragment>
  );
};

export default Movie;

import React, { PureComponent, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
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

// const Movie = () => {
const API_KEY = 'c1018a330183f93ffcc6df16fbfe581f';

class Movie extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.searchMovies = this.searchMovies.bind(this);
  }
  searchMovies(term) {
    console.log('Search:', term);
    // AXIOS

    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`;

    axios
      .get(searchQuery)
      .then((response) => {
        this.setState({
          movies: response.data.results,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
       });
  }

  render() {
    return (
      <Fragment>
        <MovieSection
          movieResults={this.state.movies}
          onSearchTermChange={this.searchMovies}
        />
        <GlobalStyle />
      </Fragment>
    );
  }
}

export default Movie;

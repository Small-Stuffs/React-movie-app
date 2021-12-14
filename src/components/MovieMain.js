import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MovieMain = (props) => {
  console.log(props.movieResults);
  return (
    <StyledMain>
      <SearchForm onSearchTermChange={props.onSearchTermChange} />
      <MovieResults movieResult={props.movieResults} />
    </StyledMain>
  );
};

export default MovieMain;

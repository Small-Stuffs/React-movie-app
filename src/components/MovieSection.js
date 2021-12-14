import React from 'react';
import styled from 'styled-components';
import MovieHeader from './MovieHeader';
import MovieMain from './MovieMain';
const StyledMovieSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;
const MovieSection = (props) => {
  return (
    <StyledMovieSection>
      <MovieHeader />
      <MovieMain
        movieResults={props.movieResults}
        onSearchTermChange={props.onSearchTermChange}
      />
    </StyledMovieSection>
  );
};

export default MovieSection;

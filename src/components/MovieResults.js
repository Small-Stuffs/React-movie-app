import React from 'react';
import MovieResultItem from './MovieResultItem';
import styled from 'styled-components';
import rem from '../helpers/rem';
const StyledResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${rem(40)} ${rem(16)} 0;
`;
const MovieResults = ({ movieResult }) => {
  const movieItems = movieResult.map((movie) => {
    return <MovieResultItem movie={movie} />;
  });
  return <StyledResults>{movieItems}</StyledResults>;
};

export default MovieResults;

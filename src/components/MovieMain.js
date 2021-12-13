import React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MovieMain = () => {
  return (
    <StyledMain>
      <SearchForm />
    </StyledMain>
  );
};

export default MovieMain;

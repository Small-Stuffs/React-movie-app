import React from 'react';
import styled from 'styled-components';
import StarIcon from './StarIcon';

const StyledRating = styled.div`
  align-items: center;
  display: flex;
`;

const Rating = ({ rating }) => {
  return (
    <StyledRating>
      <StarIcon size="small" />
      <div>{rating}</div>
    </StyledRating>
  );
};

export default Rating;

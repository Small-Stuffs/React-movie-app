import React from 'react';
import rem from '../helpers/rem';
import styled from 'styled-components';
import Rating from './Rating';

const StyledItem = styled.a`
  background-color: var(--color-white);
  display: block;
  border-radius: ${rem(4)};
  color: var(--color-black-a87);
  margin-bottom: ${rem(8)};
  margin-right: ${rem(4)};
  text-decoration: none;
  width: calc(50% - 4px);

  &:nth-child(even) {
    margin-left: ${rem(4)};
    margin-right: 0;
  }
`;

const StyledItemImgWrapper = styled.div`
  height: ${rem(140)};
  overflow: hidden;
  pointer-events: none;
`;

const StyledItemImg = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const StyledItemContent = styled.div`
  padding: ${rem(16)};
  pointer-events: none;
`;

const StyledItemTitle = styled.h2`
  font-size: ${rem(20)};
  font-weight: var(--font-medium);
  margin: 0 0 ${rem(15)};
`;

const StyledItemDetails = styled.div`
  align-items: center;
  color: var(--color-black-a60);
  display: flex;
  font-size: ${rem(14)};
  justify-content: space-between;
`;

const MovieResultItem = ({ movie }) => {
  const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const releaseYear = movie.release_date.split('-')[0];

  return (
    <StyledItem key={movie.id.toString()} href="#" class="c-results__item">
      <StyledItemImgWrapper class="c-results__img">
        <StyledItemImg src={moviePoster} alt="Alice in Wonderland" />
      </StyledItemImgWrapper>
      <StyledItemContent>
        <StyledItemTitle>{movie.title}</StyledItemTitle>
        <StyledItemDetails>
          <div>{releaseYear}</div>
          <Rating rating={movie.vote_average} />
        </StyledItemDetails>
      </StyledItemContent>
    </StyledItem>
  );
};

export default MovieResultItem;

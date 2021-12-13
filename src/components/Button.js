import React from 'react';
import styled from 'styled-components';
import rem from '../helpers/rem';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: none;
  border: 0;
  margin: 0;
  padding: 0;
`;
const StyledSearchButton = styled(StyledButton)`
  background-color: var(--color-yellow);
  border-bottom-right-radius: ${rem(4)};
  border-top-right-radius: ${rem(4)};
  padding: ${rem(16)};
  position: absolute;
  top: 0;
`;

const Button = ({ appearance, children }) => {
  if (appearance === 'search') {
    return <StyledSearchButton>{children}</StyledSearchButton>;
  }
  return <StyledButton appearance={appearance}>{children}</StyledButton>;
};
Button.propTypes = {
  /** Adds a base styling to the button */
  appearance: PropTypes.oneOf(['search', 'back']).isRequired,
};

Button.defaultProps = {
  appearance: 'search',
};

export default Button;

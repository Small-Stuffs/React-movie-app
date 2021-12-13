import React from 'react';
import styled from 'styled-components';
import rem from '../helpers/rem';

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => (props.size === 'small' ? rem(2) : rem(52))};

  ${(props) => props.size === 'small' && 'transform:scale(0.6) ;'}
`;

const Logo = (props) => {
  return (
    <StyledLogo size={props.size}>
      <svg
        width="66"
        height="52"
        viewBox="0 0 66 52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Movie app logo</title>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#FFF"
            d="M2 22l2.156 29h24.071l3.675-17.17h4.196L39.773 51h24.071L66 22z"
          />
          <path
            d="M39.321 50.875h23.37l2.099-27.75H1.21l2.1 27.75h23.369l3.626-16.65a.578.578 0 0 1 .57-.446h4.25c.276 0 .514.186.57.447l3.626 16.649zM63.233 52H38.849a.578.578 0 0 1-.571-.447l-3.626-16.649h-3.304l-3.626 16.65a.579.579 0 0 1-.57.446H2.767a.575.575 0 0 1-.581-.521L0 22.603a.553.553 0 0 1 .155-.424A.59.59 0 0 1 .583 22h64.834a.59.59 0 0 1 .427.18.55.55 0 0 1 .154.423L63.815 51.48a.575.575 0 0 1-.582.521z"
            fill="#0E0E41"
          />
          <path
            d="M41.293 48.83h18.715l1.708-22.803H4.024L5.732 48.83h18.715l3.611-16.744a.577.577 0 0 1 .569-.45h8.486c.275 0 .512.187.568.45l3.612 16.744zm19.255 1.132H40.82a.577.577 0 0 1-.568-.45l-3.61-16.744h-7.545l-3.612 16.744a.577.577 0 0 1-.568.45H5.192a.575.575 0 0 1-.58-.525L2.82 25.503a.555.555 0 0 1 .153-.427.588.588 0 0 1 .425-.18h58.943a.59.59 0 0 1 .425.18c.11.115.166.27.154.427l-1.793 23.934a.575.575 0 0 1-.58.525z"
            fill="#0E0E41"
          />
          <path
            d="M42.114 28.014h14.591c1.522 0 2.723 1.26 2.612 2.738L58.29 44.476c-.1 1.334-1.24 2.367-2.613 2.367H45.074c-1.24 0-2.31-.846-2.564-2.028l-2.96-13.724c-.342-1.585.9-3.077 2.564-3.077"
            fill="#F26166"
          />
          <path
            d="M23.229 44.815c-.255 1.182-1.324 2.028-2.564 2.028H10.063c-1.373 0-2.513-1.033-2.613-2.367L6.422 30.752c-.11-1.479 1.09-2.738 2.613-2.738h14.59c1.664 0 2.906 1.491 2.564 3.078l-2.96 13.723z"
            fill="#FFBE28"
          />
          <path
            d="M.58 21.908L5.806 1.951C6.18.638 7.998.423 8.687 1.609a11.76 11.76 0 0 1 1.594 5.904v14.395H.58z"
            stroke="#0E0E41"
            strokeWidth=".6"
            fill="#FFF"
          />
          <path
            d="M65.159 21.908L59.935 1.951C59.558.638 57.74.423 57.053 1.609a11.759 11.759 0 0 0-1.594 5.904v14.395h9.7z"
            stroke="#0E0E41"
            strokeWidth=".6"
            fill="#FFF"
          />
        </g>
      </svg>
    </StyledLogo>
  );
};

export default Logo;
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainButton = ({ buttonText, linkTo }) => {
  return (
    <StyledMainButton>
      <NavLink to={linkTo}>{buttonText}</NavLink>
    </StyledMainButton>
  );
};

const StyledMainButton = styled.button`
  background: ${(props) => props.theme.primaryColors.darkCyan};
  font-size: 1.8rem;
  font-family: 'Crimson Text', serif;
  line-height: 2.5rem;
  font-weight: 900;
  width: 21rem;
  height: 5rem;
  border: none;
  border-radius: 0.6rem;
  a,
  &:hover {
    color: ${(props) => props.theme.primaryColors.lightCream};
  }
  &:hover {
    background: #66d2cf;
  }
  &:focus {
    outline: none;
  }
`;

export { MainButton };

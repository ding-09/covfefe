import React from 'react';
import styled from 'styled-components';
import BeanLogo from '../assets/home/desktop/bean.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <StyledHeader>
      <section className="logo-title">
        <img src={BeanLogo} alt="coffee bean logo" />
        <h1>covfefe</h1>
      </section>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Create your plan</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-title {
    display: flex;
    h1 {
      font-size: 2.4rem;
      font-style: italic;
      color: ${(props) => props.theme.primaryColors.darkGreyBlue};
      padding-left: 1rem;
    }
  }
  nav {
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        padding-left: 3.3rem;
      }
    }
  }
`;

export default Header;

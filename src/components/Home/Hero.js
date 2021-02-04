import React from 'react';
import styled from 'styled-components';
import HeroImg from '../../assets/home/desktop/image-hero-coffeepress.jpg';
import { MainButton } from '../../styles/Buttons';

const Hero = () => {
  return (
    <StyledHero>
      <section className="hero-text">
        <h1>
          Great Coffee <br></br>Made Simple.
        </h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <MainButton buttonText="Create your plan" linkTo="/plan" />
      </section>
    </StyledHero>
  );
};

const StyledHero = styled.section`
  margin-top: 1.5rem;
  height: 60rem;
  background: url(${HeroImg});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  padding-left: 5.8rem;
  margin-bottom: 13.5rem;
  border-radius: 1rem;
  .hero-text {
    max-width: 50rem;
    color: ${(props) => props.theme.primaryColors.lightCream};
    h1 {
      font-style: italic;
      margin-bottom: 3.2rem;
    }
    p {
      margin-bottom: 5.5rem;
      color: rgba(254, 252, 247, 0.8);
      width: 90%;
    }
  }
`;

export default Hero;

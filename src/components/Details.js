import React from 'react';
import styled from 'styled-components';
import { MainButton } from '../styles/Buttons';

const Details = () => {
  return (
    <StyledDetails>
      <h4>How it works</h4>
      <div className="styled-line">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <section className="details">
        <article className="detail-card">
          <h1>01</h1>
          <h3>
            Pick your <br></br>coffee
          </h3>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </article>
        <article className="detail-card card2">
          <h1>02</h1>
          <h3>Choose the frequency</h3>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </article>
        <article className="detail-card">
          <h1>03</h1>
          <h3>
            Receive and <br></br>enjoy!
          </h3>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </article>
      </section>
      <MainButton buttonText="Create your plan" linkTo="/plan" />
    </StyledDetails>
  );
};

const StyledDetails = styled.section`
  margin: 8rem auto 20rem;
  width: 85%;
  h4 {
    color: ${(props) => props.theme.primaryColors.grey};
  }
  .styled-line {
    margin-top: 8rem;
    position: relative;
    width: 76rem;
    border: 1px solid ${(props) => props.theme.primaryColors.paleOrange};
    .circle {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      position: absolute;
      z-index: 999;
      top: -1.5rem;
      display: inline-block;
      border: 2px solid ${(props) => props.theme.primaryColors.darkCyan};
      background: ${(props) => props.theme.primaryColors.lightCream};
    }
    .circle2 {
      left: 35rem;
    }
    .circle3 {
      left: 73rem;
    }
  }
  .details {
    margin-top: 8rem;
    margin-bottom: 6.4rem;
    width: 100%;
    display: flex;
    .detail-card {
      flex: 0 1 29rem;
      h1 {
        color: ${(props) => props.theme.primaryColors.paleOrange};
      }
      h3 {
        margin-top: 3.8rem;
        margin-bottom: 4.2rem;
      }
    }
    .card2 {
      margin: 0 9rem;
    }
  }
`;

export default Details;

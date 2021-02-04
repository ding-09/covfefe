import React from 'react';
import styled from 'styled-components';
import CoffeeBeanIcon from '../../assets/home/desktop/icon-coffee-bean.svg';
import GiftIcon from '../../assets/home/desktop/icon-gift.svg';
import TruckIcon from '../../assets/home/desktop/icon-truck.svg';

const Perks = () => {
  return (
    <StyledPerks>
      <section className="perks-text">
        <h4>Why choose us?</h4>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </section>
      <section className="perks-details">
        <article className="perk-card">
          <img src={CoffeeBeanIcon} alt="coffee bean icon" />
          <h4>Best quality</h4>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </article>
        <article className="perk-card">
          <img src={GiftIcon} alt="coffee bean icon" />
          <h4>Exclusive benefits</h4>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </article>
        <article className="perk-card">
          <img src={TruckIcon} alt="coffee bean icon" />
          <h4>Free shipping</h4>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </article>
      </section>
    </StyledPerks>
  );
};

const StyledPerks = styled.section`
  height: 57rem;
  width: 100%;
  background: #2c343e;
  border-radius: 1rem;
  position: relative;
  color: ${(props) => props.theme.primaryColors.lightCream};
  margin-bottom: 28rem;
  .perks-text {
    position: absolute;
    top: 10rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 45%;
    text-align: center;
    h4 {
      margin-bottom: 3rem;
    }
    p {
      opacity: 0.8;
    }
  }
  .perks-details {
    max-width: 111rem;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: -8.5rem;
    .perk-card {
      flex: 0 1 33rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      border-radius: 0.8rem;
      background: ${(props) => props.theme.primaryColors.darkCyan};
      padding: 6.5rem 4rem 4rem;
      img {
        width: 6rem;
      }
      h4 {
        margin-top: 5.5rem;
        margin-bottom: 2.4rem;
      }
    }
  }
`;

export default Perks;

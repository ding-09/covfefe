import React from 'react';
import styled from 'styled-components';
import GranEspresso from '../../assets/home/desktop/image-gran-espresso.png';
import Planalto from '../../assets/home/desktop/image-planalto.png';
import Piccollo from '../../assets/home/desktop/image-piccollo.png';
import Danche from '../../assets/home/desktop/image-danche.png';

const Collection = () => {
  return (
    <StyledCollection>
      <h1 className="alternate-title">our collection</h1>
      <section className="coffee-beans">
        <article className="coffee-card">
          <img src={GranEspresso} alt="gran espresso coffee beans" />
          <h4>Gran Espresso</h4>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </article>
        <article className="coffee-card">
          <img src={Planalto} alt="planalto coffee beans" />
          <h4>Planalto</h4>
          <p>
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts.
          </p>
        </article>
        <article className="coffee-card">
          <img src={Piccollo} alt="piccollo coffee beans" />
          <h4>Piccollo</h4>
          <p>
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </article>
        <article className="coffee-card">
          <img src={Danche} alt="danche coffee beans" />
          <h4>Danche</h4>
          <p>
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes.
          </p>
        </article>
      </section>
    </StyledCollection>
  );
};

const StyledCollection = styled.section`
  width: 90%;
  height: 53rem;
  margin: 0 auto 20rem;
  position: relative;
  h1 {
    text-align: center;
    opacity: 0.5;
    padding-top: 8rem;
    height: 19rem;
    background-color: ${(props) => props.theme.primaryColors.grey};
    background-image: linear-gradient(
      180deg,
      rgba(254, 252, 247, 0.0001) 0%,
      #fefcf7 100%
    );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  .coffee-beans {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 90%;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    .coffee-card {
      flex: 0 0 23%;
      text-align: center;
      img {
        width: 25.5rem;
        height: 19.3rem;
      }
      h4 {
        padding-top: 5rem;
        padding-bottom: 2.4rem;
        color: ${props => props.theme.primaryColors.darkGreyBlue}
      }
      p {
        font-weight: 300;
      }
    }
  }
`;

export default Collection;

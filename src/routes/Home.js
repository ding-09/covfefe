import React from 'react';
import Hero from '../components/Home/Hero';
import Collection from '../components/Home/Collection';
import Perks from '../components/Home/Perks';

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Collection />
      <Perks />
    </section>
  );
};

export default Home;

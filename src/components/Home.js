import React from 'react';
import InteractiveSection from './zodiacGame';
import Footer from './footer';
import GallerySectionComponent from './Gallery';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Sanrio World</h2>
      <p>Explore the magical world of Sanrio characters!</p>
      <InteractiveSection />
      <Footer />
      <GallerySectionComponent />
    </div>
  );
}

export default Home;

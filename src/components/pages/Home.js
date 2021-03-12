import React from 'react';
import '../../App.css';
import Cards from '../HomeComPages/Cards';
import HeroSection from '../HomeComPages/HeroSection';
import Footer from '../HomeComPages/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

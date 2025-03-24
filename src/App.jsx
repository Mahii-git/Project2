 import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import HeroSection from './components/HeroSection';
import CountrySection from './components/CountrySection';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <HeroSection />
      <CountrySection />
      <Services />
      <Footer />
    </div>
  );
};

export default App;

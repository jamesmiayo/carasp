import React from 'react';
import Home from './scene/home/Index';
import Nav from './scene/nav/Nav';
import './App.css';
import Footer from './scene/footer/Footer';

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
};

export default App;

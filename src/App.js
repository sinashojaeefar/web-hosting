import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <Products />
        <Cards />
        <Newsletter />
        <Footer />
       
    </div>
  );
}

export default App;

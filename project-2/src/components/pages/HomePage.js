import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../footer';
import Landing from '../landing';

function Home() {
  return (
    <>
      <Landing />
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;
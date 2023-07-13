import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Graphs from './component/Graphs';
import Menu from './component/Menu';
import './App.css';



function App() {

  return (
    <>
      <Header />
      <Menu />
      <Graphs />
      <Footer />
    </>
  );
}

export default App;

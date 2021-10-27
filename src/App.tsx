import React from 'react';
import Home from './pages/Home/Home';
import Navbar from './components/statics/Navbar/Navbar';
import Footer from './components/statics/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

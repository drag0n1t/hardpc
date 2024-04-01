import React from 'react';
import Header from "./Header";
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './index.css';

function App() {
  return (
      <div className="App">
        <Header />
            <Home path="/"/>
            <About path="/about"/>
            <Contact path="/contact"/>
        <Footer />
      </div>
  );
}

export default App;
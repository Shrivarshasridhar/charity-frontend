import React from 'react';
import './HeroSection.css';  

const HeroSection = () => (
  <div className="hero-section text-center text-white py-5">
    <div className="container">
      <h1 className="display-4 animated-title">Do something incredible today</h1>
      <p className="lead mb-4 animated-text">Join hands with us to bring smiles to millions.</p>
      <a href="/donation" className="btn btn-light btn-lg animated-btn shadow-lg">
        Donate now
      </a>
    </div>
  </div>
);

export default HeroSection;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Campaigns from './pages/Campaigns';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import VolunteerSignup from './pages/VolunteerSignup';
import Login from './pages/Login';
import SignUpPage from './pages/SignUpPage';  

const App = () => (
  <BrowserRouter>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        
        
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/volunteer-signup" element={<VolunteerSignup />} />
        
      
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;

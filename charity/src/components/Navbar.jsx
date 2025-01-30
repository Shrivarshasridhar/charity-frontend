import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


import logo from '../assets/logo.jpg';
import './Navbar.css'; 

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); 

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="DonateKart Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          DonateKart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/campaigns">Campaigns</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donation">Donation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/volunteer-signup">Volunteer</Link>
            </li>
            

            
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white px-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-secondary text-white px-3" to="/sign-up">Sign Up</Link> {/* Added Sign Up link */}
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

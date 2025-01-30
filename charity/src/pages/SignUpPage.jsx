import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css'; 

const SignUpPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'donor', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (userData.password !== userData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      
      const response = await axios.post('https://charity-backend-lknu.onrender.com/users/register', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: userData.role,
      });

      if (response.status === 201) {
        alert('User created successfully!');
        window.location.href = '/login'; 
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('There was an error while signing up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            className="form-control"
            value={userData.role}
            onChange={handleChange}
          >
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn">Sign Up</button>
        <div className="form-footer">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;

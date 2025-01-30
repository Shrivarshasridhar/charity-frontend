import React, { useState } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Login Successful!");
        localStorage.setItem("user", JSON.stringify(response.data.user)); 
        navigate("/"); 
      }
    } catch (error) {
      alert("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div 
      className="container mt-5" 
      style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "20px" }}
    >
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;

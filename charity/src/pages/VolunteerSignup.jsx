import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container } from "react-bootstrap";

function VolunteerSignup() {
  const [volunteerInfo, setVolunteerInfo] = useState({
    name: "",
    email: "",
    event: "",
  });

  const handleChange = (e) => {
    setVolunteerInfo({
      ...volunteerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (volunteerInfo.event === "") {
      alert("Please select an event.");
      return;
    }

    try {
      
      const response = await axios.post("http://localhost:5000/volunteers/signup", volunteerInfo);

      if (response.status === 201) {
        alert("Thank you for signing up as a volunteer!");
        setVolunteerInfo({ name: "", email: "", event: "" }); // Reset form after submission
      }
    } catch (error) {
      alert("Error signing up. You may have already registered.");
      console.error("Signup error:", error);
    }
  };

  return (
    <Container>
      <h2 className="my-4">Volunteer Sign-Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="volunteerName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={volunteerInfo.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="volunteerEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={volunteerInfo.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="volunteerEvent" className="mt-3">
          <Form.Label>Select Event</Form.Label>
          <Form.Control as="select" name="event" value={volunteerInfo.event} onChange={handleChange} required>
            <option value="">-- Select an Event --</option>
            <option value="Charity Run">Charity Run</option>
            <option value="Fundraising Dinner">Fundraising Dinner</option>
            <option value="Beach Clean-Up">Beach Clean-Up</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default VolunteerSignup;

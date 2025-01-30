import React from "react";
import about from "../assets/about.jpg";
import impact from "../assets/impact.jpg";

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
        DonateKart is India’s most trusted and transparent crowdfunding platform dedicated to bringing social change. We empower NGOs and individuals by enabling them to raise funds for essential products instead of money, ensuring direct and impactful donations.
        </p>
      </div>

      
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src={about} alt="Our Mission" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold">Our Mission</h3>
          <p>
            We strive to create a meaningful impact by addressing social challenges
            through sustainable programs in education, healthcare, and community
            development. Every action we take is fueled by the belief that we can
            build a brighter future together.
          </p>
        </div>
      </div>

      
      <div className="bg-light p-5 rounded mb-5 text-center">
        <h3 className="fw-bold mb-3">What We Do</h3>
        <p className="text-muted">
          From funding scholarships and medical aid to disaster relief and skill
          development, our initiatives empower communities to rise above
          adversity.At DonateKart, we revolutionize the way people contribute to social causes by making philanthropy transparent, impactful, and hassle-free. Instead of donating money, donors can directly purchase essential products needed by NGOs, ensuring that every contribution reaches the right hands.
        </p>
      </div>

      
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold">Our Impact</h3>
          <p>
            Through the dedication of our donors, volunteers, and partners, we have
            transformed lives across the globe. Join us in making a lasting
            difference where it matters most.
          </p>
        </div>
        <div className="col-md-5">
          <img src={impact} alt="Impact" className="img-fluid rounded shadow" />
        </div>
      </div>

      
    </div>
  );
}

export default AboutUs;

import React from "react";
import HeroSection from "../components/HeroSection";

import CampaignCard from "../components/CampaignCard";



import educationImage from "../assets/education.jpg";
import foodImage from "../assets/food.jpg";
import eldersImage from "../assets/elders.jpg";  
import orphanImage from "../assets/orphan.jpg";  
import wildfireImage from "../assets/wildfire.jpg"; 
import healthcare from "../assets/healthcare.jpg";

const Home = () => (
  <div>
    <HeroSection />
    <div className="container mt-5">
      <h2 className="text-center my-4">Support a cause</h2>
      <div className="row">
        <div className="col-md-4">
          <CampaignCard
            title="Education for All"
            description="Help underprivileged kids go to school."
            progress={75}
            image={educationImage} 
          />
        </div>
        <div className="col-md-4">
          <CampaignCard
            title="Feed the Hungry"
            description="Provide meals to families in need."
            progress={60}
            image={foodImage} 
          />
        </div>
        <div className="col-md-4">
          <CampaignCard
            title="Elders"
            description="Protect the Abandoned Elders."
            progress={85}
            image={eldersImage} 
          />
        </div>
        <div className="col-md-4">
          <CampaignCard
            title="No Child Orphaned"
            description="Give hope,change a Life."
            progress={85}
            image={orphanImage} 
          />
        </div>
        <div className="col-md-4">
          <CampaignCard
            title="Disaster"
            description="Rebuild with Compassion."
            progress={85}
            image={wildfireImage} 
          />
        </div>
        <div className="col-md-4">
          <CampaignCard
            title="Health Care"
            description="Healing Hands,Bright Futures."
            progress={50}
            image={healthcare} 
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;

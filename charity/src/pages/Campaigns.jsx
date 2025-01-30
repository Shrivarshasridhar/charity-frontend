import React from "react";
import CampaignCard from "../components/CampaignCard";
import images from "../assets/images.jpg"; 
import medicalImage from "../assets/doc.jpg";

function Campaigns() {
  const campaigns = [
    {
      title: "Clean Water Project",
      description: "Provide clean drinking water to rural areas.",
      goal: 10000,
      raised: 7500,
      image: images,
      progress: (7500 / 10000) * 100,
    },
    {
      title: "Medical Aid for Families",
      description: "Support families with essential medical supplies.",
      goal: 8000,
      raised: 6000,
      image: medicalImage, 
      progress: (6000 / 8000) * 100,
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Our Campaigns</h1>
      <div className="row">
        {campaigns.map((campaign, index) => (
          <div className="col-md-4" key={index}>
            <CampaignCard {...campaign} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Campaigns;

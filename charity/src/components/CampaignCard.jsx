

import React from "react";
import ProgressionBar from "./ProgressionBar"; 

const CampaignCard = ({ title, description, progress, image }) => (
  <div className="card mb-4">
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      
      
      <ProgressionBar progress={progress} />
      
      
    </div>
  </div>
);

export default CampaignCard;

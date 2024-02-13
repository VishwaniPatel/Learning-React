import React, { useState } from "react";
import "./RestaurantCard.css";
import { IMG_CDN_URL } from "../../environment";
import RestaurantInfo from "./RestaurantInfo";
// receive data as props
const RestaurantCard = () => {
  // create state for show/hide restaurant info
  const [isVisible, setIsVisible] = useState(false);
  console.log(cardData);

  const handleToggleHover = () => {
    // Toggle the state on hover
  };

  return (
    // Display restaurant card
    <div className="card-wrapper">
      <div className="card">
        <div className="img-wrapper">
          <img src="add image" />
        </div>
        <div className="res-name">
          <h5 className="resName">Print Restaurant Name</h5>
        </div>
        {/* on hover display restaurant info */}
        {/* Pass data as props */}
        {isVisible && <RestaurantInfo></RestaurantInfo>}
      </div>
    </div>
  );
};

export default RestaurantCard;

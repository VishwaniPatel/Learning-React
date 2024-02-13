import React from "react";
import "./RestaurantInfo.css";
import { IconPointFilled, IconStar } from "@tabler/icons-react";
// receive data as props
const RestaurantInfo = () => {
  // Check average rating type

  return (
    <div className="modal">
      <p> Display Cuisines</p>
      <div>
        <div className="rating-info">
          <>
            {/* color="add color based on ratingType" */}
            <IconStar size={14} color="ratingType" />
            <p className="ratings ratingType">Display avgRating</p>
          </>

          <IconPointFilled />
          <p> Display Delivery Time</p>
        </div>
        <p> Display Locality</p>
      </div>
    </div>
  );
};

export default RestaurantInfo;

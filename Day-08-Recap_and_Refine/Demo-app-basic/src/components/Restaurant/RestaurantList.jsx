import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./RestaurantList.css";
// Receive data as props
const RestaurantList = () => {
  return (
    // pass restaurant data to card
    <div className="restaurantLists">
      <RestaurantCard />;
    </div>
  );
};

export default RestaurantList;

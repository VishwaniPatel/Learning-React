import React, { useEffect, useState } from "react";
import { FETCH_RESTAURANTS } from "../../environment";
import RestaurantList from "../Restaurant/RestaurantList";
// import RestaurantCard from "../Restaurant/RestaurantCard";

const Main = () => {
  // Manage state to store all restaurants data

  useEffect(() => {
    // get restaurant data using function
  }, []);

  async function getRestaurants() {
    //API CALL to fetch list of restaurants
  }
  return (
    <div>
      {/* pass restaurants data as prop */}
      <RestaurantList />
    </div>
  );
};

export default Main;

import React from "react";
import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../contants";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  console.log("restId", resId);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4777109&lng=77.5067606&restaurantId=${resId}&catalog_qa=undefined&submitAction`
    );
    const json = await data.json();
    console.log(json?.data?.cards);

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return restaurant;
};
export default useRestaurant;

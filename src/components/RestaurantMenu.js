import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
// import { info } from "autoprefixer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { info } from "autoprefixer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();
  const addFoodItem = (arg) => {
    console.log("arg",arg);
    dispatch(addItem(arg));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="">
      <h1>RestaurantMenu id:{resId} </h1>
      <h1>{restaurant.name}</h1>
      <img
        className="w-80 h-60"
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
      />
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.areaName}</h3>
      <h3>{restaurant.avgRating}star</h3>
      <h3>{restaurant.costForTwo}</h3>
      <h3>{restaurant.cuisines}</h3>
      <div>
        <button
          className="p-2 m-5 bg-green-100"
          onClick={() => addFoodItem(restaurant)}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4777109&lng=77.5067606&restaurantId=78041&catalog_qa=undefined&submitAction=ENTER

// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4777109&lng=77.5067606&restaurantId=78041&catalog_qa=undefined&submitAction";

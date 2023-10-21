import { IMG_CDN_URL } from "../contants";

const FoodItem = ({ name, action, costForTwo, cartItems }) => {
  // console.log("img", info?.cloudinaryImageId);
  console.log("cartItems", cartItems);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cartItems?.cloudinaryImageId} />
      <h2 className="font-bold text-xl">{cartItems?.name}</h2>
      <h3>{cartItems?.costForTwo}</h3>
      <h4>{cartItems?.avgRating}</h4>
      <h4>{cartItems?.areaName}</h4>
    </div>
  );
};

export default FoodItem;

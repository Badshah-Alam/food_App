import { IMG_CDN_URL } from "../contants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ name, action, info }) => {
  const {user}  = useContext(UserContext);
  // console.log("img", info?.cloudinaryImageId);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + info?.cloudinaryImageId} />
      <h2 className="font-bold text-xl">{info?.name}</h2>
      <h3>{info?.costForTwo}</h3>
      <h4>{info?.avgRating}star</h4>
      <h4>{info?.areaName}</h4>
      <h5 className="font-bold">{user?.name} - {user.email}</h5>
    </div> 
  );
};
export default RestaurantCard;

import { restrauntList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { data } from "browserslist";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSeachText] = useState();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    //API call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4777109&lng=77.5067606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>offline,please check your internet connection!!</h1>;
  }
  // console.log("render");

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-2">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            //e.target.value=>whatever you write input
            setSeachText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-900 text-white rounded-md"
          onClick={() => {
            // need to filter the data
            if (searchText !== "" && searchText !== undefined) {
              const info = filterData(searchText, allRestaurants);
              // update the state-restaurants
              setFilteredRestaurants(info);
            }
          }}
        >
          search
        </button>
        <input
          value={user?.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>
        <input
          value={user?.email}
          onChange={(e) =>
            setUser({
              ...user,

              email: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant?.info?.id}>
              <RestaurantCard
                {...restaurant}
                key={restaurant?.info?.id}
                // user={user}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

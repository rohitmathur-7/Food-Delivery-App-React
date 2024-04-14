import RestaurantCard, { withRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../utils/mockdata";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Dish from "./Dish";
import useAllRestaurants from "../utils/useAllRestaurants";
import imgSearch from "../assets/white-search.svg";

const Body = () => {
  const listOfRes = useAllRestaurants();
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  useEffect(() => {
    setFilteredListOfRes(listOfRes);
  }, [listOfRes]);

  const [search, setSearch] = useState("");

  const filterList = () => {
    const filteredList = listOfRes.filter((item) => {
      return item.info.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredListOfRes(filteredList);
  };

  const TopRatedRestaurants = withRestaurantCard(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return "You are offline. Please check your Internet connection";
  }
  console.log("🚀 ~ Body ~ listOfRes:", listOfRes.length);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body font-montserra">
      <div className="flex flex-col items-center ">
        <Dish />
      </div>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          placeholder="Search for dishes or restaurants"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="border border-gray-400 text-gray-600 focus-visible:outline-none rounded-md px-3 py-2 w-72"
        />
        <button
          onClick={() => {
            filterList();
          }}
          className="bg-[#fb923c] text-white font-medium p-2 rounded-md flex gap-1 items-center"
        >
          <span>
            <img src={imgSearch}></img>
          </span>
          Search
        </button>
        <button
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredListOfRes(filteredList);
          }}
          className="bg-[#fb923c] text-white font-medium p-2 rounded-md flex gap-1 items-center"
        >
          High Rated Restaurants!
        </button>
      </div>
      <br></br>
      <div className="res-container flex flex-wrap justify-center">
        {filteredListOfRes.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <TopRatedRestaurants resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

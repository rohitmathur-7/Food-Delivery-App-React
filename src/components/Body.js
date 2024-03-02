import RestaurantCard, { withRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../utils/mockdata";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Dish from "./Dish";
import useAllRestaurants from "../utils/useAllRestaurants";

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

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body font-montserrat">
      <div className="flex flex-col items-center ">
        <h2 className="font-bold text-2xl">What's on your mind</h2>
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
          className="border border-gray-400 text-gray-600  focus-visible:outline-none rounded-md px-3 py-2 w-72"
        />
        <button
          onClick={() => {
            filterList();
          }}
          className="bg-[#fb923c] text-white font-medium p-2 rounded-md flex gap-1 items-center"
        >
          {/* <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
            >
              <path
                d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
                fill="#ffffff"
                stroke="#ffffff"
                stroke-width="1.5"
              />
            </svg>
          </span> */}
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
      {/* <div></div> */}
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

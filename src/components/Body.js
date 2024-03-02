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

  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return "You are offline. Please check your Internet connection";
  }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <div>
        <h2>What's on your mind</h2>
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
          className="border border-black rounded-md px-3 py-2 w-72"
        />
        <button
          onClick={() => {
            filterList();
          }}
          className="bg-[#fb923c] text-white p-2 rounded-md"
        >
          Search
        </button>
      </div>
      <br></br>
      <button
        onClick={() => {
          const filteredList = listOfRes.filter(
            (res) => res.info.avgRating > 4.3
          );
          setFilteredListOfRes(filteredList);
        }}
      >
        High Rated Restaurants!
      </button>
      <div className="res-container flex flex-wrap gap-5">
        {filteredListOfRes.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
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

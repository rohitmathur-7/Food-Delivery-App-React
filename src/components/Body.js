import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../utils/mockdata";
import { SWIGGY_ALL_RESTAURANTS } from "../utils/constants";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_ALL_RESTAURANTS);

    const json = await data.json();
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="app-body">
      <input
        type="text"
        placeholder="Search for dishes or restaurants"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() => {
          const filteredList = listOfRes.filter(
            (res) => res.info.avgRating > 4.3
          );
          setListOfRes(filteredList);
        }}
      >
        High Rated Restaurants!
      </button>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} search={search} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

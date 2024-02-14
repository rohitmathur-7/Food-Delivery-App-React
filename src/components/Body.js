import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9243316&lng=75.8123829&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
          <RestaurantCard
            key={restaurant.info.id}
            resData={restaurant.info}
            search={search}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

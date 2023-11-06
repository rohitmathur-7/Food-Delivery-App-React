import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [search, setSearch] = useState("");

  return (
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

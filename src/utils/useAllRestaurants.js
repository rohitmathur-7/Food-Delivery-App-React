import { useEffect, useState } from "react";
import { SWIGGY_ALL_RESTAURANTS } from "../utils/constants";

const useAllRestaurants = () => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_ALL_RESTAURANTS);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9243316&lng=75.8123829&page_type=DESKTOP_WEB_LISTING"
    // );

    const json = await data.json();
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setFilteredListOfRes(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  return listOfRes;
};

export default useAllRestaurants;

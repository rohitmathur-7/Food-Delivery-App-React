import { useEffect, useState } from "react";
import { SWIGGY_ALL_RESTAURANTS } from "../utils/constants";

const useAllRestaurants = () => {
  const [listOfRes, setListOfRes] = useState([]);

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

  return listOfRes;
};

export default useAllRestaurants;

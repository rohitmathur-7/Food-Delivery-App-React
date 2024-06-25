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
    let resData;
    if (window.innerWidth > 768) {
      resData =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRes(resData || []);
    } else {
      resData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRes(resData || []);
    }
  };

  return listOfRes;
};

export default useAllRestaurants;

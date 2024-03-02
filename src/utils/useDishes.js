import { useEffect, useState } from "react";
import { SWIGGY_ALL_RESTAURANTS } from "../utils/constants";

const useDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_ALL_RESTAURANTS);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9243316&lng=75.8123829&page_type=DESKTOP_WEB_LISTING"
    // );

    const json = await data.json();
    setDishes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  return dishes;
};

export default useDishes;

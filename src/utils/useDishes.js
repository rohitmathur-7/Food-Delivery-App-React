import { useEffect, useState } from "react";
import { SWIGGY_ALL_RESTAURANTS } from "../utils/constants";
import { SWIGGY_TOP_PICKS } from "../utils/constants";

const useDishes = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (window.innerWidth > 768) {
      const data = await fetch(SWIGGY_ALL_RESTAURANTS);
      const json = await data.json();
      setDishes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info || []);
    } else {
      const data = await fetch(SWIGGY_TOP_PICKS);
      const json = await data.json();
      setDishes(
        json?.data?.success.cards[1].gridWidget.gridElements.infoWithStyle
          .restaurants || []
      );
    }
  };

  return dishes;
};

export default useDishes;

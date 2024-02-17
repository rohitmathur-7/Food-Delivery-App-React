import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import { swiggy_menu_api_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <>
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoMessage}</h4>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} - ₹{item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;

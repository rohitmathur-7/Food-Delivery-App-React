import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  if (itemCards === undefined) return <Shimmer />;

  return (
    <>
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoMessage}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.name}>
            {item.card.info.name} - ₹
            {item.card.info?.defaultPrice / 100 || item.card.info?.price / 100}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RestaurantMenu;

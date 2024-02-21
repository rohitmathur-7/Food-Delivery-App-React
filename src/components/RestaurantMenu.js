import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("🚀 ~ RestaurantMenu ~ itemCards:", itemCards);

  // console.log(
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  // );

  if (itemCards === undefined) return <Shimmer />;

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h4 className="font-medium">{cuisines.join(", ")}</h4>
        <h4 className="font-medium">{costForTwoMessage}</h4>
        <ul>
          {itemCards.map((item) => (
            <RestaurantCategory
              key={item.card.card.title}
              data={item.card.card}
            />
            // <li key={item.card.info.name}>
            //   {item.card.info.name} - ₹
            //   {item.card.info?.defaultPrice / 100 ||
            //     item.card.info?.price / 100}
            // </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;

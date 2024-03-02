import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(null);
  console.log("🚀 ~ RestaurantMenu ~ resInfo:", resInfo);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    cuisines,
    city,
    locality,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleShowItem = (index) => {
    index === showItem ? setShowItem(null) : setShowItem(index);
  };

  if (itemCards === undefined) return <Shimmer />;

  return (
    <>
      <div className="text-center mt-10 ">
        <div className="flex justify-around">
          <div>
            <h2 className="font-medium text-2xl">{name}</h2>
            <h4 className="font-extralight">{cuisines.join(", ")}</h4>
            <h4 className="font-extralight">
              {city}, {locality}
            </h4>
          </div>
          <div>
            <h4 className="font-bold border-b-2 pb-2 text-[#3d9b6d] ">
              ⭐️ {avgRating}
            </h4>
            <h4 className="font-extralight pt-2 ">{totalRatingsString}</h4>
          </div>
        </div>
        <h4 className="font-extralight">{costForTwoMessage}</h4>
        <ul>
          {itemCards.map((item, index) => (
            <RestaurantCategory
              key={item.card.card.title}
              data={item.card.card}
              showItem={index === showItem && true}
              setShowItem={() => handleShowItem(index)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;

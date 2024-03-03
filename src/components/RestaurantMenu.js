import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import rupee from "../assets/rupee.svg";

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

  const offers =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const handleShowItem = (index) => {
    index === showItem ? setShowItem(null) : setShowItem(index);
  };

  if (itemCards === undefined) return <Shimmer />;

  return (
    <>
      <div className="text-center w-[700px] mx-auto mt-10">
        <div className="flex justify-between pb-4 border-b-2 border-dashed ">
          <div>
            <h2 className="font-medium text-2xl">{name}</h2>
            <h4 className="font-extralight text-left ">
              {cuisines.join(", ")}
            </h4>
            <h4 className="font-extralight text-left ">
              {city}, {locality}
            </h4>
          </div>
          <div className="border-[1px] p-2 rounded-lg ">
            <h4 className="font-bold border-b-[1px] pb-2 text-[#3d9b6d] ">
              ⭐️ {avgRating}
            </h4>
            <h4 className="font-medium text-[10px] pt-2 ">
              {totalRatingsString}
            </h4>
          </div>
        </div>
        <div className="my-4 flex gap-2 ">
          <img
            src={rupee}
            className="w-[25px] h-[25px] p-[5px] border-black border-[1px] rounded-full "
          />
          <h4 className="font-bold">{costForTwoMessage}</h4>
        </div>
        <div className="flex overflow-x-scroll no-scrollbar m-auto gap-6 text-sm w-full ">
          {offers.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] border border-gray-300 text-gray-600 p-2 rounded-lg flex flex-col justify-evenly "
            >
              <div className="flex items-center ">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
                  className="mr-2 w-[20px] "
                />
                <h4 className="font-semibold">{item.info.header}</h4>
              </div>
              <div className="flex font-light text-[10px] ">
                <h4 className="border-r-[1px] border-gray-300 pr-2">
                  {item.info.couponCode}
                </h4>
                <h4 className="pl-2">{item.info.description}</h4>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-8">
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

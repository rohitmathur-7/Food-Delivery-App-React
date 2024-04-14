import { useContext } from "react";
import { RES_CARD_IMG } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, sla, cuisines, cloudinaryImageId } = resData;

  return (
    <div className="res-card w-72 my-5 mx-4">
      <img
        className="card-img w-full h-52 object-cover rounded-3xl "
        src={RES_CARD_IMG + cloudinaryImageId}
      />
      <div className="py-2 px-4">
        <h3 className="font-bold">{name}</h3>
        <div className="flex font-semibold ">
          <span className="pr-2">{avgRating}</span>
          <span className="pr-2">.</span>
          <span>{sla.slaString}</span>
        </div>
        <h5 className="text-gray-600 truncate">{cuisines.join(", ")}</h5>
      </div>
    </div>
  );
};

export const withRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="my-5 mx-4 relative ">
        <span className="font-medium text-white bg-black px-3 py-2 rounded-md absolute -top-2 left-2 ">
          Top Rated
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
